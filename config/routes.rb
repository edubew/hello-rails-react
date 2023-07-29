Rails.application.routes.draw do
  root 'greetings#index'

  get '/random_greeting', to: 'greetings#random_greeting'
end
