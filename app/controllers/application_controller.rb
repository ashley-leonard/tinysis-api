class ApplicationController < ActionController::API

private
  def expand_month month
    month.sub(/^\d{4}-\d{2}$/, '\0-01')
  end
end
