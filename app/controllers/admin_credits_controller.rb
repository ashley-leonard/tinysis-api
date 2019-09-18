class AdminCreditsController < ApplicationController
  def create
    credit = Credit.new
    update_attributes credit
    credit.save!

    return render json: CreditSerializer.new(credit)
  end

  def update
    credit = Credit.find params[:id]
    update_attributes credit
    credit.save!

    return render json: CreditSerializer.new(credit)
  end

  def destroy
    credit = Credit.find params[:id]
    update_attributes credit
    credit.save!

    return render json: CreditSerializer.new(credit)
  end

private
  def update_attributes model
    attrs = credit_attributes

    Rails.logger.info '*************'
    Rails.logger.info attrs

    attrs[:course_type] = case attrs[:course_type]
      when 'general'
        Credit::TYPE_GENERAL
      when 'course'
        Credit::TYPE_COURSE
      else
        Credit::TYPE_NONE
      end

    Rails.logger.info '*************'
    Rails.logger.info attrs
    Rails.logger.info '*************'

    model.update_attributes attrs
  end

  def credit_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:course_name, :course_id, :course_type, :status)
  end
end
