import bgExperience from "../assets/bg-experience.jpg";
import campingImg from "../assets/experience/camping.jpg";
import hikingImg from "../assets/experience/hiking.jpg";
import canoeImg from "../assets/experience/canoe.jpg";
import { Container } from "react-bootstrap";
import CarouselImg from "../components/CarouselImg";

const ExperiencePage = () => {
  return (
    <div className="pt-[64px]">
      <div className="relative">
        <img src={bgExperience} alt="" className="" />
        <span className="sm:text-5xl text-3xl font-semibold text-baseColor absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Experience.
        </span>
      </div>
      <div className="sm:py-32 py-5">
        <h1 className="text-center font-semibold sm:pb-16 pb-4">
          Whatever Friends.
        </h1>
        <CarouselImg />
      </div>

      <div className="pb-12 text-center">
        <h1
          className="font-semibold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          What Is?
        </h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
          Pack less, explore more with Whatever.
        </p>
      </div>
      {/* boxes */}
      <Container>
        <div className="boxes pb-32">
          <div className="boxs grid sm:grid-cols-2 grid-cols-1 align-items-center sm:gap-[50px] gap-4">
            <img
              src={campingImg}
              alt=""
              className="w-[500px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            />
            <div
              className="desc text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <h3 className="font-bold">Camping.</h3>
              <p className="lg:text-base sm:text-sm">
                Ultralight camping is a type of camping that emphasizes
                minimizing the weight of equipment carried, aiming to make
                backpacking trips more comfortable and efficient. This approach
                involves using lightweight materials, packing only essentials,
                and often opting for multi-functional gear.
              </p>
            </div>
          </div>
          <div className="boxs grid sm:grid-cols-2 grid-cols-1 align-items-center sm:gap-[50px] gap-4 lg:py-0 py-24">
            <div
              className="sm:order-1 order-2 text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <h3 className="font-bold">Hiking.</h3>
              <p className="lg:text-base sm:text-sm">
                Hiking ultralight is a type of hiking where you carry as little
                gear as possible, focusing on essential items. The goal is to
                reduce weight and make your hike more comfortable and efficient.
                This often involves using lightweight, durable materials and
                packing only the necessities.
              </p>
            </div>
            <img
              src={hikingImg}
              alt=""
              className="sm:order-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            />
          </div>
          <div className="boxs grid sm:grid-cols-2 grid-cols-1 align-items-center sm:gap-[50px] gap-4">
            <img
              src={canoeImg}
              alt=""
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            />
            <div
              className="desc text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <h3 className="font-bold">Canoeing.</h3>
              <p className="lg:text-base sm:text-sm">
                Canoeing ultralight is a type of canoeing that emphasizes
                minimizing the weight of equipment and supplies carried on a
                canoe trip. This practice aims to make canoeing more efficient,
                comfortable, and environmentally friendly.
              </p>
            </div>
          </div>
        </div>
      </Container>
      {/* boxes */}
    </div>
  );
};

export default ExperiencePage;
