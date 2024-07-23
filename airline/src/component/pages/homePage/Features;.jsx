import React from "react";
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();
  return (
    <section className="py-6 pt-40 px-12 mt-[8%] mb-[8%]">
      <div className="container px-6 mt-12 mb-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gradient-to-br from-purple-200 to-red-200 rounded-lg shadow-lg transform hover:scale-110 hover:shadow-xl transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-pink-500 rounded-full p-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2zM10 12H6m0 0l4-4m-4 4l4 4"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {t("Competitive Prices")}
            </h3>
            <p className="text-gray-600">
            {t("Enjoy the best deals and save on your flights with our unbeatable prices.")} 
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-200 to-red-200 rounded-lg shadow-lg transform hover:scale-110 hover:shadow-xl transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 rounded-full p-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 7h.01M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4c.5 0 .98-.09 1.42-.26m-1.42-3.74h.01M12 12h.01m4.42 1.26A4 4 0 1116 12h0-1a4.011 4.011 0 01-4.42 3.74M4 4l16 16"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
            {t("Classy Treatment")}
            </h3>
            <p className="text-gray-600">
            {t("Enjoy exceptional service and luxury from the start of your journey with us.")}
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-200 to-red-200 rounded-lg shadow-lg transform hover:scale-110 hover:shadow-xl transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-500 rounded-full p-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-4-4"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
            {t("Your Time is Priority")}
            </h3>
            <p className="text-gray-600">
            {t("We value your time and ensure prompt and efficient service every step of the way.")}  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
