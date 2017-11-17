Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'contatos#index'
  # Contatos resources
  get '/contatos', to: 'contatos#index'
  get '/contatos/new', to: 'contatos#new', as: 'new_contato'
  post '/contatos', to: 'contatos#create'
  get '/contatos/:id', to: 'contatos#show', as: 'contato'
  get '/contatos/:id/edit', to: 'contatos#edit', as: 'edit_contato'
  put '/contatos/:id', to: 'contatos#update'
  patch '/contatos/:id', to: 'contatos#update'
  delete '/contatos/:id', to: 'contatos#destroy'
end
