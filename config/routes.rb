Rails.application.routes.draw do

  scope '/api' do
    get '/profile', to: 'profiles#index'
    get '/students', to: 'students#index'
    get '/students/:id', to: 'students#show'
    get '/enrollments', to: 'enrollments#index'
    get '/credit-assignments', to: 'credit_assignments#index'
    get '/notes', to: 'notes#index'
    get '/contracts', to: 'contracts#index'
    get '/contracts/:id', to: 'contracts#show'
    get '/assignments', to: 'assignments#index'
    get '/categories', to: 'categories#index'
    get '/terms', to: 'terms#index'
    get '/settings', to: 'settings#index'
    resources :staff
    resources :statuses, controller: 'status'
  end

end