class Api::SessionsController < ApplicationController


  def create
    @user = User.find_by(username: params[:user][:username])
    if @user 
        @user = User.find_by_credentials(params[:user][:username], 
                                        params[:user][:password])
        if @user
          login(@user)
          render "api/users/show"
        else
          render json: ["Invalid username/password"], status: 401
        end
    else
      render json: ["Username does not exist"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["No user is signed in"], status: 404
    end
  end


end
