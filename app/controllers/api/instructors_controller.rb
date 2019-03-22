class Api::InstructorsController < ApplicationController

  def index
    render json: Instructor.all
  end

  def create
    @instructor = Instructor.create(instructor_params)
    render json: @instructor
  end

  def show
    # user_games = @instructor.games.map(&:id)
    # render json: @instructor.attributes.merge({games: user_games})
  end

  def destroy
   Instructor.destroy(params[:id])
  end

  def update
    instructor = Instructor.find(params[:id])
    instructor.update_attributes(instructor_params)
    render json: instructor 
  end

  private


  def instructor_params
    params.require(:instructor).permit(:username, :password, :password_confirmation)
  end

end
