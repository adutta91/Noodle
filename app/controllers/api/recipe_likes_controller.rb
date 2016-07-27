class Api::RecipeLikesController < ApplicationController

  def create
    @recipe_like = RecipeLike.create(recipe_like_params);
    render json: @recipe_like.recipe
  end

  def destroy
    @recipe_like = find_recipe_like
    if @recipe_like
      debugger;
      user_id = @recipe_like.user_id
      @recipe_like.destroy
    end
    render json: {user_id: user_id}
  end

  private

  def recipe_like_params
    params.require(:recipe_like).permit(:user_id, :recipe_id)
  end

  def find_recipe_like
    RecipeLike.find_by_user_id_and_recipe_id(
      recipe_like_params["user_id"],
      recipe_like_params["recipe_id"]
    )
  end

end
