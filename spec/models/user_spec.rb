# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  it { should belong_to(:coordinator) }
  it { should have_many(:coordinatees) }
end
