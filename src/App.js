import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            DTP Tecnologias
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <link to={"/tutorials"} className="nav-link">
                Tutoriais
              </link>
            </li>
            <li className="nav-item">
              <link to={"/add"} className="nav-link">
                Adicionar
              </link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial}/>
          </switch>
        </div>
      </div>
    );
  }
}

export default App;
