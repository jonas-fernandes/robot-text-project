import React, { Component } from 'react'

// Greeter is a dumb/display component that does not hold state
class GoodRobot extends Component {

    GoodRobotText = (props) => {
        let { name } = this.props
        name = name.replace(/[a-z]/gi, "Awesome!")
        return `I think that you are ${name} `
    }


  render() {
    // We are passing the state object value as props called "name" <name={ this.state.name }> from the parent App.js
    return (
      <h1 className = "GoodRobot" > GoodRobot Says: { this.GoodRobotText() } </h1>
    )
  }
}

export default GoodRobot
