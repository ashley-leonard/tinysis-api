class AdminUsersController < AdminController
  include UserControllerMethods

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def create
    coordinator_id = user_coordinator_id

    user = User.new
    update_attributes user
    user.save!

    return render json: UserSerializer.new(user)
  end

  def update
    coordinator_id = user_coordinator_id

    user = User.find params[:id]
    update_attributes user
    user.save!

    return render json: UserSerializer.new(user)
  end

private
  def user_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:first_name, :last_name, :nickname, :can_login, :date_active, :date_inactive, :district_id, :district_grade, :is_active, :role, :login, :email)
  end

  def user_coordinator_id
    params.dig :data, :relationships, :coordinator, :data, :id
  rescue
    nil
  end

  def clean_attributes(attributes) 
    attributes.reject { |k| ["id", "can_login", "is_active", "role", "coordinator_id"].include?(k) }
  end

  def update_attributes model
    denormalized = user_attributes

    # passthrough of same-named
    model.update_attributes clean_attributes(denormalized)

    # coordinator association from relationships hash
    update_coordinator model, user_coordinator_id

    # renamed attributes
    update_login_status model, denormalized[:can_login]
    update_status model, denormalized[:is_active]
    update_privilege model, denormalized[:role]

    model
  end

  def update_coordinator user, coordinator_id
    return if coordinator_id.nil?
    coordinator = User.find coordinator_id
    if coordinator.privilege < User::PRIVILEGE_STAFF
      raise ActiveRecord::RecordNotFound
    end
    user.coordinator = coordinator
  end

  def update_login_status model, can_login
    return if can_login.nil?
    raise new ArgumentError unless [true, false].include? can_login
    if can_login === true
      model.login_status = User::LOGIN_ALLOWED
    else
      model.login_status = User::LOGIN_NONE
    end
  end

  def update_status model, is_active
    return if is_active.nil?
    raise new ArgumentError unless [true, false].include? is_active
    if is_active === true
      model.status = User::STATUS_ACTIVE
    else
      model.status = User::STATUS_INACTIVE
    end
  end

  def update_privilege model, role
    return if role.nil?
    raise new ArgumentError unless ['student', 'admin', 'staff'].include? role
    model.privilege = case role
      when 'student'
        User::PRIVILEGE_STUDENT
      when 'admin'
        User::PRIVILEGE_ADMIN
      when 'staff'
        User::PRIVILEGE_STAFF
      else
        raise new ArgumentError
      end
  end

protected
  def allowed_fields
    [
      :firstName,
      :lastName,
      :nickname,
      :canLogin,
      :dateActive,
      :dateInactive,
      :districtId,
      :districtGrade,
      :isActive,
      :role,
      :coordinator,
      :login,
      :email,
    ]
  end

  def get_role_conditions
    case params[:role]
    when 'student'
      ['privilege = ?', User::PRIVILEGE_STUDENT]
    when 'staff'
      ['privilege IN (?)', [User::PRIVILEGE_ADMIN, User::PRIVILEGE_STAFF]]
    when 'admin'
      ['privilege = ?', User::PRIVILEGE_ADMIN]
    else
      nil
    end
  end
end
