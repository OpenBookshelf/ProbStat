import "./App.css";
import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./components/pages/Home/HomePage";
import LecturePage from "./components/pages/Lectures/LecturePage";
import LectureIntro from "./components/pages/Lectures/LectureIntro";
import Aboutus from "./components/pages/Aboutus/Aboutus";
import AboutTeam from "./components/pages/Aboutus/AboutTeam";
import { useHistory } from "react-router-dom";
import QuizPage from "./components/pages/Quiz/QuizPage";
import TrainingPage from "./components/pages/Training/TrainingPage";

function App() {
  function ScrollToTop() {
    const history = useHistory();
    React.useEffect(() => {
      const unlisten = history.listen((location, action) => {
        if (action !== "POP") {
          window.scrollTo(0, 0);
        }
      });
      return () => unlisten();
    }, [history]);
    return null;
  }
  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop />
        <div className="App">
          <Switch>
            <Route path="/about">
              <Aboutus />
            </Route>
            <Route path="/team">
              <AboutTeam />
            </Route>
            <Route path="/training">
              <TrainingPage />
            </Route>
            <Route path="/lectures/:id/:lecture">
              <LecturePage />
            </Route>
            <Route path="/quiz/:id">
              <QuizPage />
            </Route>
            <Route path="/lectures">
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
