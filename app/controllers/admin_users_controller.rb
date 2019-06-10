class AdminUsersController < AdminController
  include UserControllerMethods

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def create
    coordinator_id = user_coordinator_id

    user = User.new
    update_attributes user

    user.save!

    check_authorization_requirements user

    render json: UserSerializer.new(user)
  end

  def update
    coordinator_id = user_coordinator_id

    user = User.find params[:id]
    update_attributes user
    user.save!

    render json: UserSerializer.new(user)
  end

private
  def user_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:first_name, :last_name, :nickname, :can_login, :date_active, :date_inactive, :district_id, :district_grade, :status, :role, :login, :email, :new_password)
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
    update_status model, denormalized[:status]
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

  def update_status model, status
    return if status.nil?
    raiseActiveRecordInvalidException(model, :status, 'should be either "active" or "inactive"') unless %w{active inactive}.include? status
    model.status = case status
    when 'active'
      User::STATUS_ACTIVE
    when 'inactive'
      User::STATUS_INACTIVE
    end
  end

  def update_privilege model, role
    return if role.nil?
    raiseActiveRecordInvalidException(model, :role, 'allowed values are student, administrator, or staff') unless %w{administrator staff student}.include? role
    model.privilege = case role
      when 'student'
        User::PRIVILEGE_STUDENT
      when 'administrator'
        User::PRIVILEGE_ADMIN
      when 'staff'
        User::PRIVILEGE_STAFF
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
      :status,
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
