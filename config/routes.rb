Rails.application.routes.draw do
  root to: 'home#index'


  namespace :api do
    resources :instructors do
      resources :workouts
    end
    resources :workouts
  end


  get '*path', to: 'home#index'
end
