// Code SimpleComponent Here
import React from "react";

export default class SimpleComponent extends React.Component {
  state = {
    mood: "happy",
  };

  handleClick = () => {
    let newMood = this.state.mood === "happy" ? "sad" : "happy";
    return this.setState({ mood: newMood });
  };

  render() {
    console.log(this.state.mood);
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
