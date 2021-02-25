import react from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import footer from "./footer";
import {Switch,Route, Redirect} from "react-router-dom";

const App=()=> {
  return(
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
         <Route exact path="/Services" component={Services}/>
         <Route exact path="/Contact" component={Contact}/>
         <Redirect to="/"/>
      </Switch>
      <footer />
    </>
    );
};


export default App;
