class Api::LikesController < ApplicationController
    def create
        @like = Like.new(like_params)
        if @like.save
            render "api/likes/show"
        else
            render json: @like.errors.full_messages, status: 404
        end
    end
    
    def index
        @likes = Like.all
        render :index
    end

    def show
        @like = Like.find(params[:id])
        if @like
            render "api/likes/show"
        else
            render json: ["Its not there!"], status: 404
        end
    end
    
    def destroy
        like = Like.find(params[:id])
        if like
            like.destroy
        end
        render json: ["Deleted!"]
    end
    
    private
    
    def like_params
        params.require(:like).permit(:user_id, :post_id)
    end
end
