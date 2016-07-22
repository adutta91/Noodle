class Api::RecipeLikesController < ApplicationController

  def create
  end

  def destroy
  end

  private

  def recipe_like_params
    params.require(:recipe_like).permit(:user_id, :recipe_id)
  end

end
