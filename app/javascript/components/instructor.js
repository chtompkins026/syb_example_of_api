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
    if(this.state.editable){
       let name = this.name.value
       let bio = this.bio.value
       let id = this.props.instructor.id
       let instructor = {id: id, name: name, bio: bio}
       this.props.handleUpdate(instructor)
     }
     this.setState({
       editable: !this.state.editable
     })
   }

   render(){
     let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.instructor.name}/>:<h3>{this.props.instructor.name}</h3>
      let bio = this.state.editable ? <input type='text' ref={input => this.bio = input} defaultValue={this.props.instructor.bio}/>:<p>{this.props.instructor.bio}</p>
       return(
         <div>
           {name}
           {bio}
           <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
           <button onClick={() => this.props.handleDelete(this.props.instructor.id)}>Delete</button>
         </div>
       )
     }
   }

export default Instructor
