import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <Navbar bsStyle="null" className="App-header">
        <p><img src={'https://media.giphy.com/media/ObOOwx8QZp9MQ/giphy.gif'} className="App-logo" alt="logo" /></p>
        <p style={{ fontFamily: 'Aldrich', position: 'absolute' }}><h1>ENERGETIK</h1></p>
      </Navbar>
    );
  }
}

export default Header;
