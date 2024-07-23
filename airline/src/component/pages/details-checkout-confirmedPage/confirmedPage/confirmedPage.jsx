import "./styling/checkmark.css";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

export const ConfirmedPage = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="mb-20 w-[90rem] flex flex-col bg-white border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 justify-center items-center h-[40rem]">
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
        <div className="w-[50rem] flex flex-col justify-center items-center">
          <p className="text-[1.5rem] font-semibold mt-8 text-center">
            Congratulations! Your payment has been confirmed and completed. You
            can download your ticket folder by pressing the button below.
          </p>
          
        </div>
      </div>
    </div>
  );
};
