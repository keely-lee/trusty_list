# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  attr_reader :password
  validates :email, :password_digest, :session_token, uniqueness: true, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
  after_initialize :ensure_session_token

  has_many :lists,
  class_name: :List,
  dependent: :destroy

  has_many :tasks,
  through: :lists,
  source: :tasks

  def self.find_by_credentials(username, password)
    @user = User.find_by(email: username)
    return nil if @user.nil?
    @user.is_password?(password) ? @user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end
  
  def is_password?(password)
    bc = BCrypt::Password.new(password_digest)
    bc.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token = self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end
  
end
