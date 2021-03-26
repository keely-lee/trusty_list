Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]

    resources :lists, only: [:index, :show, :create, :update, :destroy]
    resources :tasks, only: [:index, :create, :update, :destroy]  # :show
  end
end
