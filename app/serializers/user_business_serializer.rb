class UserBusinessSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  belongs_to :business
end
