import React from "react"
import PropTypes from "prop-types"

const NewInstructor = (props) => {
  let formFields = {}

  return(
        <form onSubmit={ (e) => { props.handleFormSubmit(formFields.name.value, formFields.bio.value); e.target.reset();}
  }>
          <input ref={input => formFields.name = input} placeholder='Enter the instructors Name'/>
          <input ref={input => formFields.description = input} placeholder='Enter a bio' />
          <button>Submit</button>
        </form>
      )
  }

export default NewInstructor
