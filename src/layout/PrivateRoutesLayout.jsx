import { Navigate, Outlet, useLocation } from "react-router-dom";
import { whateverAuth } from "../firebase/config";

const PrivateRoutesLayout = () => {
  const location = useLocation();
  return whateverAuth.currentUser ? (
    <Outlet />
  ) : (
    <Navigate
      to={"/whatever-outdoor/authentication"}
      state={{ from: location }}
      replace
    />
  );
};

export default PrivateRoutesLayout;
