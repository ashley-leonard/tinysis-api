class AdminTermsController < AdminController
  def create
    term = Term.new
    update_attributes term
    term.save!

    return render json: TermSerializer.new(term)
  end

  def update
    term = Term.find params[:id]
    update_attributes term
    term.save!

    return render json: TermSerializer.new(term)
  end

private
  def update_attributes model
    attrs = term_attributes

    # will just leave months alone if parsing fails
    begin
      if attrs[:months]
        attrs[:months] = attrs[:months].split(',').map{|m| Date.parse(m)}
      end
    rescue StandardError => error
      Rails.logger.error error
    end
    
    if attrs[:status]
      attrs[:active] = attrs[:status] == 'active'
      attrs.delete :status
    end

    model.update_attributes attrs
  end

  def term_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:name, :school_year, :status, :credit_date, months: [])
  end
  
  def render_unprocessable_entity_response(exception)
    render json: {
      status: 422,
      message: 'Validation error',
      errors: exception.record.errors,
    }, status: :unprocessable_entity
  end
end
