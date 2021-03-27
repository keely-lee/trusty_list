class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ['Unable to log in with the username/password combination'], status: 422
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render plain: 'Already logged out!'
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:email, :password)
  end
end