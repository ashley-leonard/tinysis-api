class StudentsController < ApplicationController
  def index

    limit = params[:limit] || 100

    conditions = {
      privilege: 1,
      status: 1
    }

    if params[:status]
      conditions[:status] = case params[:status]
      when 'active'
        1
      when 'inactive'
        2
      when 'all'
        nil
      else
        return render json: { message: 'invalid status parameter' }, status: 400
      end
    end

    if params[:coordinator_id]
      conditions[:coordinator_id] = params[:coordinator_id]
    end

    conditions.delete :status if conditions[:status].nil?

    @result = User
      .where(conditions)
      .limit(limit)

    @count = User.where(conditions).count

    render json: @result, status: 200
  end
end
 