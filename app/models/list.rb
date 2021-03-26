# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  validates :user_id, presence: true
  validates :name, presence: true, uniqueness: true
  after_initialize :name_case

  has_many :tasks,
  class_name: :Task,
  dependent: :destroy

  belongs_to :user,
  class_name: :User

  def name_case
    self.name = self.name.split(" ").map{ |word| word.upcase }.join(" ")
  end
end
