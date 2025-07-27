import { useEffect, useState } from "react";
import flag from "../assets/indonesia.png";
import { useDispatch, useSelector } from "react-redux";
import { toogleStatusTab } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom"; // Pastikan Link sudah diimpor

const NavBarComponent = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const [isClick, setisClick] = useState(false);

  const toogleNavbar = () => {
    setisClick(!isClick);
  };

  const handleOpenTabCart = () => {
    dispatch(toogleStatusTab());
  };

  const handleOpenTabCart2 = () => {
    dispatch(toogleStatusTab());
  };

  return (
    <div className="bg-black fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Ganti <a> dengan <Link> untuk logo/nama situs */}
              <Link
                to="/"
                className="text-white no-underline text-3xl font-bold"
              >
                whatever.
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {/* Ganti semua <a> dengan <Link> di navigasi desktop */}
              <Link
                to="/"
                className="text-baseColor hover:text-textColor hover:bg-baseColor rounded-lg no-underline p-2 transition-all"
              >
                HOME
              </Link>
              <Link
                to="/backpack"
                className="text-baseColor hover:text-textColor hover:bg-baseColor rounded-lg no-underline p-2 transition-all"
              >
                BACKPACK
              </Link>
              <Link
                to="/gear"
                className="text-baseColor hover:text-textColor hover:bg-baseColor rounded-lg no-underline p-2 transition-all"
              >
                GEAR
              </Link>
              <Link
                to="/experience"
                className="text-baseColor hover:text-textColor hover:bg-baseColor rounded-lg no-underline p-2 transition-all"
              >
                EXPERIENCE
              </Link>

              {/* Shopping Cart */}
              <div onClick={handleOpenTabCart} className="cursor-pointer">
                <i className="fa-solid fa-bag-shopping text-2xl text-baseColor hover:text-textColor hover:bg-baseColor rounded-lg no-underline p-2 transition-all">
                  <span className="absolute top-2/3 translate-y-[-4px] bg-red-500 text-baseColor text-xs w-4 h-4 rounded-full flex justify-center items-center">
                    {totalQuantity}
                  </span>
                </i>
              </div>
              {/* Shopping Cart */}

              {/* Profile */}
              <Link to={"/profile"} className="cursor-pointer">
                <i className="fa-regular fa-user text-2xl text-baseColor hover:text-textColor hover:bg-baseColor rounded-lg no-underline p-2 transition-all"></i>
              </Link>
              {/* Profile */}

              <img src={flag} alt="" className="w-6 cursor-pointer" />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            {/* Shopping Cart (Mobile) */}
            <div className="block sm:hidden" onClick={handleOpenTabCart2}>
              <i className="fa-solid fa-bag-shopping text-2xl text-baseColor hover:text-textColor hover:bg-baseColor rounded-lg no-underline p-2 transition-all">
                <span className="fixed top-10 translate-y-[-4px] bg-red-500 text-baseColor text-xs w-4 h-4 rounded-full flex justify-center items-center">
                  {totalQuantity}
                </span>
              </i>
            </div>

            {/* Profile (Mobile) */}
            <Link to={"/profile"} className="cursor-pointer">
              <i className="fa-regular fa-user text-2xl text-baseColor hover:text-textColor hover:bg-baseColor rounded-lg no-underline p-2 transition-all"></i>
            </Link>
            {/* Profile */}

            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-yellow-50 hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toogleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Ganti semua <a> dengan <Link> di navigasi mobile */}
            <Link
              to="/"
              className="text-yellow-50 block hover:text-black hover:bg-white rounded-lg no-underline p-2"
            >
              HOME
            </Link>
            <Link
              to="/backpack"
              className="text-yellow-50 block hover:text-black hover:bg-white rounded-lg no-underline p-2"
            >
              BACKPACK
            </Link>
            <Link
              to="/gear"
              className="text-yellow-50 block hover:text-black hover:bg-white rounded-lg no-underline p-2"
            >
              GEAR
            </Link>
            <Link
              to="/experience"
              className="text-yellow-50 block hover:text-black hover:bg-white rounded-lg no-underline p-2"
            >
              EXPERIENCE
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBarComponent;
