ALLOWED_COLUMNS = %w{first_name last_name nickname}
class StudentsController < ApplicationController
  def index

    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    order = (params[:order] || '')
      .split(',')
      .map(&:strip)
      .map(&:underscore)

    order &= ALLOWED_COLUMNS

    order = order.join(',')

    conditions = {
      privilege: User::PRIVILEGE_STUDENT,
    }

    additional_conditions = nil

    if params[:grade]
      conditions[:district_grade] = params[:grade]
    end

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

    if params[:coordinatorIds]
      conditions[:coordinator_id] = params[:coordinatorIds].split(',')
    end

    if params[:name]
      name_like = "%#{params[:name]}%"
      name_conditions = ['first_name LIKE :name OR last_name LIKE :name OR nickname LIKE :name', { name: name_like } ]
    end

    year_conditions = nil
    if params[:schoolYear]
      start_month, end_month = Term.reporting_dates_for_year(params[:schoolYear])
      year_conditions = ['(date_active <= :start_date) AND (date_inactive IS NULL OR date_inactive >= :end_date)', { start_date: start_month, end_date: end_month.end_of_month  }]
    end

    result = User
      .where(conditions)
      .where(additional_conditions)
      .where(year_conditions)
      .where(name_conditions)
      .limit(limit)
      .order(Arel.sql(order))

    count = User
      .where(conditions)
      .where(additional_conditions)
      .where(year_conditions)
      .where(name_conditions)
      .count

    options = { meta: { count: count }}

    render json: StudentSerializer.new(result, options), status: 200
  end

  def show
    result = User
      .where({
        id: params[:id],
        privilege: User::PRIVILEGE_STUDENT,
      });

    if result.size == 0
      return render json: { message: 'Student not found'}, status: 404
    end

    render json: StudentSerializer.new(result.first)
  end
end
