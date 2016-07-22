class CreateRecipeLikes < ActiveRecord::Migration
  def change
    create_table :recipe_likes do |t|
      t.integer :user_id, null: false
      t.integer :recipe_id, null: false

      t.timestamps null: false
    end

    add_index :recipe_likes, :user_id
    add_index :recipe_likes, :recipe_id
  end
end
