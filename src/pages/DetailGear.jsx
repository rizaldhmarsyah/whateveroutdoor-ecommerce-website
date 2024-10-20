import { useEffect, useState } from "react";
import { gear } from "../data/index";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
const DetailGear = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = gear.filter((product) => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: detail.id,
        quantity: quantity,
        price: detail.price,
      })
    );
  };
  return (
    <Container>
      <div className="py-32">
        <h1 className="text-center pb-6 font-bold">whatever.</h1>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
          <div className="flex justify-center items-center">
            <img src={detail.Image} alt="" className="w-[450px]" />
          </div>
          <div className="flex flex-col gap-5 sm:justify-start justify-center sm:items-start items-center">
            <h1 className="sm:text-4xl text-3xl uppercase font-bold">
              {detail.title}
            </h1>
            <p className="w-3/4">{detail.desc}</p>
            <div>
              <h5 className="text-base font-bold">
                Weight: <span className="font-normal">{detail.weight}</span>
              </h5>
              <h5 className="text-base font-bold">
                Availability:{" "}
                <span className="font-normal">{detail.available}</span>
              </h5>
              <h5 className="text-xl font-bold">{detail.price}$</h5>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-2 justify-center items-center">
                <button
                  className="bg-gray-100 md:h-full h-16 w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                  onClick={handleMinusQuantity}
                >
                  -
                </button>
                <span className="bg-baseColor h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                  {quantity}
                </span>
                <button
                  className="bg-gray-100 md:h-full h-16 w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                  onClick={handlePlusQuantity}
                >
                  +
                </button>
              </div>
              <button
                className="bg-textColor hover:bg-gray-400 text-white px-7 py-3 rounded-xl shadow-2xl p-3"
                onClick={handleAddToCart}
              >
                <i className="fa-solid fa-bag-shopping text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailGear;
