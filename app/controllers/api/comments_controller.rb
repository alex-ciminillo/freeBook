class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render :index
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 404
        end
    end

    def update
        @comment = Comment.find(params[:id])

        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 404
        end
            
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment
            @comment.destroy
            render json: ["Comment destroyed!"]
        else
            render json: ["You can only delete YOUR comments!"], status: 422
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :author_id, :post_id)
    end



end
