Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]

    resource :users, only: [:create]
    get '/users/:id/recipes', to: 'users#recipes'

    resource :recipes, only: [:create, :show]

  end

end
