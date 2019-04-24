# == Schema Information
#
# Table name: tasks
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  body       :string           not null
#  done       :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Task < ApplicationRecord
  validates :title, :body, presence: true 
  validates :done, inclusion: { in: [true, false] }

  after_initialize :ensure_done

  def ensure_done
    self.done ||= false
  end 

end
