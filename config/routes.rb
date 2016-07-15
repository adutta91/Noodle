Rails.application.routes.draw do
  use_doorkeeper

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
  end

end
