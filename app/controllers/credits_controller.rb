# frozen_string_literal: true

class CreditsController < ApiBaseController
  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]
    limit = nil if limit == '-1'

    order = (params[:order] || '').split(',').map(&:underscore).join(',')

    conditions = {}
    search = []

    if params[:search]
      search << '(course_name LIKE ?) OR (course_id LIKE ?)'
      search << "%#{params[:search]}%"
      search << "%#{params[:search]}%"
    end

    conditions[:status] = params[:status] if params[:status]

    result = Credit
             .where(conditions)
             .where(search)
             .order(Arel.sql(order))
             .limit(limit)
    count = Credit
            .where(conditions)
            .where(search)
            .count
    options = {
      meta: {
        count: count
      }
    }
    render json: CreditSerializer.new(result, options)
  end

  def show
    credit = Credit.find params[:id]
    render json: CreditSerializer.new(credit)
  end
end
