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
import Sidebar from "./components/layout/Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = React.useState(false);

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
        <div className="relative inline-block md:hidden">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="fixed bottom-10 right-5 bg-gray-100 text-white p-2 rounded-full m-2 z-50"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADTUlEQVRYhe2VTWhdZRCGnznn3J/cnyaNJlgrgoK00YVdKFoXVhHcKSq04EbBrhQquO8i2O7cuHWjCxdCXKgL/8CliigiCqXipmiLxgRqQlPRmzPvuDjn/qU3zb1tXLUvfJz7nW/umfebeWcGbuJGhwGwFOm9ldUnCVq77UCEV4kvf3rutpVR5xnAQmV1MeBkSWdXYRi52c/AwqjzpLQ6cHiuypln5lg81AZgN/cRHNyOYDK4iRg+3O39KBjAwocrSwRHdza/dpx9dn5kgrP/0+kgHj7+xRLhCBGuDZOf+vbdp8+NTyCCaucy/yYZVqlPTCAiPyqJiHLhARxPdvxn9wNyTj+4l7cOz7CPyyCfiIDkRDjqLbVhiwh3Qmrw6B1tPn7qTl6+OyHt/D2e0gBJSCIGnhMT6KKeJpw4NM/SE/Pck/VJVGW03JjJE2bLNZ0bTbeBm/cjAdcpwttbVfY3Ei6sQUMJdUE1jDQgCcDAMXKDZTmKvgYIXR+BT8+tc/r7iyiazCqlIaMuoybIugQAN9g0+D2851wSwTUSuHCpw+I3y3y9ZszaHmbcaDk03ZjqETASIAABmxalCPsR0KQRsCThzR//4s/NdTrZFNOW0M6N6dxou9F0mJJRDaMyIgJF3gvxFWU4aQQs4TwtqBSOWuXN294n0E1DFn11O9BJjG4P6OsgJiQwgIaMhgp1Nx2aDi0ZDS9SUAkbikAnolD/UCMqDHplOO50e/3+NjXBA/NV3nlhL88/0mBKxoF9GSdeafP4kTpNh7v2p7z4aosjj9VouCH5UClKI8pwnOmWBFRU5JlyXwsjK8/TgJqMWli5N+oqOulgCigjUEzDD1ZOASfHCf8eN27tJNyyaczmRdOZcaOVF+molzpISxe5wW//rPHGdx8NVUAo3j//yWvHMoCzm3OL92WrXwW0e3n+4delUBBE2TiK3y5x0WEjgj88yBRkglQijSBVYAqMQBF4OL+sL9MfRD4UgSIFx8zPwGeDN33opc+HGYdAIg/RCbExUNND6taId9vYXKGBQYxqHLH1g9rGwVVsenY79YEId4XS2MJ621tNaOPlPN92Gkp6OyTvjlGFhiaZVKwo12CZjWFzKXJ/76pqv4kbBv8Bjz4W6uvmiIUAAAAASUVORK5CYII="
              alt=""
            />{" "}
          </button>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
      </Router>
    </div>
  );
}

export default App;
