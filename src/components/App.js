import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import HowToStaySafe from './HowToStaySafe';
import About from './About';


export default class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
        <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/how-to-stay-safe" component={HowToStaySafe} />
        <Route path="/about" component={About} />
        </div>
        </BrowserRouter>
    );
  }
}
