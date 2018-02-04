import { Component } from "react";

class UpdateBlocker extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return this.props.children;
  }
}

export default UpdateBlocker;
