Rails.application.routes.draw do
  namespace :api do
    resources :instructors do
    end
    root to: 'home#index'
  end
end
