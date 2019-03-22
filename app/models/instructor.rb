class Instructor < ApplicationRecord
  has_many :instructor_workouts
  has_many :workouts, through: :instructor_workouts 
end
