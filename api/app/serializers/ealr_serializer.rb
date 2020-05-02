# frozen_string_literal: true

class EalrSerializer < ApplicationSerializer
  set_type :ealr

  attributes :ealr, :seq, :category
end
