class SettingsController < ApplicationController
  def index
    result = Setting.where('name <> "periods"')

    count = Setting.count

    options = { meta: { count: count }}

    render json: SettingSerializer.new(result, options), status: 200
  end
end
