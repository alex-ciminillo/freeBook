class AddBirthdayGender < ActiveRecord::Migration[5.2]
  def change
      add_column :users, :birthday, :string, null: false
      add_column :users, :gender, :string, null: false
  end
end
