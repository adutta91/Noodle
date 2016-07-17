class Recipe < ActiveRecord::Base

  validates :title, :url, :user_id, presence: true

  # associations
  belongs_to :user

end
