import { useEffect, useState } from "react";
import { backpack, gear } from "../data/index";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../redux/slices/cartSlice";

const CartItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { productId, quantity, price } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const combinedData = [...backpack, ...gear]; // Combine arrays
    const detail = combinedData.filter((item) => item.id === productId)[0]; // Find matching item

    if (detail) {
      // Check if a match is found
      setDetail(detail);
    } else {
      // Handle case where no matching product is found (optional)
    }
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
        price: price,
      })
    );
  };
  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
        price: price,
      })
    );
  };

  return (
    <div className="flex justify-between items-center bg-baseColor text-textColor p-1 border-b-2 border-slate-700 gap-3 rounded-md">
      <img src={detail.Image} alt="" className="w-14" />
      <h5 className="text-sm text-center">{detail.title}</h5>
      <div className="grid grid-cols-1 p-2">
        <p className="text-sm w-full text-center font-bold">
          {detail.price * quantity}$
        </p>
        <div className="w-16 flex justify-between">
          <button
            className="bg-gray-200 text-red-600 rounded-full w-6 h-6"
            onClick={handleMinusQuantity}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="bg-gray-200 text-green-500 rounded-full w-6 h-6"
            onClick={handlePlusQuantity}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
