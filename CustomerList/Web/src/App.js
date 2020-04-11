import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./Components/protectedRoute";
import ListingPage from "./Components/ListingPage/index";
import Signin from "./Components/Signin/signin";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Signin} />
          <ProtectedRoute exact path="/listingpage" component={ListingPage} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
