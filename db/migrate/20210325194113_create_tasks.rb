class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :list_id, null: false
      t.string :title, null: false
      t.text :status, null: false
      t.string :description
      t.string :comments, array: true, default: []
      t.datetime :due_date

      t.timestamps
    end

    add_index :tasks, :list_id, unique: true
    add_index :tasks, :title, unique: true
  end
end
