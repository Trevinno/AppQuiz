import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/home";
import Navbar from "./components/navbar";
import Question from "./components/question.jsx";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Question" component={Question} />
        <Route path="/Preguntas/:theme" component={Question} />
        <Redirect from="/" to="/Home" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
