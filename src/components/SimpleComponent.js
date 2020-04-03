import React from 'react'

export default class SimpleComponent extends React.Component {
    state = {
        mood: "happy"
    }

    handleClick = () => {
        let toggledValue
        this.state.mood === "happy" ? toggledValue = "sad" : toggledValue = "happy"
            this.setState({
                mood: toggledValue
            })
    }

    render(){
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}
