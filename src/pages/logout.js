import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <div className="Home">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h5>
            You have successfully logged out. Click <Link to="/">here</Link> to
            login.
          </h5>
        </div>
      </div>
    </div>
  );
}
