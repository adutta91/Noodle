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

require 'test_helper'

class RecipeLikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
