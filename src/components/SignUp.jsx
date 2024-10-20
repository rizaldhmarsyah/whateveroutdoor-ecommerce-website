import { useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import userSignUp from "../auth/useSignUp";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/profile";

  const { error, signUp } = userSignUp();

  const handleSignUp = async (e) => {
    e.preventDefault();

    await signUp(email, password);

    if (!error) {
      navigate(from, { replace: true });
      setEmail("");
      setPassword("");

      return;
    } else {
      setErrorMessage(error);
    }
  };

  // show/hide password
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-baseColor bg-opacity-5 backdrop-blur-lg sm:p-8 p-6 rounded-lg shadow-md sm:w-96 w-64">
        <h2 className="text-2xl font-bold mb-4 text-baseColor text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </div>

          {/* Password */}
          <InputGroup className="mb-4">
            <FormControl
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              variant="light"
              onClick={toggleShowPassword}
              className="bg-baseColor"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </Button>
          </InputGroup>

          {error && <p>{errorMessage}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-textColor hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            SignUp
          </button>
        </form>
        <p className="text-baseColor pt-4 sm:text-base text-sm">
          Have an account?
        </p>
        <Button
          variant="outline-light"
          className="w-full"
          onClick={props.toggleForm}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
