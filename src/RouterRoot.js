import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from './App'

const RouterRoot = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
        </div>
    </Router>
)


export default RouterRoot;
