class User < ApplicationRecord
    has_many :user_businesses
    has_many :businesses, through: :user_businesses

    before_save { self.email = email.downcase }
    validates :username,  presence: true, length: { maximum: 50 }
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
    validates :password, presence: true, length: { minimum: 5 }

    has_secure_password

end
