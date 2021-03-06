class Api::V1::TasksController < ApplicationController
    protect_from_forgery except: [:create]
    def index
        tasks = @current_user.tasks
        render json: tasks, status: :ok
    end

    def create
        task = Task.new(task_params)
        if task.save
            render json: task, status: :created
        else
            render json: { errors: task.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def task_params
        params.require(:task).permit(:user_id, :title, :content, :limit)
    end
end
