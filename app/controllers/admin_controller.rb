class AdminController < ApplicationController

  before_action :check_admin

private
  def check_admin
    permissions = get_permissions

    return true if permissions.include? 'manage:config'

    render_unauthorized 'Unauthorized; please contact administrator'
  end
end
