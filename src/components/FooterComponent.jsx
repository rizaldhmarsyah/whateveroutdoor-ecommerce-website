import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import footer from "../assets/footer-fix.jpg";

const FooterComponent = () => {
  return (
    <div
      className="footer py-6 h-full w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <Container className="">
        <Row className="">
          <Col className="">
            <h3 className="font-bold text-baseColor sm:text-4xl text-2xl">
              whatever.
            </h3>
            <p className="sm:text-base text-xs text-baseColor">
              Comfortable. Durability. Strong. Ultralight.
            </p>
            <div className="contact sm:mt-4 mt-1">
              <Link className="no-underline">
                <p className=" text-baseColor hover:text-slate-500 sm:text-base text-xs">
                  <i className="fa-brands fa-whatsapp text-baseColor lg:text-xl text-base"></i>{" "}
                  +62-8735555
                </p>
              </Link>
            </div>
            <div className="email">
              <Link className="no-underline">
                <p className="text-baseColor hover:text-slate-500 sm:text-base text-xs">
                  <i className="fa-regular fa-envelope text-baseColor sm:text-xl text-base"></i>{" "}
                  outdoor@gmail.com
                </p>
              </Link>
            </div>
            <div className="address">
              <Link className="no-underline flex sm:gap-2 gap-1">
                <p className="text-baseColor hover:text-slate-500 sm:text-base text-xs">
                  <i className="fa-solid fa-map-pin text-baseColor sm:text-xl text-base"></i>{" "}
                  Klaten, Jawa Tengah, IND.
                </p>
              </Link>
            </div>
          </Col>
          {/* <Col className="flex align-items-center flex-column gap-2">
            <h5 className="text-baseColor font-bold">Menu</h5>
            <Link
              to="/"
              className="no-underline text-baseColor hover:text-slate-500"
            >
              Home
            </Link>
            <Link
              to="/backpack"
              className="no-underline text-baseColor hover:text-slate-500"
            >
              Backpack
            </Link>
            <Link
              to="/gear"
              className="no-underline text-baseColor hover:text-slate-500"
            >
              Gear
            </Link>
            <Link
              to="/experience"
              className="no-underline text-baseColor hover:text-slate-500"
            >
              Experience
            </Link>
            <Link
              to="/syarat"
              className="no-underline text-baseColor hover:text-slate-500"
            >
              S&K
            </Link>
          </Col> */}
          <Col className="flex flex-column text-center items-end  text-baseColor">
            <h5 className="sm:pb-2 pb-0 sm:font-bold font-medium">
              Social Media
            </h5>

            <p className="cursor-pointer hover:text-slate-500 sm:text-base text-xs">
              <i className="fa-brands fa-facebook"></i> Outdoor Indonesia
            </p>
            <p className="cursor-pointer hover:text-slate-500 sm:text-base text-xs">
              <i className="fa-brands fa-twitter"></i> OutdoorIndonesia
            </p>
            <p className="cursor-pointer hover:text-slate-500 sm:text-base text-xs">
              <i className="fa-brands fa-instagram"></i> @outdoor.id
            </p>
            <p className="cursor-pointer hover:text-slate-500 sm:text-base text-xs">
              <i className="fa-brands fa-youtube"></i> Outdoor Indonesia
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center text-baseColor sm:text-base text-xs">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Rizal Dhmarsyah</span> , All Right
              Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
