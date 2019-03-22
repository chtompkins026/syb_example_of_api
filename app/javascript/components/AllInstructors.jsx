import React from "react"
import PropTypes from "prop-types"
import Instructor from "./Instructor"

const AllInstructors = (props) => {
var instructors = props.instructors.map((instructor) => {
    return(
      <div key={instructor.id}>
        <Instructor instructor={instructor} handleDelete={props.handleDelete}/>
      </div>
    )
  })
return(
      <div>
        {instructors}
      </div>
    )
}

export default AllInstructors
