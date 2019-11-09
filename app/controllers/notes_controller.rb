class NotesController < ApplicationController

  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    conditions = {}

    [:notable_type, :notable_ids].each do |p|
      conditions[p] = params[p] if params[p].present?
    end

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

  def create
    klass = target_class

    notable = klass.find params[:notable_id]

    attributes = note_attributes
    attributes[:notable] = notable
    attributes[:creator] = @user

    note = Note.create! attributes

    render json: NoteSerializer.new(note)
  end

protected
  def query_attributes
    params
      .permit(:notable_type, :notable_ids)
  end

  def note_attributes
    params
      .require(:data)
      .require(:attributes)
      .permit(:note)
  end

  def target_class
    unless %w{creditAssignment enrollment status turnin assignment}.include? params[:notable_type]
      raise TinyException.new('Invalid notable type')
    end

    params[:notable_type]
      .underscore
      .camelcase
      .constantize
  end

end
