# frozen_string_literal: true

class Setting < ApplicationRecord
  def self.periods=(p)
    setting = Setting.find_by_name('periods')
    setting = Setting.create(name: 'periods') if setting.nil?

    setting.update_attribute(:value, Marshal.dump(p))

    p
  end

  def self.periods
    setting = Setting.find_by_name('periods')
    return [{}] if setting.nil?

    # what the hell is this?
    ClassPeriod.new
    Marshal.load(setting.value)
  end

  def self.set_integer(name, value)
    setting = Setting.find_by_name(name)
    if setting.nil?
      setting = Setting.create(name: name, value: value.to_i)
    else
      setting.update_attribute(:value, value.to_i)
    end

    setting.value.to_i
  end

  def self.current_year=(year)
    set_integer('current_year', year)
    year
  end

  def self.school_years
    Term.find(:all, select: 'school_year').collect { |t| t.school_year }.uniq
  end

  def self.current_year
    setting = Setting.find_by_name('current_year')
    return nil if setting.nil?

    setting.value.to_i
  end

  def self.reporting_base_month=(month)
    if (month.to_i <= 0) || (month.to_i > 12)
      raise ArgumentError, 'Bad reporting base month value'
    end

    set_integer('reporting_base_month', month)
    month
  end

  def self.reporting_base_month
    setting = Setting.find_by_name('reporting_base_month')
    return 0 if setting.nil?

    setting.value.to_i
  end

  def self.reporting_end_month=(month)
    if (month.to_i <= 0) || (month.to_i > 12)
      raise ArgumentError, 'Bad reporting end month value'
    end

    set_integer('reporting_end_month', month)
    month
  end

  def self.reporting_end_month
    setting = Setting.find_by_name('reporting_end_month')
    return 0 if setting.nil?

    setting.value.to_i
  end

  def self.new_contract_term_default=(term_id)
    term = Term.find(term_id.to_i)
    raise ArgumentError, 'Bad term id' unless
    set_integer('new_contract_term_default', term_id.to_i)

    term
  end

  def self.new_contract_term_default
    setting = Setting.find_by_name('new_contract_term_default')
    term = Term.find(setting.value.to_i) if setting
    if term
      return term
    else
      return Term.find(:first, conditions: 'name LIKE "%semester%"', order: 'school_year DESC, credit_date ASC')
    end
  end
end
