class EnrollmentsController < ApplicationController

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
    enrollment = Enrollment.find(params[:id])

    included_models = self.get_includes params[:include]

    options = {
      include: included_models || []
    }

    render json: EnrollmentSerializer.new(enrollment, options), status: 200
  end

  protected

    PERMITTED_INCLUDES = %w{contract contract.facilitator contract.term credit_assignments credit_assignments.credit participant turnins turnins.assignment meeting_participants meeting_participants.meeting}

    def get_includes include_params
      return nil if include_params.nil?

      val = include_params
        .split(',')
        .map(&:underscore) & EnrollmentsController::PERMITTED_INCLUDES
Rails.logger.info "**************************************************************"
Rails.logger.info include_params
Rails.logger.info include_params.split(',')
Rails.logger.info include_params.split(',').map(&:underscore)
Rails.logger.info val
Rails.logger.info "**************************************************************"
      val
    end
end
