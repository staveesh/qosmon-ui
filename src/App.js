import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./pages/login";
import Logout from "./pages/logout";
import Research from "./pages/research";
import Usage from "./pages/usage";
import Measurement from "./pages/job";
import Register from "./pages/signup";
import Result from "./pages/results";

import axios from "axios";

function App() {
  const [state, setState] = useState({
    loggedInStatus: JSON.parse(window.localStorage.getItem("user"))
      ? "LOGGED_IN"
      : "NOT_LOGGED_IN",
    user: JSON.parse(window.localStorage.getItem("user")) || {},
  });
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (user && JSON.stringify(user) !== "{}") {
      axios
        .get(`${process.env.REACT_APP_API_URL}/logged_in`, {
          headers: {
            Authorization: "Bearer " + user.jwt,
          },
        })
        .then(() => {
          if (state.loggedInStatus === "NOT_LOGGED_IN") {
            console.log("User is not logged in");
            setState({
              loggedInStatus: "LOGGED_IN",
              user: user,
            });
          }
        })
        .catch(() => {
          console.log("Token expired");
          window.localStorage.removeItem("user");
          setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          });
          history.push("/");
        });
    }
  },[history, state.loggedInStatus]);

  const handleLogin = (data) => {
    setState({
      loggedInStatus: "LOGGED_IN",
      user: data,
    });
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home {...props} handleLogin={handleLogin} userState={state} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(props) => <Register {...props} userState={state} />}
        />
        <Route
          exact
          path="/logout"
          render={(props) => <Logout {...props} userState={state} />}
        />
        <Route
          exact
          path="/research"
          render={(props) => <Research {...props} userState={state} />}
        />
        <Route
          exact
          path="/usage"
          render={(props) => <Usage {...props} userState={state} />}
        />
        <Route
          path="/job"
          render={(props) => <Measurement {...props} userState={state} />}
        />
        <Route
          path="/results"
          render={(props) => <Result {...props} userState={state} />}
        />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
