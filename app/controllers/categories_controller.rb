class CategoriesController < ApplicationController
  def index

    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    order = (params[:order] || '')
      .split(',')
      .map(&:underscore)
      .join(',')

    result = Category
      .order(Arel.sql(order))
      .limit(limit)

    count = Category.count

    options = { meta: { count: count }}

    render json: CategorySerializer.new(result, options), status: 200
  end
end
