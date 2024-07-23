import "./styling/general.css";
import backgroundImage from "./assets/airplaneImage.jpg";
import { FlightDetailsPage } from "./flightDetailsPage/flightDetails";
import airplane from "./assets/Airplane.png";
import { useContext } from "react";
import { Context } from "../../sharedComponents/contextProvider";
import { CheckoutPage } from "./checkoutPage/checkoutPage";
import { ConfirmedPage } from "./confirmedPage/confirmedPage";

export const PaymentContainer = () => {
  const [progress, setProgress] = useContext(Context).progress;
  const style = {
    backgroundImage: `linear-gradient(to top, pink, transparent), url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "30rem",
  };

  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <div
        className="w-[120rem] mb-16 flex justify-center items-center"
        style={style}
      >
        <p className="text-white text-[1.5rem]">
          With you all the way - through your journey
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[120rem] ">
        <div className="flex-col  items-center w-[90rem] mb-8 bg-white">
          <div className="w-[90rem] mb-6">
            <img
              src={airplane}
              alt=""
              className="w-10 "
              style={{
                transform: `translateX(${
                  progress == "Details"
                    ? "0%"
                    : progress == "Checkout"
                    ? "45rem"
                    : "90rem"
                })`,
                transition: "all 3s",
              }}
            />
          </div>
          <div className="flex justify-between items-center w-[90rem] font-extrabold ">
            <h1
              className="text-[1.5rem] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] "
              style={{
                color: progress == "Details" ? "red" : "black",
                transition: "all 3s",
              }}
            >
              Details-Section
            </h1>
            <h1
              className="text-[1.5rem]  "
              style={{
                color: progress == "Checkout" ? "#db7b2b" : "black",
                transition: "all 3s",
              }}
            >
              Checkout
            </h1>
            <h1
              className="text-[1.5rem]  "
              style={{
                color: progress == "Confirmed" ? "green" : "black",
                transition: "all 3s",
              }}
            >
              Confirmed
            </h1>
          </div>
        </div>
        {progress == "Details" ? (
          <FlightDetailsPage />
        ) : progress == "Checkout" ? (
          <CheckoutPage />
        ) : (
          <ConfirmedPage />
        )}
      </div>
    </div>
  );
};
