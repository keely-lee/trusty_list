# == Schema Information
#
# Table name: tasks
#
#  id          :bigint           not null, primary key
#  list_id     :integer          not null
#  title       :string           not null
#  status      :text             not null
#  description :string
#  comments    :string           default([]), is an Array
#  due_date    :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Task < ApplicationRecord
  validates :list_id, :title, presence: true
  validates :status, inclusion: { in: ['I', 'D'] }, length: {maximum: 1}
  after_initialize :start_in_progress

  def start_in_progress
    self.status ||= 'I'
  end



end
