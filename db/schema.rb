# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_12_052413) do

  create_table "assignments", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.integer "contract_id"
    t.string "name", limit: 100, default: "", null: false
    t.text "description"
    t.date "due_date"
    t.boolean "active", default: true, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "creator_id"
    t.integer "weighting", limit: 1, default: 10, null: false, unsigned: true
    t.index ["contract_id"], name: "index_assignments_on_contract_id"
    t.index ["creator_id"], name: "index_assignments_on_creator_id"
  end

  create_table "categories", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "name"
    t.integer "sequence", default: 0, null: false
    t.boolean "public", default: false
    t.integer "statusable", limit: 1, default: 0, unsigned: true
    t.integer "homeroom", limit: 1, default: 0
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
    t.index ["public"], name: "index_categories_on_public"
  end

  create_table "contract_ealrs", id: false, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.integer "contract_id"
    t.integer "ealr_id"
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
    t.index ["contract_id"], name: "index_contract_ealrs_on_contract_id"
    t.index ["ealr_id"], name: "index_contract_ealrs_on_ealr_id"
  end

  create_table "contracts", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.integer "category_id", default: 0, null: false
    t.text "learning_objectives"
    t.text "competencies"
    t.text "evaluation_methods"
    t.text "instructional_materials"
    t.integer "facilitator_id", default: 0, null: false
    t.integer "creator_id", default: 0, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "term_id", default: 0, null: false
    t.string "location"
    t.text "timeslots"
    t.integer "contract_status", default: 0, null: false
    t.index ["category_id"], name: "index_contracts_on_category_id"
    t.index ["facilitator_id", "category_id", "term_id"], name: "index_contracts_on_fac_cat_term"
    t.index ["facilitator_id"], name: "index_contracts_on_facilitator_id"
    t.index ["term_id"], name: "index_contracts_on_term_id"
  end

  create_table "credit_assignments", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.integer "credit_id", default: 0
    t.float "credit_hours", default: 0.5, null: false
    t.date "enrollment_finalized_on"
    t.integer "enrollment_id"
    t.string "contract_name"
    t.string "contract_facilitator_name"
    t.boolean "district_finalize_approved"
    t.string "district_finalize_approved_by"
    t.date "district_finalize_approved_on"
    t.integer "parent_credit_assignment_id"
    t.integer "credit_transmittal_batch_id"
    t.integer "contract_term_id"
    t.integer "contract_facilitator_id"
    t.date "district_transmitted_on"
    t.float "override_hours"
    t.string "override_by"
    t.integer "user_id"
    t.integer "contract_id"
    t.string "credit_course_name"
    t.string "credit_course_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["contract_facilitator_id"], name: "index_credit_assignments_on_contract_facilitator_id"
    t.index ["contract_id"], name: "index_credit_assignments_on_contract_id"
    t.index ["contract_term_id"], name: "index_credit_assignments_on_contract_term_id"
    t.index ["credit_id"], name: "index_credit_assignments_on_credit_id"
    t.index ["credit_transmittal_batch_id"], name: "index_credit_assignments_on_credit_transmittal_batch_id"
    t.index ["enrollment_id"], name: "index_credit_assignments_on_enrollment_id"
    t.index ["parent_credit_assignment_id"], name: "index_credit_assignments_on_parent_credit_assignment_id"
    t.index ["user_id"], name: "index_credit_assignments_on_user_id"
  end

  create_table "credit_transmittal_batches", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.date "finalized_on"
    t.string "finalized_by", default: "", null: false
    t.date "transmitted_on"
    t.string "transmitted_by"
    t.string "transmitted_signature"
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
  end

  create_table "credits", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "course_name", default: "", null: false
    t.string "course_id", default: "0", null: false
    t.integer "course_type", default: 0, null: false
    t.float "required_hours", default: 0.0, null: false
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
  end

  create_table "ealrs", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "category"
    t.string "seq"
    t.text "ealr"
    t.date "version"
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
  end

  create_table "enrollments", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.integer "contract_id", default: 0, null: false
    t.integer "participant_id", default: 0, null: false
    t.integer "role", default: 0, null: false
    t.integer "enrollment_status", default: 0, null: false
    t.integer "completion_status", default: 0, null: false
    t.date "completion_date"
    t.integer "creator_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.date "finalized_on"
    t.index ["contract_id"], name: "index_enrollments_on_contract_id"
    t.index ["participant_id"], name: "index_enrollments_on_participant_id"
    t.index ["role"], name: "index_enrollments_on_role"
  end

  create_table "graduation_plan_mappings", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.integer "graduation_plan_id", null: false
    t.integer "credit_assignment_id"
    t.integer "graduation_plan_requirement_id", null: false
    t.string "name"
    t.date "date_completed"
    t.integer "quantity", default: 0
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
    t.index ["credit_assignment_id"], name: "index_graduation_plan_mappings_on_credit_assignment_id"
    t.index ["graduation_plan_id"], name: "index_graduation_plan_mappings_on_graduation_plan_id"
    t.index ["graduation_plan_requirement_id"], name: "index_graduation_plan_mappings_on_graduation_plan_requirement_id"
  end

  create_table "graduation_plan_requirements", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "name", null: false
    t.text "notes"
    t.integer "position", default: 0
    t.integer "parent_id"
    t.string "requirement_type", limit: 7, default: "credit", null: false
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
    t.string "status", default: "active"
    t.index ["parent_id"], name: "index_graduation_plan_requirements_on_parent_id"
    t.index ["requirement_type"], name: "index_graduation_plan_requirements_on_requirement_type"
  end

  create_table "graduation_plans", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.integer "user_id"
    t.string "class_of"
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
  end

  create_table "learning_plan_goals", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.text "description"
    t.boolean "required", default: false
    t.boolean "active", default: true
    t.integer "position"
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
  end

  create_table "learning_plans", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.integer "user_id", default: 0, null: false
    t.integer "year", default: 0, null: false
    t.text "user_goals"
    t.integer "weekly_hours", default: 0, null: false
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
    t.index ["user_id", "year"], name: "index_learning_plans_on_user_id_and_year"
  end

  create_table "learning_plans_to_goals", id: false, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.integer "learning_plan_id"
    t.integer "learning_plan_goal_id"
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
    t.index ["learning_plan_goal_id"], name: "index_lp_to_goals_on_goal_id"
    t.index ["learning_plan_id"], name: "index_lp_to_goals_on_lp_id"
  end

  create_table "meeting_participants", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.integer "meeting_id"
    t.integer "enrollment_id"
    t.integer "participation"
    t.string "contact_type", limit: 8, default: "class"
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
    t.index ["enrollment_id"], name: "index_meeting_participants_on_enrollment_id"
    t.index ["meeting_id"], name: "index_meeting_participants_on_meeting_id"
  end

  create_table "meetings", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.integer "contract_id"
    t.date "meeting_date"
    t.string "title"
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
    t.index ["contract_id"], name: "index_meetings_on_contract_id"
  end

  create_table "notes", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.text "note"
    t.integer "creator_id"
    t.datetime "updated_at"
    t.integer "notable_id"
    t.string "notable_type"
    t.datetime "created_at", default: "1900-01-01 00:00:00"
    t.index ["notable_type", "notable_id"], name: "index_notes_on_notable"
    t.index ["notable_type"], name: "index_notes_on_notable_type"
  end

  create_table "sessions", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "session_id"
    t.text "data"
    t.datetime "updated_at"
    t.index ["session_id"], name: "sessions_session_id_index"
  end

  create_table "settings", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "name"
    t.text "value"
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
    t.index ["name"], name: "index_settings_on_name"
    t.index ["name"], name: "index_settings_on_setting_name"
  end

  create_table "statuses", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.date "month"
    t.integer "academic_status", default: 0, null: false
    t.integer "attendance_status", default: 0, null: false
    t.integer "creator_id", default: 0, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "statusable_id"
    t.string "statusable_type"
    t.integer "fte_hours", default: 25
    t.boolean "met_fte_requirements", default: true
    t.boolean "held_periodic_checkins", default: false
    t.index ["statusable_id", "statusable_type", "month"], name: "index_statuses_on_statusable_and_month", unique: true
    t.index ["statusable_type", "statusable_id"], name: "index_status_on_statusable"
  end

  create_table "terms", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.integer "school_year"
    t.boolean "active", default: true, null: false
    t.text "months"
    t.date "credit_date"
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
    t.index ["active"], name: "index_terms_on_active"
  end

  create_table "turnins", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.integer "enrollment_id", default: 0, null: false
    t.integer "assignment_id", default: 0, null: false
    t.string "status", limit: 11, default: "missing", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["assignment_id"], name: "index_turnins_on_assignment_id"
    t.index ["enrollment_id", "assignment_id"], name: "index_turnins_on_enrollment_id_and_assignment_id", unique: true
    t.index ["enrollment_id"], name: "index_turnins_on_enrollment_id"
  end

  create_table "users", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "login"
    t.integer "login_status", default: 0
    t.string "first_name"
    t.string "last_name"
    t.string "nickname"
    t.string "email"
    t.integer "privilege", default: 0, null: false
    t.integer "status"
    t.string "district_id"
    t.integer "district_grade"
    t.string "password_hash"
    t.string "password_salt"
    t.integer "coordinator_id"
    t.date "date_active"
    t.date "date_inactive"
    t.datetime "created_at", default: "1900-01-01 00:00:00", null: false
    t.datetime "updated_at", default: "1900-01-01 00:00:00", null: false
    t.index ["coordinator_id"], name: "index_users_on_coordinator_id"
    t.index ["date_active", "date_inactive"], name: "index_users_on_active_dates"
    t.index ["date_active"], name: "index_users_on_date_active"
    t.index ["date_inactive"], name: "index_users_on_date_inactive"
    t.index ["privilege"], name: "index_users_on_privilege"
    t.index ["status"], name: "index_users_on_user_status"
  end

  add_foreign_key "credit_assignments", "contracts", name: "credit_assignments_ibfk_contract_id", on_delete: :nullify
  add_foreign_key "credit_assignments", "credits", name: "credit_assignments_ibfk_credit_id", on_delete: :nullify
  add_foreign_key "credit_assignments", "enrollments", name: "credit_assignments_ibfk_enrollment_id", on_delete: :cascade
  add_foreign_key "credit_assignments", "users", name: "credit_assignments_ibfk_user_id"
end
