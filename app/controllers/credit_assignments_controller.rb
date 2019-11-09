class CreditAssignmentsController < ApplicationController

  before_action :get_student, only: [:approve, :unapprove, :create_for_student]

  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    conditions = {}

    if params[:enrollmentIds]
      conditions[:enrollment_id] = params[:enrollmentIds].split(',')
    end

    if params[:contractIds]
      conditions[:contract_id] = params[:contractIds].split(',')
    end

    if params[:studentIds]
      conditions[:user_id] = params[:studentIds].split(',')
    end

    result = CreditAssignment
      .where(conditions)
      .includes(:credit)
      .limit(limit)
    count = CreditAssignment
      .where(conditions)
      .count

    options = {
      meta: {
        count: count,
      },
      params: {
        forFulfilled: params[:includeFulfilledAttributes] == 'true',
      }
    }

    if params[:include]
      options[:include] = params[:include].split(',').map(&:underscore)
    end

    render json: CreditAssignmentSerializer.new(result, options), status: 200
  end

  def create_for_enrollment
    credit_relation = get_relation(:credit)

    credit = Credit.find credit_relation['id']
    enrollment = Enrollment.find params[:enrollment_id]

    attributes = get_attributes

    new_credit_assignment = CreditAssignment.new attributes
    new_credit_assignment.enrollment = enrollment
    new_credit_assignment.credit = credit
    new_credit_assignment.save!

    render json: CreditAssignmentSerializer.new(new_credit_assignment)
  end

  def create_for_student
    term_relation = get_relation(:contract_term)
    credit_relation = get_relation(:credit)
    child_credit_assignment_ids = get_relation(:child_credit_assignments).map { |ca| ca['id'] }

    attributes = get_attributes

    term = Term.find term_relation['id']
    credit = Credit.find credit_relation['id']
    child_credit_assignments = CreditAssignment
      .where({id: child_credit_assignment_ids, user_id: @student.id})

    raise ActionController::ParameterMissing.new('childCreditAssignments') if child_credit_assignments.empty?

    new_credit_assignment = CreditAssignment.combine(@student, credit[:id], term[:id], attributes[:override_hours], child_credit_assignments, @user)

    render json: CreditAssignmentSerializer.new(new_credit_assignment, { params: { forFulfilled: true } })
  end
  
  def create_for_contract
    credit_relation = get_relation(:credit)
    contract_relation = get_relation(:contract)

    attributes = get_attributes

    credit = Credit.find credit_relation['id']
    contract = Contract.find contract_relation['id']

    new_credit_assignment = CreditAssignment.new attributes
    new_credit_assignment.contract = contract
    new_credit_assignment.credit = credit
    new_credit_assignment.save!

    render json: CreditAssignmentSerializer.new(new_credit_assignment)
  end
  
  def approve
    credit_assignment = CreditAssignment.find params[:id]

    credit_assignment.district_approve @user, approval_attributes[:district_finalize_approved_on]

    render json: CreditAssignmentSerializer.new(credit_assignment, { params: { forFulfilled: true } })
  end

  def unapprove
    credit_assignment = CreditAssignment.find params[:id]

    credit_assignment.district_unapprove

    render json: CreditAssignmentSerializer.new(credit_assignment, { params: { forFulfilled: true } })
  end

  def destroy
    credit_assignment = CreditAssignment.find params[:id]

    children = credit_assignment.child_credit_assignments

    raise TinyException.new("Not permitted to delete this credit assignment") unless children.length > 0 and !credit_assignment.transmitted?

    credit_assignment.uncombine

    render json: CreditAssignmentSerializer.new(children, { includes: [ :credit ] })
  end

protected
  def get_student
    @student = User.find_by_id_and_privilege params[:student_id], User::PRIVILEGE_STUDENT
    raise ActiveRecord::RecordNotFound unless @student
  end

  def get_approval_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:district_finalize_approved_on)
  end

  def get_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:note, :credit_hours, :override_hours)
  end

  def get_relation(relation)
    params
      .require(:data)
      .require(:relationships)
      .require(relation)
      .require(:data)
  end
end
