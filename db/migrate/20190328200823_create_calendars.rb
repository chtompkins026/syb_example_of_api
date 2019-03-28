class CreateCalendars < ActiveRecord::Migration[5.2]
  def change
    create_table :calendars do |t|
      t.integer :date
      t.integer :time
      t.integer :workout_id

      t.timestamps
    end
  end
end
