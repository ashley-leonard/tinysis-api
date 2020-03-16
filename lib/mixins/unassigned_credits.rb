# frozen_string_literal: true

module UnassignedCredits
  def unassigned_credits
    parent_id_field = if is_a? GraduationPlan
                        'gp.id'
                      else
                        'gp.user_id'
                      end

    credit_assignments.find(:all,
                            conditions: "credit_assignments.parent_credit_assignment_id IS NULL AND credit_assignments.credit_hours > 0 AND credit_assignments.id NOT IN (SELECT COALESCE(credit_assignment_id,0) FROM graduation_plan_mappings gpm INNER JOIN graduation_plans gp ON gpm.graduation_plan_id = gp.id AND #{parent_id_field} = #{id})",
                            include: %i[
                              credit
                              contract_term
                            ],
                            order: 'credits.course_name')
  end
end
