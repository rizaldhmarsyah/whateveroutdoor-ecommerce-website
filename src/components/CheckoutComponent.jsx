import { useEffect, useState } from "react";
import { backpack, gear } from "../data/index";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../redux/slices/cartSlice";
import { Container } from "react-bootstrap";

const CheckoutComponent = (props) => {
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
    <Container>
      <div className="flex justify-between items-center bg-baseColor text-textColor p-1 border-b-2 border-slate-700 gap-3">
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <img src={detail.Image} alt="" className="md:w-48 sm:w-32 w-24" />
          <div className="flex justify-center items-center">
            <h3 className="md:text-2xl sm:text-xl text-sm font-semibold">
              {detail.title}
            </h3>
          </div>
        </div>

        <div className="flex justify-center items-center sm:gap-2 gap-1">
          <button
            className="bg-gray-200 text-red-600 rounded-full sm:w-12 w-10 sm:h-12 h-10"
            onClick={handleMinusQuantity}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="bg-gray-200 text-green-500 rounded-full sm:w-12 w-10 sm:h-12 h-10"
            onClick={handlePlusQuantity}
          >
            +
          </button>
          <p className="sm:text-xl text-base w-full font-bold text-right">
            {detail.price * quantity}$
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutComponent;
