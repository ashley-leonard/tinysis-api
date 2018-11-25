class NotesController < ApplicationController

  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    conditions = {}

    if !(params[:notableType] && params[:notableIds])
      return render json: { message: 'requires notableType and notableIds' }, status: 400
    end

    conditions = {
      notable_type: params[:notableType].capitalize,
      notable_id: params[:notableIds].split(',')
    }

    result = Note
      .where(conditions)
      .limit(limit)
    count = Note
      .where(conditions)
      .count

    options = {
      meta: {
        count: count,
      },
      include: ['creator'],
    }

    render json: NoteSerializer.new(result, options), status: 200
  end

end
