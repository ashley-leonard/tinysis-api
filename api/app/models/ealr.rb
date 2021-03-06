# frozen_string_literal: true

class Ealr < ApplicationRecord
  include StripTagsValidator

  has_and_belongs_to_many :contracts, join_table: 'contract_ealrs'

  def self.ealrs_for_category(category)
    Ealr.find(:all, order: 'seq', conditions: "category = '#{category}'")
  end

  def self.categories
    ['Arts', 'Civics', 'Communication', 'Economics', 'Geography', 'Health and Fitness', 'History', 'Mathematics', 'Reading', 'Science', 'Technology', 'Writing']
  end
end
