class StudentsController < ApplicationController
  def index

    limit = params[:limit] || 100

    conditions = {
      privilege: User::PRIVILEGE_STUDENT,
      status: User::STATUS_ACTIVE
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

    if params[:coordinator_id]
      conditions[:coordinator_id] = params[:coordinator_id]
    end

    result = User
      .where(conditions)
      .limit(limit)

    count = User.where(conditions).count

    options = { meta: { count: count }}

    render json: StudentSerializer.new(result, options), status: 200
  end
end
