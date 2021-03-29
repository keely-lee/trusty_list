class Api::TasksController < ApplicationController
  def index
    @tasks = if current_user
      #        if params[:list_id]
      #          Task.where(params[:list_id])
      #        elsif params[:user_id]
                Task.where(current_user.id)
              else
                render json: {}
              end

    render :index
  end

  # def show
  # end

  def create
    @task = Task.new(task_params)
    if @task.save
      @list = List.find(task_params[:list_id])
      render "/api/lists/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    # byebug
    @task = Task.find(params[:id])
    # byebug
    list_id = @task.list_id #stay on current list even if list_id changes
    # byebug
    if @task.update(task_params)
      # byebug
      @list = List.find(list_id)
      # if @list ?? needed
      # byebug
      render "/api/lists/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    if @task.destroy
      @list = List.find(@task.list_id)
      render "/api/lists/show"
    else
      render json: ['Task deleted!']
    end
  end

  private

  def task_params
    params.require(:task).permit(:list_id, :title, :status, :description, :due_date, :comments => [])
  end
  
end