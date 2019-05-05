module UserControllerMethods
  extend ActiveSupport::Concern

  included do
    unless const_defined?(:ALLOWED_ORDER_COLUMNS)
      ALLOWED_ORDER_COLUMNS = %w{first_name last_name nickname} 
      ALLOWED_INCLUDES = %w{coordinator}
    end
  end

  def index

    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    order = (params[:order] || '')
      .split(',')
      .map(&:strip)
      .map(&:underscore)

    order &= ALLOWED_ORDER_COLUMNS

    order = order.join(',')

    role_conditions = get_role_conditions

    conditions = {}

    additional_conditions = nil

    if params[:grade]
      conditions[:district_grade] = params[:grade]
    end

    coordinators_join = nil
    if params[:coordinators] == 'true'
      coordinators_join = 'INNER JOIN (SELECT DISTINCT coordinator_id FROM users)  AS coordinators ON users.id = coordinators.coordinator_id'
    end

    conditions[:privilege] = case params[:role]
    when 'administrator'
      User::PRIVILEGE_ADMIN
    when 'staff'
      User::PRIVILEGE_STAFF
    when 'student'
      User::PRIVILEGE_STUDENT
    when nil
      nil
    else
      return render json: { message: 'invalid role parameter' }, status: 400
    end
    conditions.delete(:privilege) unless conditions[:privilege]

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
        additional_conditions = [
          "(status = #{User::STATUS_ACTIVE}) OR ((status = #{User::STATUS_INACTIVE}) AND ((date_inactive >= ?) AND (date_inactive <= ?)))",
          term.months.first,
          term.months.last.end_of_month
        ]
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
      .where(role_conditions)
      .where(additional_conditions)
      .where(year_conditions)
      .where(name_conditions)
      .includes(:coordinator)
      .joins(coordinators_join)
      .limit(limit)
      .order(Arel.sql(order))

    count = User
      .where(conditions)
      .where(role_conditions)
      .where(additional_conditions)
      .where(year_conditions)
      .where(name_conditions)
      .includes(:coordinator)
      .joins(coordinators_join)
      .count

    options = {
      meta: {
        count: count,
      },
      fields: get_allowed_fields,
      include: get_includes,
    }

    render json: UserSerializer.new(result, options), status: 200
  end

  def show
    result = User
      .where(get_role_conditions)
      .where({
        id: params[:id],
      });

    raise ActiveRecord::NotFound if result.size == 0

    options = {
      fields: get_allowed_fields,
      include: get_includes,
    }

    render json: UserSerializer.new(result.first, options)
  end

protected
  def get_allowed_fields
    { user: allowed_fields }
  end

  def get_includes
    return [] unless params[:include]
    return params[:include].split(',') & ALLOWED_INCLUDES
  end
end