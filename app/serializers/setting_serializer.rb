# frozen_string_literal: true

class SettingSerializer < ApplicationSerializer
  set_type :setting

  attributes :name, :value
end
