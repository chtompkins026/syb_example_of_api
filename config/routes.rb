Rails.application.routes.draw do
  namespace :api do
    resources :instructors do
    end
  end
end
