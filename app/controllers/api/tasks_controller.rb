class Api::TasksController < ApplicationController
  def index 
    @tasks = Task.all
    render json: @tasks
  end 

  def show
    render json: Task.find(params[:id])
  end 

  def create 
    @task = Task.new(task_params)
    if @task.save
      render json: @task
    else
      render json: @task.errors.full_messages, status: 422
    end
  end 

  def update
    @task = Task.find_by(id: params[:id])
    if @task.update(task_params)
      render json: @task
    else 
      render json: @task.errors.full_messages, status: 418
    end
  end 

  def destroy
    @task = Task.find_by(id: params[:id])
    if @task 
      @task.destroy
    end
  end 

  private 

  def task_params
    params.require(:todo).permit(:title, :body, :done)
  end 

end
