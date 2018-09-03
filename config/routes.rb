Rails.application.routes.draw do

  scope '/api' do
    resources :students
    resources :staff
    resources :statuses, controller: 'status'
    resources :contracts
    resources :terms
    resources :settings
  end

end