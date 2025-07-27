import bg from "../assets/bg-3.jpg";
import productTent1 from "../assets/product/product-tent-4.jpg";

import { product } from "../data/index";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";

import CarouselImg from "../components/CarouselImg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const HomePage = () => {
  let navigate = useNavigate();
  const handleClickBackpack = () => {
    navigate("/backpack");
  };
  const handleClickGear = () => {
    navigate("/gear");
  };
  return (
    <div className="homepage">
      <div
        className="h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute top-1/2 lg:left-[30%] md:left-[35%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 flex gap-0">
          <div className="bg-textColor bg-opacity-0 backdrop-blur-md ">
            <p className="sm:text-5xl text-2xl sm:p-3 p-2 font-bold text-baseColor w-full">
              Meet Most !
              <br />
              Comfortable
              <br />
              <span className="sm:block hidden">UL Backpack.</span>
              <span className="sm:hidden block">Ultralight Backpack.</span>
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <button
              className="bg-textColor text-baseColor h-full p-2 font-semibold border-b-[1px] sm:text-base text-sm hover:bg-gray-400"
              onClick={handleClickBackpack}
            >
              BACKPACK.
            </button>
            <button
              className="bg-textColor text-baseColor h-full p-2 font-semibold border-t-[1px] sm:text-base text-sm hover:bg-gray-400"
              onClick={handleClickGear}
            >
              GEAR.
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center font-bold py-5 text-textColor">
                Find your adventure
              </h1>
            </Col>
          </Row>
          <Row className="pt-3">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              loop
            >
              {product.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <div className="flex justify-center mx-auto">
                      <div className="text-center space-y-1" to={data.path}>
                        <Link to={data.path}>
                          <img src={data.Image} alt="" className="h-44" />
                        </Link>
                        <h1 className="font-extralight text-xl no-underline ">
                          {data.title}
                        </h1>
                        <p>{data.price}$</p>
                        <Link to={data.path}>
                          <button className="bg-textColor text-baseColor py-1 px-3 hover:bg-gray-200 hover:text-textColor hover:font-bold transition-all">
                            {data.button}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* Carousel Section */}

      {/* Not Just Outdoor But Fashion */}
      <div className="w-full sm:py-28 py-10 bg-textColor">
        <h1 className="text-center font-semibold sm:pb-16 pb-4 text-baseColor">
          Whatever Friends.
        </h1>
        <CarouselImg />
      </div>
      {/* Not Just Outdoor But Fashion */}

      {/* Product Display */}
      <div className="sm:my-32 my-14 px-4 grid grid-cols-1 md:grid-cols-2">
        <div
          className="mb-6 sm:order-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <img src={productTent1} alt="" />
        </div>
        <div
          className="flex items-center sm:order-1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          <div className="max-w-full lg:max-w-md lg:pr-10 pr-0 text-center sm:text-left">
            <h2 className="lg:text-left">Tent Modaro 2p</h2>
            <p className="md:text-base sm:text-sm text-xs mt-4 sm:text-left">
              The thru-hikers choice! <br />
              <br />
              From the Appalachian Trail to the Annapurna Circuit, the Duplex
              has become the top choice for adventurers. This tent offers a
              perfect combination of spaciousness and lightweight, making it
              ideal for your next adventure. <br />
              <br />
              Tired of heavy tents? The Modaro 2p Tent is your answer!
              Lightweight, spacious, and ready for any adventure.
            </p>

            <button
              className="bg-textColor text-baseColor py-2 px-3 hover:bg-gray-200 hover:text-textColor hover:font-bold transition-all sm:mt-0 mt-4"
              onClick={() => navigate("/gear/Tent-Wani-2p")}
            >
              Check Product
            </button>
          </div>
          <div>
            <ul className="pl-0 ml-0 lg:block hidden">
              <li className="">
                <p>
                  <h5 className="text-lg font-bold">Features</h5>
                  <p className="-mt-3">2 Person.</p>
                </p>
              </li>
              <li className="">
                <p>
                  <h5 className="text-lg font-bold">Set Up</h5>
                  <p className="-mt-3">2 Trekking Poles or 48cm Tent Poles</p>
                </p>
              </li>
              <li className="">
                <p>
                  <h5 className="text-lg font-bold">Floor Size</h5>
                  <p className="-mt-3">114cm x 2.3m.</p>
                </p>
              </li>
              <li className="">
                <p>
                  <h5 className="text-lg font-bold">Weight</h5>
                  <p className="-mt-3">17.9 oz (507 g)</p>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Product Display */}
    </div>
  );
};

export default HomePage;
