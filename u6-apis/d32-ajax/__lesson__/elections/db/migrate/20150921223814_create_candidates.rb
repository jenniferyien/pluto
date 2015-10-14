class CreateCandidates < ActiveRecord::Migration
  def change
    create_table :candidates do |t|
      t.string :first_name
      t.string :last_name
      t.text :bio
      t.string :party
      t.text :campaign
      t.integer :votes, default: 0

      t.timestamps null: false
    end
  end
end
