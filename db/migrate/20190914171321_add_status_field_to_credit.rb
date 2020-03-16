# frozen_string_literal: true

class AddStatusFieldToCredit < ActiveRecord::Migration[5.2]
  def change
    add_column :credits, :status, :string, default: Credit::STATUS_ACTIVE

    reversible do |dir|
      dir.up do
        Credit.update_all status: Credit::STATUS_ACTIVE
      end
    end
  end
end
