import React, { Component } from "react";
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home";
import Service from "./components/services/Service";
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'

import "./App.css"

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <br /><br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Service} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
        <Footer/>
      </Router>
    );
  }
}
