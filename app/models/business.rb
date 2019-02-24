class Business < ApplicationRecord
    has_many :user_businesses
    has_many :users, through: :user_businesses

end
