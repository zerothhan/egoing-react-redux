import React, { Component } from "react";

export default class AddNumber extends Component {
  state = { size: 1 };

  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type="button"
          value="+"
          onClick={function () {
            this.props.onClick(this.state.size);
            console.log(this);
          }.bind(this)}
          // onClick={() => {
          //   this.props.onClick(this.state.size);
          // }}
        />
        <input
          type="text"
          value={this.state.size}
          onChange={function (e) {
            this.setState({ size: Number(e.target.value) });
          }.bind(this)}
        />
      </div>
    );
  }
}
