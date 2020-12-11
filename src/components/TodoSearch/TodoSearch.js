import React, { Component } from "react";
import SearchFilter from "./SearchFilter";
import "./todoSearch.css";

export default class TodoSearch extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({
      term,
    });
    this.props.onSearchChange(term);
  };
  render() {
    return (
      <form className="form-inline search-input ">
        <input
          className="form-control search-input"
          type="search"
          placeholder="Search"
          value={this.state.term}
          onChange={this.onSearchChange}
        />

        <SearchFilter
          filter={this.props.filter}
          onFilterChange={this.props.onFilterChange}
        />
      </form>
    );
  }
}
