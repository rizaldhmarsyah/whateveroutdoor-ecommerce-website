import LogIn from "../components/LogIn";
import bg from "../assets/bg-1.jpg";
import SignUp from "../components/SignUp";
import { useState } from "react";

const Authentication = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {toggle ? (
        <LogIn toggleForm={handleToggle} />
      ) : (
        <SignUp toggleForm={handleToggle} />
      )}
    </div>
  );
};

export default Authentication;
