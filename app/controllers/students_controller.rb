class StudentsController < ApplicationController
  def index

    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    order = (params[:order] || '').split(',').map(&:underscore).join(',')

    conditions = {
      privilege: User::PRIVILEGE_STUDENT,
    }

    additional_conditions = nil

    conditions[:status] = case params[:status]
      when 'active'
        User::STATUS_ACTIVE
      when 'inactive'
        User::STATUS_INACTIVE
      when 'reportable'
      when 'all'
      when nil
        nil
      else
        return render json: { message: 'invalid status parameter' }, status: 400
    end

    case params[:status]
      when nil
        conditions.delete :status
      when 'reportable'
        conditions.delete :status
        term = Term.coor
        additional_conditions = ["(status = #{User::STATUS_ACTIVE}) OR ((status = #{User::STATUS_INACTIVE}) AND ((date_inactive >= ?) AND (date_inactive <= ?)))", term.months.first, term.months.last.end_of_month]
    end

    if params[:coordinator_id]
      conditions[:coordinator_id] = params[:coordinator_id].split(',')
    end

    result = User
      .where(conditions)
      .where(additional_conditions)
      .limit(limit)
      .order(Arel.sql(order))

    count = User
      .where(conditions)
      .where(additional_conditions)
      .count

    options = { meta: { count: count }}

    render json: StudentSerializer.new(result, options), status: 200
  end
end
