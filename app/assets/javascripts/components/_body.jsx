class Body extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      workouts: []
    };
  }
componentDidMount(){
    fetch('/api/v1/workouts.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ workouts: data }) });
  }
render(){
    return(
      <div>
        <AllWorkouts workouts={this.state.workouts} />
      </div>
    )
  }
}
