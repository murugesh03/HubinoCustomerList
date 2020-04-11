import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string,
  };
  render() {
    const { className, onClick, name } = this.props;
    return (
      <button className={className} onClick={onClick}>
        {name}
      </button>
    );
  }
}

export default Button;
