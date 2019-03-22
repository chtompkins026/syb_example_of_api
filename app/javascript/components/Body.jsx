import React from "react"
import PropTypes from "prop-types"
import AllInstructors from "./AllInstructors"
import NewInstructor from "./NewInstructor"

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewInstructor = this.addNewInstructor.bind(this)
  }

  handleFormSubmit(name, bio){
    let body = JSON.stringify({instructor: {name: name, bio: bio} })
  fetch('http://localhost:3000/api/instructors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((instructor)=>{
      this.addNewInstructor(instructor)
      console.log("this is an instructor", instructor);
    })

  }
  addNewInstructor(instructor){
    this.setState({
      instructors: this.state.instructors.concat(instructor)
    })
  }

componentDidMount(){
    fetch('/api/instructors.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ instructors: data }) });
  }
render(){
    return(
      <div>
        <NewInstructor handleFormSubmit={this.handleFormSubmit}/>
        <AllInstructors instructors={this.state.instructors}  />
      </div>
    )
  }
}

Body.propTypes = {
  instructors: PropTypes.string
};

export default Body
