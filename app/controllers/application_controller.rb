class ApplicationController < ActionController::API

  rescue_from ActionController::RoutingError, with: :render_404

  def render_404(exception)
    render json: { error: exception.message }, status: :not_found
  end

private
  def expand_month month
    month.sub(/^\d{4}-\d{2}$/, '\0-01')
  end

end
