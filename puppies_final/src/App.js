import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Happy from "./components/Happy";
import Sleepy from "./components/Sleepy";
import Guilty from "./components/Guilty";

const App = () => (
  <Router>
    <div className="container">
      <div className="links">
        <Link to="/">Home</Link>
        <br />
        <Link to="/happy">Happy</Link>
        <br />
        <Link to="/sleepy">Sleepy</Link>
        <br />
        <Link to="/guilty">Guilty</Link>
      </div>
      <div className="routes">
        <Route exact path="/" />
        <Route path="/happy" component={Happy} />
        <Route path="/sleepy" component={Sleepy} />
        <Route path="/guilty" component={Guilty} />
      </div>
    </div>
  </Router>
);

export default App;
