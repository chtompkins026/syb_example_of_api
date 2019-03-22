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

    this.handleDelete = this.handleDelete.bind(this)
    this.deleteInstructor = this.deleteInstructor.bind(this)

    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateInstructor = this.updateInstructor.bind(this)
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
      })
  }

  addNewInstructor(instructor){
    this.setState({
      instructors: this.state.instructors.concat(instructor)
    })
  }

  handleDelete(id){
   fetch(`http://localhost:3000/api/instructors/${id}`,
   {
     method: 'DELETE',
     headers: {
       'Content-Type': 'application/json'
     }
   }).then((response) => {
       this.deleteInstructor(id)
     })
 }

 deleteInstructor(id){
   console.log("this is id in deleteInstructor", id);
    let newIns = this.state.instructors.filter((instructor) => instructor.id !== id)
    this.setState({
      instructors: newIns
    })
  }


  handleUpdate(instructor){
   fetch(`http://localhost:3000/api/instructors/${instructor.id}`,
   {
     method: 'PUT',
     body: JSON.stringify({instructor: instructor}),
     headers: {
       'Content-Type': 'application/json'
     }
   }).then((response) => {
       this.updateInstructor(instructor)
     })
 }

 updateInstructor(instructor){
   let newI = this.state.instructors.filter((i) => i.id !== instructor.id)
   newI.push(instructor)
   this.setState({
     instructors: newI
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
        <AllInstructors instructors={this.state.instructors}
          handleDelete={this.handleDelete}
          handleUpdate = {this.handleUpdate} />
      </div>
    )
  }
}

Body.propTypes = {
  instructors: PropTypes.string
};

export default Body
