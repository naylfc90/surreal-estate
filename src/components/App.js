import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/App.css";

const App = () => {
  return (
    <div>
      <NavBar>
        <Link to="/">View Properties</Link>
        <Link to="/add-property">Add Property</Link>
      </NavBar>
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
