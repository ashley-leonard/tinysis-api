class ApplicationController < ActionController::API
  rescue_from ActionController::RoutingError, with: :render_404
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

private
  def expand_month month
    month.sub(/^\d{4}-\d{2}$/, '\0-01')
  end

  def render_404(exception)
    render json: { error: exception.message }, status: :not_found
  end

  def render_unprocessable_entity_response(exception)
    render json: {
      status: 422,
      message: 'Validation error',
      errors: exception.record.errors,
    }, status: :unprocessable_entity
  end

  def raiseActiveRecordInvalidException model, field, error
    model.errors.add field, error
    raise ActiveRecord::RecordInvalid.new(model)
  end
end
