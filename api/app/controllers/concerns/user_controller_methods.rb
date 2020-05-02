# frozen_string_literal: true

module UserControllerMethods
  extend ActiveSupport::Concern

  included do
    unless const_defined?(:ALLOWED_ORDER_COLUMNS)
      ALLOWED_ORDER_COLUMNS = %w[first_name last_name nickname].freeze
      ALLOWED_INCLUDES = %w[coordinator].freeze
    end
  end

  def index
    limit = search_conditions[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == '-1'

    order = (search_conditions[:order] || '')
            .split(',')
            .map(&:strip)
            .map(&:underscore)

    order &= ALLOWED_ORDER_COLUMNS

    order = order.join(',')

    role_conditions = get_role_conditions

    scope_conditions = get_scope_conditions

    conditions = {}

    additional_conditions = nil

    conditions[:district_grade] = search_conditions[:grade] if search_conditions[:grade]

    coordinators_join = nil
    if search_conditions[:coordinators] == 'true'
      coordinators_join = 'INNER JOIN (SELECT DISTINCT coordinator_id FROM users)  AS coordinators ON users.id = coordinators.coordinator_id'
    end

    conditions[:privilege] = case search_conditions[:role]
      when 'administrator'
        User::PRIVILEGE_ADMIN
      when 'staff'
        [User::PRIVILEGE_STAFF, User::PRIVILEGE_ADMIN]
      when 'student'
        User::PRIVILEGE_STUDENT
      when nil
        nil
      else
        return render json: { message: 'invalid role parameter' }, status: 400
    end
    conditions.delete(:privilege) unless conditions[:privilege]

    conditions[:status] = case search_conditions[:status]
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

    case search_conditions[:status]
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

    if search_conditions[:coordinatorIds]
      conditions[:coordinator_id] = search_conditions[:coordinatorIds].split(',')
    end

    if search_conditions[:name]
      name_like = "%#{search_conditions[:name]}%"
      name_conditions = ['first_name LIKE :name OR last_name LIKE :name OR nickname LIKE :name', { name: name_like }]
    end

    year_conditions = nil
    if search_conditions[:schoolYear]
      start_month, end_month = Term.reporting_dates_for_year(search_conditions[:schoolYear])
      year_conditions = ['(date_active <= :start_date) AND (date_inactive IS NULL OR date_inactive >= :end_date)', { start_date: start_month, end_date: end_month.end_of_month }]
    end

    result = User
             .where(conditions)
             .where(role_conditions)
             .where(additional_conditions)
             .where(year_conditions)
             .where(name_conditions)
             .where(scope_conditions)
             .includes(:coordinator)
             .joins(coordinators_join)
             .limit(limit)
             .order(Arel.sql(order))

    count = User
            .where(conditions)
            .where(role_conditions)
            .where(additional_conditions)
            .where(year_conditions)
            .where(scope_conditions)
            .where(name_conditions)
            .includes(:coordinator)
            .joins(coordinators_join)
            .count

    options = {
      meta: {
        count: count
      },
      fields: get_allowed_fields,
      include: get_includes
    }

    render json: UserSerializer.new(result, options), status: 200
  end

  def show
    result = User
             .where(get_role_conditions)
             .where(
               id: params[:id]
             )

    raise ActiveRecord::NotFound if result.empty?

    options = {
      fields: get_allowed_fields,
      include: get_includes
    }

    render json: UserSerializer.new(result.first, options)
  end

  protected

  def get_allowed_fields
    { user: allowed_fields }
  end

  def get_includes
    return [] unless params[:include]

    params[:include].split(',') & ALLOWED_INCLUDES
  end

  # override
  def get_role_conditions
    {}
  end

  # override
  def get_scope_conditions
    {}
  end

  def search_conditions
    params.permit(:name, :status, :limit, :order, :grade, :role, :coordinatorIds, :schoolYear, :scope)
  end
end
