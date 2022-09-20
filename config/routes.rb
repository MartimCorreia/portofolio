Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "about", to: "pages#about"
  get "personal", to: "pages#personal"
  get "services", to: "pages#services"
  get "contact", to: "pages#contact"
end
