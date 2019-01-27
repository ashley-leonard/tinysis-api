class ContractsController < ApplicationController
  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    order = (params[:order] || '').split(',').map(&:underscore).join(',')

    conditions = {}

    if params[:schoolYear]
      conditions[:term_id] = Term
        .where(school_year: params[:schoolYear])
        .select(:id)
        .collect(&:id)
    end

    if params[:contractIds]
      conditions[:contract_id] = params[:contractIds]
    end

    if params[:categoryIds]
      conditions[:category_id] = params[:categoryIds]
    end

    conditions[:facilitator_id] = params[:facilitatorIds] if params[:facilitatorIds]
    conditions[:term_id] = params[:termIds] if params[:termIds]

    if params[:status]
      conditions[:contract_status] = case params[:status].downcase
      when 'proposed'
        Contract::STATUS_PROPOSED
      when 'active'
        Contract::STATUS_ACTIVE
      when 'closed'
        Contract::STATUS_CLOSED
      when 'all'
        nil
      else
        return render json: { message: 'invalid status parameter' }, status: 400
      end
    end
    conditions.delete :contract_status if conditions[:contract_status].nil?

    result = Contract
      .where(conditions)
      .order(Arel.sql(order))
      .limit(limit)
    count = Contract.where(conditions).count

    options = {
      meta: {
        count: count
      },
      include: ["category", "facilitator"]
    }

    render json: ContractSerializer.new(result, options), status: 200
  end

  def show
    contract = Contract.find params[:id]

    render json: ContractSerializer.new(contract), status: 200
  end
end
