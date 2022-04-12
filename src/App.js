import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./components/pages/Home/HomePage";
import LecturePage from "./components/pages/Lectures/LecturePage";
import LectureIntro from "./components/pages/Lectures/LectureIntro";
import Aboutus from "./components/pages/Aboutus/Aboutus";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div className="App">
          <Switch>
            <Route path="/ProbStat/">
              <HomePage />
            </Route>
            <Route path="/ProbStat">
              <HomePage />
            </Route>
            <Route path="/probstat">
              <HomePage />
            </Route>
            <Route path="/about">
              <Aboutus />
            </Route>
            <Route path="/lectures/:id">
              <LecturePage />
            </Route>
            <Route path="/lectures">
              <LectureIntro />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
