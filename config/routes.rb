Rails.application.routes.draw do
  get '/up', to: 'uptime#index'
  namespace :admin do
    get 'credits/create'
    get 'credits/update'
    get 'credits/destroy'
  end
  scope '/api' do
    get '/profile', to: 'profiles#index'
  
    get '/credit-assignments/:id', to: 'credit_assignments#show'
    get '/credit-assignments', to: 'credit_assignments#index'
    put '/students/:student_id/credit-assignments/:id/approve', to: 'credit_assignments#approve'
    put '/students/:student_id/credit-assignments/:id/unapprove', to: 'credit_assignments#unapprove'
    post '/students/:student_id/credit-assignments', to: 'credit_assignments#create_for_student'
    post '/enrollments/:enrollment_id/credit-assignments', to: 'credit_assignments#create_for_enrollment'
    post '/contracts/:contract_id/credit-assignments', to: 'credit_assignments#create_for_contract'
    delete '/credit-assignments/:id', to: 'credit_assignments#destroy'
    put '/credit-assignments/:id', to: 'credit_assignments#update'

    get '/students', to: 'students#index'
    get '/students/:id', to: 'students#show'
  
    get '/enrollments', to: 'enrollments#index'
    get '/enrollments/:id', to: 'enrollments#show'
    patch '/enrollments/:id/:command', to: 'enrollments#update'
    delete '/enrollments/:id', to: 'enrollments#destroy'
  
    get '/notes', to: 'notes#index'
    post '/notes/:notable_type/:notable_id', to: 'notes#create'
  
    get '/contracts', to: 'contracts#index'
    get '/contracts/:id', to: 'contracts#show'
  
    get '/meetings', to: 'meetings#index'
    get '/meetings/:id', to: 'meetings#show'
    post '/meetings', to: 'meetings#create'
    patch '/meetings/:id/update_roll', to: 'meetings#update_roll'

    post '/meeting_participants', to: 'meeting_participants#create'
    put '/meeting_participants/:id', to: 'meeting_participants#update'
 
    get '/graduation-plan-mappings/:student_id', to: 'graduation_plan_mappings#index'
    post '/graduation-plan-mappings/:student_id', to: 'graduation_plan_mappings#create'
    put '/graduation-plan-mappings/:student_id/:mapping_id', to: 'graduation_plan_mappings#update'
    delete '/graduation-plan-mappings/:student_id/:mapping_id', to: 'graduation_plan_mappings#destroy'

    get '/graduation-plan-requirements', to: 'graduation_plan_requirements#index'
    get '/graduation-plan-requirements/:id', to: 'graduation_plan_requirements#show'

    get '/assignments', to: 'assignments#index'
  
    get '/categories', to: 'categories#index'
  
    get '/terms', to: 'terms#index'
    get '/terms/:id', to: 'terms#show'
  
    get '/settings', to: 'settings#index'
    get '/settings/years', to: 'settings#years'

    get '/credits', to: 'credits#index'
    get '/credits/:id', to: 'credits#show'
    
    resources :staff
    resources :statuses, controller: 'status'

    scope '/admin' do
      get '/users', to: 'admin_users#index'
      get '/users/:id', to: 'admin_users#show'
      post '/users', to: 'admin_users#create'
      put '/users/:id', to: 'admin_users#update'

      post '/login', to: 'admin_login#create'
      get '/login', to: 'admin_login#show'
      patch '/login/:id', to: 'admin_login#update'
      delete '/login/:id', to: 'admin_login#destroy'

      put '/settings', to: 'admin_settings#update'

      post '/terms', to: 'admin_terms#create'
      put '/terms/:id', to: 'admin_terms#update'

      post '/contract-categories', to: 'admin_contract_categories#create'
      put '/contract-categories/:id', to: 'admin_contract_categories#update'
      delete '/contract-categories/:id', to: 'admin_contract_categories#destroy'

      put '/graduation-plan-requirements/sort', to: 'admin_graduation_plan_requirements#sort'
      put '/graduation-plan-requirements/:id', to: 'admin_graduation_plan_requirements#update'
      post '/graduation-plan-requirements', to: 'admin_graduation_plan_requirements#create'

      post '/credits', to: 'admin_credits#create'
      put '/credits/:id', to: 'admin_credits#update'
      put '/credits/:id', to: 'admin_credits#update'
    end
  end

end