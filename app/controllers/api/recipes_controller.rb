class Api::RecipesController < ApplicationController
  def create
    @recipe = Recipe.create(recipe_params)
    render :show
  end

  def show
    @recipe = find_recipe
  end

  def destroy
    @recipe = find_recipe
    if @recipe
      @recipe.destroy
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :url, :user_id)
  end

  def find_recipe
    Recipe.find_by_id(params[:id])
  end

end
