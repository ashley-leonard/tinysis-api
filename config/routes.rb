Rails.application.routes.draw do

  scope '/api' do
    get '/students', to: 'students#index'
    get '/students/:id', to: 'students#show'
    get '/enrollments', to: 'enrollments#index'
    get '/credit-assignments', to: 'credit_assignments#index'
    get '/notes', to: 'notes#index'
    resources :staff
    resources :statuses, controller: 'status'
    resources :contracts
    resources :terms
    resources :settings
  end

end