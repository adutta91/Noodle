Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create]
    get '/users/:id/recipes', to: 'users#recipes'
    get '/users/:username', to: 'users#search_user'
    get '/users/:id/recipe_likes', to: 'users#recipe_likes'

    resources :recipes, only: [:create, :show]
    patch '/recipes/:id', to: 'recipes#destroy'

    resources :recipe_likes, only: [:create]
    patch '/recipe_likes/:id', to: 'recipe_likes#destroy'

  end

end
