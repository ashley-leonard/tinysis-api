class StaffController < ApplicationController
  def index

    limit = params[:limit] || 100

    conditions = {
      privilege: [User::PRIVILEGE_STAFF, User::PRIVILEGE_ADMIN],
    }

    if params[:status]
      conditions[:status] = case params[:status]
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

    result = User
      .where(conditions)
      .limit(limit)

    count = User.where(conditions).count

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
