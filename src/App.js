import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.js";
import Users from "./components/users/Users.js";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
