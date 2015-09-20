class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      # THIS IS GOING TO BE A PASSWORD SCRAMBLE
      # CONVENTION OVER CONFIGURATION INSISTS THAT THIS FIELD
      # BE NAMED password_digest EXACTLY.
      t.string :password_digest
      t.string :email
      t.references :dog, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
