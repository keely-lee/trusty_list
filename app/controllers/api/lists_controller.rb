class Api::ListsController < ApplicationController
  def index
    @lists = if current_user
                List.where(user_id: current_user.id)
              end

    if @lists
      render :index
    else
      render json: {}
    end
  end
  
  def show
    @list ||= List.find(params[:id])
    if @list
      render :show
    else
      render @list.errors.full_messages, status: 404
    end
  end

  def create
    @list = List.new(list_params.merge({user_id: current_user.id}))
    # @list = List.new(list_params)
    # @list.user_id = current_user.id
    if @list.save 
      render "/api/lists/show"
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find_by(params[:id])
    if @list.update(list_params)
      render api_list_url
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find_by(params[:id])

    if @list
      @list.destroy
      redirect_to api_lists_url
    else
      render plain: 'List does not exist'
    end
  end

  private

  def list_params
    params.require(:list).permit(:name)
  end
end