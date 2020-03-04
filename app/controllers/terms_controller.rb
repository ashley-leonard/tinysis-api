# frozen_string_literal: true

class TermsController < ApiBaseController
  ALLOWED_ORDER_BY = %w[name schoolYear].freeze

  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    conditions = {}

    conditions[:school_year] = params[:schoolYear] if params[:schoolYear]

    orderBy = []
    orderBy = params[:order].split(',') & ALLOWED_ORDER_BY if params[:order]

    if params[:status]
      conditions[:active] = case params[:status]
                            when 'active'
                              true
                            when 'inactive'
                              false
                            else
                              render(json: { message: 'Invalid status parameter' }, status: 400) && return
      end
    end

    conditions[:id] = params[:ids].split(',') if params[:ids]

    type_conditions = nil
    case params[:type]
    when 'coor'
      type_conditions = 'name LIKE "COOR %"'
    end

    result = Term
             .where(conditions)
             .where(type_conditions)
             .order(orderBy.join(','))
             .limit(limit)
    count = Term
            .where(conditions)
            .where(type_conditions)
            .count

    options = {
      meta: {
        count: count
      },
      params: {}
    }

    if params[:include] == 'usage'
      options[:params][:usage] = Term.enrollments_report(result.map(&:id))
    end

    render json: TermSerializer.new(result, options), status: 200
  end

  def show
    term = Term.find params[:id]

    render json: TermSerializer.new(term), status: 200
  end
end
