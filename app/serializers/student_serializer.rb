class StudentSerializer < UserSerializer
  set_type :student

  attributes :district_id, :district_grade

  attribute :coordinator_id do |record|
    record.coordinator_id.to_s
  end
end
