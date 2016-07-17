class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :recipes, :user_id
  end
end
