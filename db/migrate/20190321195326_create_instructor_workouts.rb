class CreateInstructorWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :instructor_workouts do |t|
      t.integer :workout_id
      t.integer :instructor_id

      t.timestamps
    end
  end
end
