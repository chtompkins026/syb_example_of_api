class InstructorWorkout < ApplicationRecord
  belongs_to :workout
  belongs_to :instructor
end
