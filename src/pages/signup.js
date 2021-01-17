import SignUp from "../components/homepage/SignUp";
import Header from "../components/Header";

export default function Register() {
  const links = [
    { to: "/", name: "Log In" },
    { to: "/signup", name: "Sign Up" },
  ];
  return (
    <div class="Home">
      <Header links={links} />
      <SignUp />
    </div>
  );
}
