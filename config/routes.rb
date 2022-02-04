Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update]
    resources :posts, only: [:index, :create, :destroy, :update, :show]
    resources :comments, only: [:index, :show, :create, :destroy, :update]
    resources :likes, only: [:create, :destroy, :index, :show]
    resources :friends, only: [:create, :destroy, :index, :show, :update]

    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
