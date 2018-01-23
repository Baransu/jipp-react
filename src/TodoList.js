import React from "react";
import { connect } from "react-redux";

import { changeFilter } from "./actions";

class TodoList extends React.Component {
  state = { input: "ala ma kota" };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
        Filter: {this.props.filter}
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={() => this.props.changeFilter("completed")}>
          Change filter to completed
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    filter: state.filter
  }),
  {
    changeFilter
  }
)(TodoList);
