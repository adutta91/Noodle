class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    render :show
  end

  def show
    @user = find_user
  end

  def update
    @user = find_user
    if @user.update(user_params)
      render :show
    else
      render :show
    end
  end

  def index
    @users = User.all
    render :index
  end

  def recipes
    @user = find_user
    render :show_recipes
  end

  def recipe_likes
    @user = find_user
    render :show_recipe_likes
  end

  def search_user
    @user = User.find_by_username(params[:username])
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :id)
  end

  def find_user
    User.find_by_id(params[:id])
  end

end
