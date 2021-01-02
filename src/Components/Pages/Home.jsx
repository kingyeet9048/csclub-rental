import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../../Styles/Home.css';
import Navigation from './../Nav';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Navigation />
    );
  }
}

Home.propTypes = {
  // message: PropTypes.string.isRequired,
  // className: PropTypes.string
};

Home.defaultProps = {
  // className: "text-danger"
};


export default Home;
