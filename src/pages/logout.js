import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Logout() {
  const links = [
    { to: "/", name: "Log In" },
    { to: "/signup", name: "Sign Up" },
  ];
  return (
    <div className="Home">
      <Header links={links} />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h5>
            You have successfully logged out. Click <Link to="/">here</Link> to
            login
          </h5>
        </div>
      </div>
    </div>
  );
}
