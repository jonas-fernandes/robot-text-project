import React, { Component } from 'react'

// Greeter is a dumb/display component that does not hold state
class NeutralBot extends Component {
  render() {
    // We are passing the state object value as props called "name" <name={ this.state.name }> from the parent App.js
    return (
      <h1 className = "NeutralBot" > NeutralBot Says: { this.props.name }! </h1>
    )
  }
}

export default NeutralBot
