# frozen_string_literal: true

class StatusController < ApiBaseController
  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == '-1'

    joins = []

    conditions = {}
    selects = ['statuses.*']
    if params[:months]
      conditions[:month] = params[:months]
                           .split(',')
                           .collect { |month| expand_month(month) }
    end

    if params[:enrollmentIds] && params[:studentIds]
      return render json: { message: 'conflicting request; must fetch enrollment or student status separately' }, status: 400
    end

    if params[:type]
      type = params[:type].downcase

      case type
      when 'enrollment'
        conditions[:statusable_type] = 'Enrollment'
      when 'student'
        conditions[:statusable_type] = 'User'
      else
        return render json: { message: 'unknown status type' }, status: 400
      end
    end

    emptyResult = {
      data: [],
      meta: {
        count: 0
      }
    }

    if params[:studentIds]
      studentIds = params[:studentIds]
      return render json: emptyResult, status: 200 if studentIds.blank?

      conditions[:statusable_id] = studentIds.split(',')
      conditions[:statusable_type] = 'User'
    end

    if params[:enrollmentIds]
      enrollmentIds = params[:enrollmentIds]
      return render json: emptyResult, status: 200 if enrollmentIds.blank?

      conditions[:statusable_id] = params[:enrollmentIds].split(',')
      conditions[:statusable_type] = 'Enrollment'
    end

    if conditions[:statusable_type] == 'User'
      joins.push('INNER JOIN users AS students ON students.id = statuses.statusable_id')
      selects.push('students.coordinator_id as coordinator_id')
    end

    result = Status
             .where(conditions)
             .joins(joins.join(' '))
             .select(selects.join(','))
             .limit(limit)
    count = Status.where(conditions).count

    options = {
      meta: {
        count: count
      },
      include: [:creator]
    }

    render json: StatusSerializer.new(result, options), status: 200
  end
end
