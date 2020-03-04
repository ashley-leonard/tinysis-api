# frozen_string_literal: true

class AdminSettingsController < AdminController
  def update
    settings = settings_attributes
    settings.keys.each do |key|
      setting = Setting.find_by_name(key)
      if setting
        setting.value = settings[key]
      else
        setting = Setting.new name: key, value: settings[:key]
      end
      setting.save!
    end
    render json: SettingSerializer.new(Setting.where(name: settings.keys)), status: 200
  end

  private

  def settings_attributes
    params.require(:data)
          .require(:attributes)
          .permit(:current_year, :reporting_base_month, :reporting_end_month, :new_contract_term_default)
  end
end
