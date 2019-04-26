import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";

import Form from "../Form";


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row">
            <Form/>  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
