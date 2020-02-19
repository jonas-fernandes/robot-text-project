import React, { Component } from 'react'

// Greeter is a dumb/display component that does not hold state
class BadRobot extends Component {

badRobotText = (props) => {
    let { name } = this.props
    name = name.replace(/[a-z]/gi, "Bla")
    return `I hear you saying ${name}. Is that correct?`
}



  render() {
    // We are passing the state object value as props called "name" <name={ this.state.name }> from the parent App.js
    return (
      <h1 className = "BadRobot" > BadRobot Says: { this.badRobotText() } </h1>
    )
  }
}

export default BadRobot
