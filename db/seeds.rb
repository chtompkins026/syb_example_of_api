# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

  Instructor.destroy_all
  Workout.destroy_all

instructors = ['Jennifer Amoroso', 'Samir Poonawala', 'Mantas Zvinas', 'Dale Moss']
instructors.each{|ins| Instructor.create(name: ins, bio: "I am an awesome instructor.", email:'google1@gmail.com', admin: TRUE)}

instructor1 = Instructor.first
instructor2 = Instructor.second
instructor3 = Instructor.third
instructor4 = Instructor.last

5.times do
  workout = Workout.create!({name:Faker::Name.name, description: Faker::Marketing.buzzwords})
  instructor1.workouts << workout
end

5.times do
  workout = Workout.create!({name:Faker::Name.name, description: Faker::Marketing.buzzwords})
  instructor2.workouts << workout
end

5.times do
  workout = Workout.create!({name:Faker::Name.name, description: Faker::Marketing.buzzwords})
  instructor3.workouts << workout
end

5.times do
  workout = Workout.create!({name:Faker::Name.name, description: Faker::Marketing.buzzwords})
  instructor4.workouts << workout
end
