class StaffController < ApplicationController
  def index

    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    order = (params[:order] || '').split(',').map(&:underscore).join(',')

    conditions = {
      privilege: [User::PRIVILEGE_STAFF, User::PRIVILEGE_ADMIN],
    }

    schoolYearConditions = nil
    if params[:schoolYear]
      schoolYear = params[:schoolYear]
      coorTerm = Term.coor(schoolYear)
      firstActiveDate = coorTerm.months.first
      lastActiveDate = coorTerm.months.last.end_of_month
      schoolYearConditions = ["(date_inactive IS NULL OR date_inactive > ?) AND (date_active <= ?)", firstActiveDate, lastActiveDate]
    end

    if params[:status]
      conditions[:status] = case params[:status].downcase
      when 'active'
        User::STATUS_ACTIVE
      when 'inactive'
        User::STATUS_INACTIVE
      when 'all'
        nil
      else
        return render json: { message: 'invalid status parameter' }, status: 400
      end
    end
    conditions.delete :status if conditions[:status].nil?

    if params[:coordinators] == 'true'
      conditions[:id] = User.coordinators.map(&:id)
    end

    result = User
      .where(conditions)
      .where(schoolYearConditions)
      .order(Arel.sql(order))
      .limit(limit)

    count = User
      .where(conditions)
      .where(schoolYearConditions)
      .count

    options = { meta: { count: count }}

    render json: StaffSerializer.new(result, options), status: 200
  end

  def show
    conditions = {
      privilege: [User::PRIVILEGE_STAFF, User::PRIVILEGE_ADMIN],
      id: params[:id]
    }

    result = User
      .where(conditions)
      .limit(1)

    return render json: { message: 'Not found' }, status: 404 if result.length == 0 

    render json: StaffSerializer.new(result[0]), status: 200
  end
end
