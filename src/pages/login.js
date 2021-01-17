import Login from "../components/homepage/Login";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  const history = useHistory();
  const links = [
    { to: "/", name: "Log In" },
    { to: "/signup", name: "Sign Up" },
  ];

  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
    // // Update parent component
    if (data.userType === "NORMAL_USER") history.push("/usage");
    else if (data.userType === "RESEARCHER") history.push("/research");
    
  };

  return (
    <div className="Home">
      <Header links={links} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}
