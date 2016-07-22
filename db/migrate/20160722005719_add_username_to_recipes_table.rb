class AddUsernameToRecipesTable < ActiveRecord::Migration
  def change
    add_column :recipes, :user_username, :string, null: false
  end
end
