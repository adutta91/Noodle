# == Schema Information
#
# Table name: recipes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  url         :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#

class Recipe < ActiveRecord::Base

  validates :title, :url, :user_id, presence: true

  # associations
  belongs_to :user

end
