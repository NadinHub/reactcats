import React, { Component } from "react";

// we need to make this input controlled => we need state => we need to use class component

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <div className="col-auto">
        <input
          type="text"
          className="form-control search-input"
          placeholder="type to search a NAME"
          value={this.state.term}
          //let's make it send data from input search
          onChange={this.onSearchChange}
        />
      </div>
    );
  }
}

// 2. Значение из поля поиска переходило в app.js
//3. app updates its state -> search works
