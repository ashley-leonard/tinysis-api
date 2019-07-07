class AdminContractCategoriesController < AdminController

  def create
    attributes = categories_attributes
    category = Category.new categories_attributes
    category.save!

    render json: CategorySerializer.new(category)
  end

  def update
    attributes = categories_attributes
    category = Category.find params[:id]

    category.update_attributes! attributes

    render json: CategorySerializer.new(category)
  end

private

  def categories_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:name, :sequence, :public, :homeroom, :reporting)
  end

end
