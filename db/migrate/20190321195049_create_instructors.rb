class CreateInstructors < ActiveRecord::Migration[5.2]
  def change
    create_table :instructors do |t|
      t.string :name
      t.string :email
      t.string :bio
      t.boolean :admin

      t.timestamps
    end
  end
end
