class TermsController < ApplicationController
  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    conditions = {}

    if params[:schoolYear]
      conditions[:school_year] = params[:schoolYear]
    end

    if params[:status]
      conditions[:active] = case params[:status]
      when 'active'
        true
      when 'inactive'
        false
      end
    end

    if params[:ids]
      conditions[:id] = params[:ids].split(',')
    end

    type_conditions = nil
    case params[:type]
    when 'coor'
      type_conditions = 'name LIKE "COOR %"'
    end

    result = Term
      .where(conditions)
      .where(type_conditions)
      .limit(limit)
    count = Term
      .where(conditions)
      .where(type_conditions)
      .count

    options = { meta: { count: count }}

    render json: TermSerializer.new(result, options), status: 200
  end

  def show
    contract = Term.find params[:id]

    render json: TermSerializer.new(term), status: 200
  end
end
