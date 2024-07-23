import React from "react";
import { Carousel } from "flowbite-react";
import Image1 from "./Assets/Image1.jpg";
import Image2 from "./Assets/Image2.jpg";
import Image3 from "./Assets/Image3.jpg";
import { useTranslation } from 'react-i18next';

function HomeSlider() {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen">
      <Carousel
        className="h-full"
        autoPlay={true}
        interval={5000}
        pauseOnHover={true}
      >
        <div className="relative h-full ">
          <img
            src="https://4kwallpapers.com/images/wallpapers/london-city-cityscape-city-lights-dusk-purple-sky-horizon-1920x1200-4316.jpg"
            alt="London Cityscape"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 text-center grid place-items-center bg-black bg-opacity-50">
            <div className="text-white w-3/4 md:w-2/4">
              <h1 className="text-5xl md:text-4xl lg:text-5xl mb-4 font-bold">
                {t("Welcome to SkyLine!")}
              </h1>
              <p className="opacity-80 mb-12 text-xl">
                {t("SkyLine is your trusted partner for seamless, efficient, and affordable travel booking. Your journey starts here!")}
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full">
          <img
            src="https://wallpapers.com/images/hd/miami-4k-rqc0xkjh06kewm9b.jpg"
            alt="Miami Skyline"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 text-center grid place-items-center bg-black bg-opacity-50">
            <div className="text-white w-3/4 md:w-2/4">
              <h1 className="text-5xl md:text-4xl lg:text-5xl mb-4 font-bold">
                {t("Special Discounts Await!")}
              </h1>
              <p className="opacity-80 mb-12 text-xl">
                {t("Discover amazing deals and save big on your next adventure. Exclusive offers available for a limited time!")}
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full">
          <img
            src="https://i.pinimg.com/originals/f5/e0/d5/f5e0d56564e15791d05482fb96cf3e47.jpg"
            alt="Tropical Paradise"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 text-center grid place-items-center bg-black bg-opacity-50">
            <div className="text-white w-3/4 md:w-2/4">
              <h1 className="text-5xl md:text-4xl lg:text-5xl mb-4 font-bold">
                {t("Free Travel Coupons!")}
              </h1>
              <p className="opacity-80 mb-12 text-xl">
                {t("Take advantage of our free travel coupons and enjoy extra perks on your journey. Book now and save more!")}
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeSlider;
