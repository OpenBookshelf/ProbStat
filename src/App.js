import "./App.css";
import * as React from "react";
import {  Switch, Route } from "react-router-dom";
import { HashRouter as Router} from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./components/pages/Home/HomePage";
import LecturePage from "./components/pages/Lectures/LecturePage";
import LectureIntro from "./components/pages/Lectures/LectureIntro";
import Aboutus from "./components/pages/Aboutus/Aboutus";
import AboutTeam from "./components/pages/Aboutus/AboutTeam";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route path="/ProbStat/about">
              <Aboutus />
            </Route>
            <Route path="/ProbStat/team">
              <AboutTeam />
            </Route>
            <Route path="/ProbStat/lectures/:id/:lecture">
              <LecturePage />
            </Route>
            <Route path="/ProbStat/lectures">
              <LectureIntro />
            </Route>
            <Route path={"*"}>
              <HomePage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
