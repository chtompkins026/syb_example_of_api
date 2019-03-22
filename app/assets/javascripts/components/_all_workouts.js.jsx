const AllWorkouts = (props) => {
var workouts = props.workouts.map((workout) => {
    return(
      <div key={workout.id}>
        <h1>{workout.name}</h1>
        <p>{workout.description}</p>
      </div>
    )
  })
return(
      <div>
        {workouts}
      </div>
    )
}
