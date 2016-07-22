# == Schema Information
#
# Table name: recipe_likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  recipe_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class RecipeLike < ActiveRecord::Base

  validates :user_id, :recipe_id, presence: true

  belongs_to :user
  belongs_to :recipe

  def self.find_recipe_like(user_id, recipe_id)
    RecipeLike.find_by(user_id: user_id, recipe_id: recipe_id)
  end

end
