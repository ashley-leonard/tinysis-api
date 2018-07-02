require "digest/sha2"

class User < ApplicationRecord

# There are three status variables for users.
# privilege: 0 = no rights, 1=student rights, 2=staff rights, 3=admin rights
# login_status: 0 == can't login, 1==account requested, 2==can log in
# status: 0 == no status, 1==active, 2==inactive

  # before_save :encrypt_password
  # before_save :null_inactive_date_if_set_active
  
  # include StripTagsValidator
  # include Statusable
  # include UnassignedCredits

  PRIVILEGE_NONE = 0
  PRIVILEGE_STUDENT = 1
  PRIVILEGE_STAFF = 2
  PRIVILEGE_ADMIN = 3
  
  PRIVILEGE_NAMES = {
    PRIVILEGE_NONE => "None",
    PRIVILEGE_STUDENT => "Student",
    PRIVILEGE_STAFF => "Staff",
    PRIVILEGE_ADMIN => "Administrator" }
    
  STATUS_BOGUS = 0
  STATUS_ACTIVE = 1
  STATUS_INACTIVE = 2
  
  STATUS_NAMES = {
    STATUS_BOGUS => "Invalid",
    STATUS_ACTIVE => "Active",
    STATUS_INACTIVE => "Inactive"
  }

  belongs_to :coordinator, class_name: 'User', optional: true
  has_many :coordinatees, class_name: 'User', foreign_key: 'coordinator_id'

  validates_presence_of :coordinator, :if => Proc.new{|user| user.privilege == PRIVILEGE_STUDENT}, :message => 'student accounts must have an assigned coordinator.'
end
