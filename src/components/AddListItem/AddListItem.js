import React, { Component } from "react";
import "./AddListItem";

export default class AddListItem extends Component {
  state = {
    label: "",
  };
  onChangeLabel = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addNewItem(this.state.label);
    this.setState({
      label: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="form-control mt-2"
          type="text"
          placeholder="What needs to do"
          onChange={this.onChangeLabel}
          value={this.state.label}
        />
        <button className="btn btn-secondary mt-2">Add item</button>
      </form>
    );
  }
}
