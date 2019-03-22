class Workout < ApplicationRecord
  has_many :instructor_workouts
  has_many :instructors, through: :instructor_workouts 
end
