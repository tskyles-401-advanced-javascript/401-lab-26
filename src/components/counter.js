import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleButtonIncrease = e => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  handleButtonDecrease = e => {
    e.preventDefault();
    this.setState({ count: this.state.count - 1 });
  };

  handleChooseNumber = e => {
    e.preventDefault();
    this.setState({ count: e.target.value });
  };

  render() {
    let counterStyle = {
      color: "black"
    };

    if (this.state.count > 0) {
      counterStyle.color = "green";
    }
    if (this.state.count < 0) {
      counterStyle.color = "red";
    }

    return (
      <div>
        <form>
          <h4>Choose a starting number</h4>
          <input type="number" onChange={this.handleChooseNumber} />
        </form>
        <h4>The number is</h4>
        <h2 style={counterStyle} id="counter">
          {this.state.count}
        </h2>
        <button className="button positive" onClick={this.handleButtonIncrease}>
          Increase
        </button>
        <button className="button negative" onClick={this.handleButtonDecrease}>
          Decrease
        </button>
      </div>
    );
  }
}

export default Counter;
