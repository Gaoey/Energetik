import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
      <Navbar inverse>
          <span style={{fontFamily:'Aldrich'}}><h3>By ENERGETIK team </h3></span>
      </Navbar>
    );
  }
}

export default Footer;
