class Api::WorkoutsController < ApplicationController

  def index
    render json: Workout.all
  end

  def create
    @workout = Workout.create(instructor_params)
    render json: @workout
  end

  def show
    # user_games = @instructor.games.map(&:id)
    # render json: @instructor.attributes.merge({games: user_games})
  end

  def destroy
   Workout.destroy(params[:id])
  end

  def update
    workout = Workout.find(params[:id])
    workout.update_attributes(workout_params)
    render json: workout
  end

  private


  def workout_params
    params.require(:workout).permit(:name, :description)
  end

end
