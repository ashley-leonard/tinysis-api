Rails.application.routes.draw do

  scope '/api' do
    get '/profile', to: 'profiles#index'
    get '/students', to: 'students#index'
    get '/students/:id', to: 'students#show'
    get '/enrollments', to: 'enrollments#index'
    get '/enrollments/:id', to: 'enrollments#show'
    get '/credit-assignments', to: 'credit_assignments#index'
    get '/notes', to: 'notes#index'
    get '/contracts', to: 'contracts#index'
    get '/contracts/:id', to: 'contracts#show'
    get '/meetings', to: 'meetings#index'
    get '/meetings/:id', to: 'meetings#show'
    post '/meetings', to: 'meetings#create'
    patch '/meetings/:id/update_roll', to: 'meetings#update_roll'
    post '/meeting_participants', to: 'meeting_participants#create'
    put '/meeting_participants/:id', to: 'meeting_participants#update'
    get '/assignments', to: 'assignments#index'
    get '/categories', to: 'categories#index'
    get '/terms', to: 'terms#index'
    get '/settings', to: 'settings#index'
    get '/settings/years', to: 'settings#years'
    
    resources :staff
    resources :statuses, controller: 'status'

    scope '/admin' do
      get '/users', to: 'admin_users#index'
      get '/users/:id', to: 'admin_users#show'
      post '/users', to: 'admin_users#create'
      put '/users/:id', to: 'admin_users#update'
      post '/terms', to: 'admin_terms#create'
      put '/terms/:id', to: 'admin_terms#update'
    end
  end

end