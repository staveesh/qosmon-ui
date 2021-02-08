import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/login";
import Logout from "./pages/logout";
import Research from "./pages/research";
import Usage from "./pages/usage";
import Measurement from "./pages/job";
import Register from "./pages/signup";
import Result from "./pages/results";
import Nodes from "./pages/nodes";
import AccessPoints from "./pages/accesspoints";
import { logoutUser } from "./redux/actions/authActionCreator";
import Header from "./components/Header";

function App({ user, dispatchLogoutAction }) {
  return (
    <div className="App">
      <Header
        isLoggedIn={user.isLoggedIn}
        userName={user.email}
        onLogout={dispatchLogoutAction}
      />
      {user.isLoggedIn ? (
        <Switch>
          <Route exact path="/research" component={Research} />
          <Route exact path="/usage" component={Usage} />
          <Route path="/job" component={Measurement} />
          <Route path="/results" component={Result} />
          <Route path="/nodes" component={Nodes} />
          <Route path="/access-points" component={AccessPoints} />
          {user.roles.length === 1 ? (
            <Redirect to="/usage" component={Usage} />
          ) : (
            <Redirect to="/research" component={Research} />
          )}
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/login" component={Home} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/logout" component={Logout} />
          <Redirect to="/login" component={Home} />
        </Switch>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
  dispatchLogoutAction: () => dispatch(logoutUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
