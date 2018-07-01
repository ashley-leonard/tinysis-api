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
      end
    end

    if params[:coordinator_id]
      conditions[:coordinator_id] = params[:coordinator_id]
    end

    @result = User
      .where(conditions)
      .limit(limit)
    @count = User.where(conditions).count
logger.info "#{@count} is count"
    render json: @result, status: 200
  end
end
