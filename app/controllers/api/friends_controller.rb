class Api::FriendsController < ApplicationController
    def create
        @friend = Friend.new(friend_params)
        if @friend.save
            @users = User.all
            render 'api/users/index'
        else
            render json: ["could not create friendship"], status: 422
        end
    end

    def show
        render 'api/users/index'
    end

    def update
        @friend = Friend.find(param[:id])

        if @friend.update(friend_params)
            render 'api/users/index'
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend = Friend.find_by(id: params[:id])

        if @friend.destroy
            render 'api/users/index'
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    private
    def friend_params
        params.require(:friend).permit(:user_id, :friend_id, :status)
    end
end
