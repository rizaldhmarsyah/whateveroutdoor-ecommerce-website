import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const GearCart = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id, Image, title, price, slug } = props.data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
        price: price,
      })
    );
  };
  return (
    <div className="bg-baseColor p-4 rounded-lg shadow-sm">
      <Link to={slug}>
        <img src={Image} alt="" className="w-full object-cover object-top" />
      </Link>
      <h3 className="text-xl py-3 text-center font-extralight">{title}</h3>
      <p className="text-base font-medium text-center">{price}$</p>
      <div className="flex justify-between items-center">
        <Link to={slug}>
          <button className="bg-textColor text-baseColor p-2 rounded-md text-sm hover:bg-gray-400">
            Detail Product <i className="fa-solid fa-question text-base"></i>
          </button>
        </Link>
        <button
          className="bg-textColor text-baseColor p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 justify-center items-center"
          onClick={handleAddToCart}
        >
          Add <i className="fa-solid fa-bag-shopping text-base"></i>
        </button>
      </div>
    </div>
  );
};

export default GearCart;
