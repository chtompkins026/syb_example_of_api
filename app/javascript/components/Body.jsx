import React from "react"
import PropTypes from "prop-types"

class Body extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      instructors: []
    };
  }
componentDidMount(){
    fetch('/api/instructors.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ instructors: data }) });
  }
render(){
    return(
      <div>
        <AllInstructors instructors={this.state.instructors} />
      </div>
    )
  }
}

Body.propTypes = {
  instructors: PropTypes.string
};

export default Body
