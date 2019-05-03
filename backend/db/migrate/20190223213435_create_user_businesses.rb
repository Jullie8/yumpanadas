class CreateUserBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :user_businesses do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :business, foreign_key: true

      t.timestamps
    end
  end
end
