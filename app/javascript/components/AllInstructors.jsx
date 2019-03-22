import React from "react"
import PropTypes from "prop-types"

const AllInstructors = (props) => {
var instructors = props.instructors.map((instructor) => {
    return(
      <div key={instructor.id}>
        <h1>{instructor.name}</h1>
        <p>{instructor.bio}</p>
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
