Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :show]
      resources :businesses 
      resources :user_businesses
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      get '/location', to: 'users#location'
      
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
