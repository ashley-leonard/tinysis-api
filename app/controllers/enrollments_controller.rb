class EnrollmentsController < ApplicationController

  before_action :get_enrollment, only: [:show, :destroy, :update]
  before_action :entitle_enrollment, only: [:destroy, :update]

  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    conditions = {}

    if params[:participantIds]
      conditions[:participant_id] = params[:participantIds].split(',')
    end

    if params[:contractIds]
      conditions[:contract_id] = params[:contractIds].split(',')
    end

    included_models = self.get_includes params[:include]

    case params[:status]
      when 'enrolled'
        conditions[:enrollment_status] = Enrollment::STATUS_ENROLLED
      when 'closed'
        conditions[:enrollment_status] = Enrollment::STATUS_CLOSED
      when 'fulfilled'
        conditions[:enrollment_status] = Enrollment::STATUS_FULFILLED
      when 'all'
      when nil
        # skip
      else
        return render json: { message: 'invalid enrollment_status parameter' }, status: 400
    end

    result = Enrollment
      .where(conditions)
      .limit(limit)
      .joins('LEFT OUTER JOIN users AS participants ON participants.id = enrollments.participant_id')
      .order('participants.last_name, participants.first_name');

    count = Enrollment.where(conditions).count

    options = {
      meta: {
        count: count
      },
      include: included_models || []
    }

    render json: EnrollmentSerializer.new(result, options), status: 200
  end

  def show
    included_models = self.get_includes params[:include]

    options = {
      include: included_models || []
    }

    render json: EnrollmentSerializer.new(@enrollment, options), status: 200
  end

  def update
    case params[:command]
    when 'cancel'
      @enrollment.set_closed Enrollment::COMPLETION_CANCELED, @user
    when 'fulfill'
      @enrollment.set_closed Enrollment::COMPLETION_FULFILLED, @user
    when 'reinstate'
      @enrollment.set_active @user
    else
      raise TinyException.new("Invalid update command") 
    end

    show
  end

  def destroy
    @enrollment.destroy

    render nothing: true, status: 204
  end

protected
  PERMITTED_INCLUDES = %w{contract contract.facilitator contract.term credit_assignments credit_assignments.credit participant turnins turnins.assignment meeting_participants meeting_participants.meeting}

  def get_includes include_params
    return nil if include_params.nil?

    val = include_params
      .split(',')
      .map(&:underscore) & EnrollmentsController::PERMITTED_INCLUDES

    val
  end

  def get_enrollment
    @enrollment = Enrollment.find(params[:id])
  end

  def entitle_enrollment
    true
  end
end
