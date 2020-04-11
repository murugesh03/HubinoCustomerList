import React, { Component } from "react";
import Input from "../Input/input";
import { Edit } from "../../../actions/index";
import { connect } from "react-redux";



class BasicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.contact.id,
      username: this.props.contact.username,
      phone: this.props.contact.phone,
      email: this.props.contact.email,
      key: this.props.contact.key,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.Edit(this.state);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form
          className={this.props.basicFormClassName}
          onSubmit={this.handleSubmit}
        >
          <p>{this.state.id}</p>
          <Input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <Input
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <Input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Edit: (newData) => dispatch(Edit(newData)),
  };
};

export default connect(null, mapDispatchToProps)(BasicForm);
