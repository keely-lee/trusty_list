class EditIndices < ActiveRecord::Migration[5.2]
  def change
    change_column :lists, :name, :string, unique: true
    remove_index :lists, :user_id
    add_index :lists, :user_id

    remove_index :tasks, :list_id
    remove_index :tasks, :title
    add_index :tasks, :list_id
    add_index :tasks, :title
  end
end
