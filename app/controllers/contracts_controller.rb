class ContractsController < ApplicationController
  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    conditions = {
      contract_status: Contract::STATUS_ACTIVE
    }

    if params[:schoolYear]
      conditions[:term_id] = Term
        .where(school_year: params[:schoolYear])
        .select(:id)
        .collect(&:id)
    end

    if params[:contractIds]
      conditions[:contract_id] = params[:contractIds]
    end

    conditions[:facilitator_id] = params[:facilitatorId] if params[:facilitatorId]
    conditions[:term_id] = params[:termId] if params[:termId]
    if params[:status]
      conditions[:contract_status] = case params[:status]
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
      .limit(limit)
    count = Contract.where(conditions).count

    options = { meta: { count: count }}

    render json: ContractSerializer.new(result, options), status: 200
  end

  def show
    contract = Contract.find params[:id]

    render json: ContractSerializer.new(contract), status: 200
  end
end
