// "use strict";
// "use babel";
// "any other strings like this in the prologue";
import React, { Component } from "react";
import { connect } from "react-redux";
import ContactTable, { List } from "../Widgets/CustomerTable/index";
import SearchBar from "../Widgets/SearchBar/index";
import Button from "../Widgets/Buttons/buttons";
import { FetchData } from "../../actions/index";
import axios from "axios";

import "./index.css";

class ListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      tabValues: [
        { name: "DISPLAY", icon: "fa-list-ul" },
        { name: "EDIT", icon: "fas fa-edit" },
        { name: "STOREDB", icon: "fas fa-database" },
      ],
      active: "DISPLAY",
      DBbuttons: "",
      apiData: [],
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.storeToDB = this.storeToDB.bind(this);
    this.fetchingData = this.fetchingData.bind(this);
  }

  storeToDB() {
    this.props.payload.map(async (val) => {
      await axios.post("http://localhost:3001/post", val).then((res) => {
        console.log(res.data);
      });
    });
    this.setState({ DBbuttons: "fetch" });
  }

  async fetchingData() {
    await axios.get("http://localhost:3001/post").then((res) => {
      this.props.fetch(res.data);
      var redux = this.props.apiPayload;
      this.setState({ apiData: redux });
    });
  }

  handleFilterTextInput(searchText) {
    this.setState({
      searchText: searchText,
    });
  }
  active(val) {
    this.setState({ active: val });
  }

  render() {
    console.log(this.props.apiPayload);
    return (
      <div className="mainDiv">
        <div className="mainListingPage">
          <div className="sidebar">
            <p style={{ fontWeight: "bold" }}>CUSTOMERS</p>
            {this.state.tabValues.map((val,index) => (
              <div
                className={`Tabs ${
                  this.state.active == val.name ? "active" : ""
                }`}
                name={val.name}
                onClick={() => this.active(val.name)}
                key={index +1}
              >
                {val.name}
                <i className={`fa ${val.icon}`}></i>
              </div>
            ))}
          </div>
          <div className="customerData">
            <SearchBar
              filterText={this.state.searchText}
              onFilterTextInput={this.handleFilterTextInput}
              className="searchInput"
            />
            <div className="maincustomerTable">
              <div className="customerTable">
                <ContactTable
                  contacts={this.props.payload}
                  filterText={this.state.searchText}
                  active={this.state.active}
                  basicFormClassName="basicForm"
                  active={this.state.active}
                  DBbuttons={this.state.DBbuttons}
                  displayData={this.state.displayData}
                />
                {this.state.active == "STOREDB" ? (
                  <div className="parentButton">
                    <div className="innerButton">
                      <Button
                        onClick={this.storeToDB}
                        className="storeButton"
                        name="StoreToDB"
                      />
                      <Button
                        onClick={this.fetchingData}
                        className="fetchButton"
                        name="FetchData"
                      />
                    </div>
                    {
                      <div>
                        {this.state.apiData.length > 0
                          ? this.state.apiData.map((item,index) => (
                              <List
                                id={item.id}
                                username={item.username}
                                phone={item.phone}
                                email={item.email}
                                key={index + 1}
                              />
                            ))
                          : ""}
                      </div>
                    }
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    payload: state.customerform.userData,
    apiPayload: state.customerform.Api,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (data) => dispatch(FetchData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingPage);
