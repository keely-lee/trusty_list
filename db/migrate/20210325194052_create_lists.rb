class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :user_id, null: false
      t.string :name, null: false, unique: true

      t.timestamps
    end

    add_index :lists, :user_id, unique: true
    add_index :lists, :name, unique: true
  end
end
