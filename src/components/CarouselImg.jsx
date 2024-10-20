import { Container, Row } from "react-bootstrap";
import { carousel } from "../data/index";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CarouselImg = () => {
  return (
    <div className="carouselImage">
      <div className="carousel">
        <Container>
          <Row>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
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
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 1500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              loop
            >
              {carousel.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <img src={data.image} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CarouselImg;
