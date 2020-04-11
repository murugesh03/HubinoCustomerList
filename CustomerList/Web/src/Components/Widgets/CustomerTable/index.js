import React, { Component } from "react";
import BasicForm from "../BasicForm/BasicForm";
import { connect } from "react-redux";

import "./index.css";

export const List = (props) => {
  return (
    <React.Fragment>
      <div className="childTables">
        <div>{props.id}</div>
        <div>{props.username}</div>
        <div>{props.phone}</div>
        <div>{props.email}</div>
      </div>
    </React.Fragment>
  );
};

class ContactRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickForm = this.clickForm.bind(this);
  }
  clickForm(e) {
    console.log(e);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.active == "DISPLAY" ? (
          <div className="childTables">
            <div>{this.props.contact.id}</div>
            <div>{this.props.contact.username}</div>
            <div>{this.props.contact.phone}</div>
            <div>{this.props.contact.email}</div>
          </div>
        ) : (
          ""
        )}
        {this.props.active == "EDIT" ? <BasicForm {...this.props} /> : ""}
      </React.Fragment>
    );
  }
}

class ContactTable extends Component {
  render() {
    var rows = [];
    this.props.contacts.map((contact,index) => {
      if (contact.username.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(
        <ContactRow
          contact={contact}
          active={this.props.active}
          {...this.props}
          key={index + 1}
        />
      );
    });
    return (
      <React.Fragment>
        <div>
          <div className="mainTable">
            <div>Id</div>
            <div>Name</div>
            <div>Phone</div>
            <div>Email</div>
          </div>
          {rows}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    apiPayload: state.customerform.Api,
  };
};

export default connect(mapStateToProps, null)(ContactTable);
