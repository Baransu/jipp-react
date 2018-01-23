import React from "react";

class CountDisplay extends React.Component {
  componentWillReceiveProps(props) {
    console.log(props);
  }

  render() {
    if (this.props.count > 20) {
      return <div>{this.props.count}</div>;
    }
    return null;
  }
}

export default CountDisplay;
