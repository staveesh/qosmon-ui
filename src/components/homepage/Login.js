import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "./../../redux/actions/authActionCreator";
import { useHistory } from "react-router-dom";

const Login = ({ dispatchLoginAction }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("NORMAL_USER");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setUserType("NORMAL_USER");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const roles =
      userType === "NORMAL_USER"
        ? [{ role: "NORMAL_USER" }]
        : [{ role: "RESEARCHER" }, { role: "NORMAL_USER" }];
    dispatchLoginAction(
      email,
      password,
      Array.from(roles),
      () => {
        if (roles.length === 1) history.push("/usage");
        else history.push("/research");
      },
      (message) => {
        setShowError(true);
        setErrorMessage(message);
        clearForm();
      }
    );
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={onSubmit}>
          <h3>Log In to QoSMon</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Which type of user are you?</label>
            <select
              className="form-control"
              name="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="RESEARCHER">Researcher</option>
              <option value="NORMAL_USER">Normal User</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <br></br>
          {showError && <p className="errorText">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  dispatchLoginAction: (userName, password, roles, onSuccess, onError) =>
    dispatch(loginUser({ userName, password, roles }, onSuccess, onError)),
});
export default connect(null, mapDispatchToProps)(Login);
