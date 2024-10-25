import { useNavigate } from "react-router-dom";
import userLogOut from "../auth/userLogOut";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import header from "../assets/profile/header.jpg";
import avatar from "../assets/profile/avatar.png";

const DashboardProfile = () => {
  const [user, setUser] = useState();

  //componet life cycle
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const navigate = useNavigate();
  const { error, logOut } = userLogOut();

  const handlelogOut = async () => {
    await logOut();

    if (!error) {
      navigate("/whatever-outdoor/");
    }
  };
  return (
    <div className="py-[64px]">
      <div className="relative">
        <img src={header} alt="" className="" />
        <span className="sm:text-5xl text-xl w-[500px] text-center font-semibold text-baseColor absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Find Your Adventure.
        </span>
      </div>
      <Container>
        <div className="py-16 flex justify-center items-center">
          <div className="bg-textColor w-[400px] h-60 p-3 rounded-md grid place-items-center">
            <img src={avatar} alt="" className="w-24" />
            <h1 className="text-2xl text-baseColor font-semibold text-center pb-3">
              {user?.email}
            </h1>

            <div className="flex justify-center">
              <button
                className="bg-baseColor rounded-sm p-2 font-bold hover:bg-slate-300"
                onClick={handlelogOut}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DashboardProfile;
