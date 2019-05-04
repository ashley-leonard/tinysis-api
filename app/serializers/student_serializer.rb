class StudentSerializer < UserSerializer
  set_type :user

  attributes :district_id, :district_grade

  belongs_to :coordinator
  attribute :coordinator_id do |record|
    record.coordinator_id.to_s
  end
end
