import React, {Component} from 'react';
import NeutralBot from './components/NeutralBot';
import GoodRobot from './components/GoodRobot';
import BadRobot from './components/BadRobot';
import './App.css';

class App extends Component {
    constructor (props) {
        super (props)
        this.state = {
            name: "",
        }
    }

    handleChange = (event) => {
        this.setState ({ name: event.target.value})
    }

    updateName = (name) => {
        this.setState ({name: name})
    }

    render () {
        return (
            <div>
            <p> Enter Text Below: </p>
            <input
                value={ this.state.name }
                onChange={ this.handleChange }
            />

            <NeutralBot
                name = {this.state.name}
            />
            <GoodRobot
                name = {this.state.name}
                updateName = {this.updateName}
            />
            <BadRobot
                name = {this.state.name}
                updateName = {this.updateName}
            />
            </div>
        )
    }
}
export default App;
