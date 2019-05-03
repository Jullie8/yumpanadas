class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :yelp_id
  has_many :user_businesses
  has_many :users, through: :user_businesses
end
