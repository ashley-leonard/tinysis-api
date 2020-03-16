# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Contract, type: :model do
  it { should have_many(:enrollments) }
end
