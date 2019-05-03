class UserBusinessSerializer < ActiveModel::Serializer
  attributes :id, :user, :business
  belongs_to :user
  belongs_to :business
end
