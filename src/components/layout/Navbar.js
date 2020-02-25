import React, { Component } from "react";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className='fab fa-github' /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
