import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./components/pages/Home/HomePage";
import LecturePage from "./components/pages/Lectures/LecturePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div className="App">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <HomePage />
            </Route>
            <Route path="/lectures/:id?">
              <LecturePage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
