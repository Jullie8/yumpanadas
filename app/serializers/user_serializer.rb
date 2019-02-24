class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest
  has_many :user_businesses
  has_many :businesses, through: :user_businesses
end


