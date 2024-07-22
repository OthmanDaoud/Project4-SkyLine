import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../../main.jsx";

import { EffectCoverflow, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay]);

export default function App() {
  const handleSlideChange = (swiper) => {
    console.log('Current slide index:', swiper.activeIndex);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-purple-200 to-red-200  mt-[0%] mb-[8%] p-[90px]">
      <div >
        <div className="mt-5 sm:mt-40 text-center mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold p-10">
            Explore the Cheapiest flights in SkyLine
          </h1>
        </div>
        </div>
        <div className="main">
          <Swiper
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 10,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide
              style={{
                height: "300px",
                width: "600px",
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/London_Eye_-_tunliweb.no.JPG/1200px-London_Eye_-_tunliweb.no.JPG")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  color: "white",
                  textAlign: "center",
                  background: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "100%",
                }}
              >
                <h6
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    margin: "0",
                  }}
                >
                  United Kingdom
                </h6>
                <p
                  style={{
                    fontSize: "1.25rem",
                    color: "white",
                    marginTop: "10px",
                    margin: "0",
                    fontWeight: "bold",
                  }}
                >
                  Round-trip from <span style={{ fontSize: "1.5rem" , color: "green" }}>US$123</span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                height: "300px",
                width: "600px",
                backgroundImage: `url("https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2023/06/16120757/COUV-ARTICLES-1920x1080-2023-06-08T171325.416-1024x576.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  color: "white",
                  textAlign: "center",
                  background: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "100%",
                }}
              >
                <h6
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    margin: "0",
                  }}
                >
                  France
                </h6>
                <p
                  style={{
                    fontSize: "1.25rem",
                    color: "white",
                    marginTop: "10px",
                    margin: "0",
                    fontWeight: "bold",
                  }}
                >
                  Round-trip from <span style={{ fontSize: "1.5rem", color: "#ffcc00" }}>US$128</span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                height: "300px",
                width: "600px",
                backgroundImage: `url("https://platinumlist.net/guide/wp-content/uploads/2022/12/shutterstock_1196821240-2.webp")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  color: "white",
                  textAlign: "center",
                  background: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "100%",
                }}
              >
                <h6
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    margin: "0",
                  }}
                >
                  United Arab Emirates
                </h6>
                <p
                  style={{
                    fontSize: "1.25rem",
                    color: "white",
                    marginTop: "10px",
                    margin: "0",
                    fontWeight: "bold",
                  }}
                >
                  Round-trip from <span style={{ fontSize: "1.5rem" , color: "#ffcc00"}}>US$137</span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
