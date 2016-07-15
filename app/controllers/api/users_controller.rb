class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
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

  private
  def user_params
    params.require(:user).permit(:username, :password, :id)
  end

  def find_user
    User.find_by_id(params[:id])
  end

end
