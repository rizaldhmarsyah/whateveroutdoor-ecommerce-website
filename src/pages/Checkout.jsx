import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CheckoutComponent from "../components/CheckoutComponent";

const Checkout = () => {
  const carts = useSelector((store) => store.cart.items);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Update total when item qty changes
    const newTotal = carts.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );
    setTotalPrice(newTotal);
  }, [carts]);

  return (
    <div className="lg:py-32 sm:py-24 py-14">
      <h1 className="pt-10 text-textColor text-center font-bold text-4xl">
        Shopping Cart.
      </h1>
      <div className="p-5">
        {carts.map((item, key) => (
          <CheckoutComponent key={key} data={item} />
        ))}
      </div>
      <div className="flex justify-center items-center px-4">
        <div className="bg-textColor w-[500px] h-20 p-1 rounded-md flex justify-between items-center px-3">
          <div>
            <h2 className="text-baseColor sm:text-4xl text-2xl">
              Total:{" "}
              <span className="text-green-500 font-bold">${totalPrice}</span>
            </h2>
          </div>
          <div>
            <button className="text-baseColor bg-green-500 hover:bg-green-600 text-xl p-1 rounded-sm sm:w-56 w-32 sm:h-12 h-12">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
