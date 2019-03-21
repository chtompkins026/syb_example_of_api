class Api::V1::InstructorsController < ApplicationController
  def index
    render json: Instructor.all
  end

  def create
    instructor = Instructor.create(instructor_params)
    render json: Instructor
  end

  def destroy
    Instructor.destroy(params[:id])
  end

  def update
    instructor = Instructor.find(params[:id])
    instructor.update_attributes(instructor_params)
    render json: Instructor
  end

  private

  def instructor_params
    params.require(:instructor).permit(:id, :name, :email,:bio, :admin)
  end
end


#test
