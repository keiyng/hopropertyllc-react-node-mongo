import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
        <Link to="/contact" className="right">Contact</Link>
          <Link to="/property" className="right">Properties</Link>
          <Link to="/application" className="right">Application</Link>
          {/* <ul className="right">{this.renderContent()}</ul> */}
        </div>
      </nav>
    );
  }
}

export default Header;