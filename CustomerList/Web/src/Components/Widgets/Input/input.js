import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
  };
  static defaultProps = {
    value: "",
    onChange: () => {},
  };
  render() {
    const { placeholder, value, onChange, type, className, name } = this.props;
    return (
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        type={type}
        name={name}
      />
    );
  }
}

export default Input;
