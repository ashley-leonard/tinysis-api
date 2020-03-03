class SettingsController < ApiBaseController
  def index
    result = Setting.where('name <> "periods"')

    count = Setting.count

    options = { meta: { count: count }}

    render json: SettingSerializer.new(result, options), status: 200
  end

  def years
    years = ActiveRecord::Base.connection.execute('SELECT DISTINCT school_year FROM terms').map{|d| d}.flatten.sort

    render json: years
  end
end
