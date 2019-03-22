import React from "react"
import PropTypes from "prop-types"

class Instructor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

   handleEdit(){
      this.setState({
        editable: !this.state.editable
      })
    }

  render(){
    let name = this.state.editable ? <input type='text' ref={input => this.name = input}
      defaultValue={this.props.instructor.name}/>:<h3>{this.props.instructor.name}</h3>
    let bio = this.state.editable ? <input type='text'
      ref={input => this.description = input} defaultValue={this.props.instructor.bio}/>:<p>{this.props.instructor.bio}</p>

    return(
      <div>
        {name}
        {description}
        <button onClick={() => this.handleEdit()}>
        <button>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.instructor.id)}>Delete</button>
      </div>
    )
  }
}

export default Instructor
