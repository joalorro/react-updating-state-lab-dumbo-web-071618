// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {

    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    incrementClicks = () => {
        this.setState({timesClicked: ++this.state.timesClicked})
        console.log(this.state.timesClicked)
    }

    render() {
        return(
            <button onClick={this.incrementClicks}>{this.state.timesClicked}</button>
        )
    }

}

export default DigitalClicker