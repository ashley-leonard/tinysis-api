class StatusController < ApplicationController
  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    conditions = {}

    if params[:months]
      conditions[:month] = params[:months].split(',')
    end

    if params[:enrollment_ids] && params[:student_ids]
      return render json: { message: 'conflicting request; must fetch enrollment or student status separately', }, status: 400
    end

    if (params[:enrollment_ids] || params[:student_ids]) && params[:type]
      return render json: { message: 'conflicting request; combination of a type AND enrollment or student IDs can cause illogical results', }, status: 400
    end

    if params[:type]
      type = params[:type].downcase

      conditions[:statusable_type] = case type
      when 'enrollment'
        'Enrollment'
      when 'student'
        'User'
      else
        return render json: { message: 'unknown status type' }, status: 400
      end
    end

    if params[:student_ids]
      conditions[:statusable_id] = params[:student_ids].split(',')
      conditions[:statusable_type] = 'User'
    end

    if params[:enrollment_ids]
      conditions[:statusable_id] = params[:enrollment_ids].split(',')
      conditions[:statusable_type] = 'Enrollment'
    end

    result = Status
      .where(conditions)
      .limit(limit)
    count = Status.where(conditions).count

    options = { meta: { count: count }}

    render json: StatusSerializer.new(result, options), status: 200
  end
end
