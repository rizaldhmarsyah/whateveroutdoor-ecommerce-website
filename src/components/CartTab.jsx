import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { toogleStatusTab } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toogleStatusTab());
  };

  const navigate = useNavigate();
  const handleClickToCheckout = () => {
    navigate("/whatever-outdoor/checkout");
  };

  return (
    <div
      className={`fixed top-0 right-0 z-10 bg-textColor bg-opacity-80 backdrop-filter backdrop-blur-sm shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${
        statusTab === false ? "translate-x-full" : ""
      }`}
    >
      <h4 className="pt-10 text-baseColor text-center">Shopping Cart</h4>
      <div className="p-5">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>

      <div className="grid grid-cols-2">
        <button
          className="bg-textColor text-baseColor"
          onClick={handleCloseTabCart}
        >
          CLOSE
        </button>
        <button
          className="bg-baseColor text-textColor"
          onClick={handleClickToCheckout}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTab;
