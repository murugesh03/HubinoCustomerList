import React, { Component } from "react";
import "./signin.css";
import auth from "../auth";
import { connect } from "react-redux";
import { FormPost } from "../../actions/index";
import Input from "../Widgets/Input/input";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      phone: "",
      id: "",
      key: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let username = this.state.username;
    let email = this.state.email;
    let phone = this.state.phone;
    let id = this.state.id;
    if (username && email && phone && id != "") {
      this.props.post(this.state);
      auth.login(() => {
        this.props.history.push("/listingpage");
      });
    }
    return;
  };
  render() {
    return (
      <div className="mainSignin">
        <div className="innerSignin">
          <form onSubmit={this.handleSubmit} className="mainForm">
            <p className="signinText">SIGN UP</p>
            <Input
              placeholder="USERNAME"
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Input
              placeholder="EMAIL"
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <Input
              placeholder="ID"
              type="number"
              name="id"
              onChange={this.handleChange}
              value={this.state.id}
            />
            <Input
              placeholder="PHONE"
              type="number"
              name="phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
            <button type="submit" className="submitButton">
              <span>
                <p>FINISH</p>
              </span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    post: (data) => dispatch(FormPost(data)),
  };
};

export default connect(null, mapDispatchToProps)(Signin);
