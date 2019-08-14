class GraduationPlansController < ApplicationController
  def create

  end

  def show
    plan = GraduationPlan.find_by_user_id params[:student_id]

    if plan
      return render json: GraduationPlanSerializer.new(plan)
    else
      render json: { message: 'not found' }, status: 404 unless plan
    end
    
  end

  def update


  end
end
