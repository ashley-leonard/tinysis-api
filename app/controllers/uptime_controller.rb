# frozen_string_literal: true

class UptimeController < ApplicationController
  def index
    render plain: 'ok'
  end
end
