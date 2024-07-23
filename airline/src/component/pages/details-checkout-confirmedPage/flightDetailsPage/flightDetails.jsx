import airplane from "../assets/Airplane.png";
import dynamicAirplane from "./assets/dynamicAirplane.gif";
import economyIcon from "./assets/EconomyIcon.png";
import vipIcon from "./assets/VipIcon.png";
import { useContext } from "react";
import { Context } from "../../../sharedComponents/contextProvider";
export const FlightDetailsPage = () => {
  const [trip, setTrip] = useContext(Context).trip;
  const [progress, setProgress] = useContext(Context).progress;
  const [ticketType, setTicket] = useContext(Context).ticketType;
  const [isApplied, setApplied] = useContext(Context).isApplied;
  const [totalPrice, setTotalPrice] = useContext(Context).totalPrice;
  const [discountAmount, setDiscount] = useContext(Context).discountAmount;
  const [quantity, setQuantity] = useContext(Context).quantity;
  function handleBook(type) {
    setProgress("Checkout");
    setTicket(type);
    setApplied(false);
    setDiscount(0);
    setQuantity(1);
   
  }
  return (
    <>
      <div className="mb-20 w-[90rem] divide-y-2 flex flex-col justify-center items-center  bg-white border border-gray-200  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex  w-[80rem] divide-x-2">
          <div className="flex w-[40rem]">
            <div className="flex flex-col w-[40rem] ">
              <div className="flex items-center">
                <img
                  src={trip.airlineimage}
                  alt=""
                  className="w-[4rem] h-[4rem] rounded-full"
                />
                <h1 className="text-[1.9rem] ml-4">{trip.airlinename}</h1>
              </div>
              <span className="mt-5 text-[1.8rem] flex text-gray-500">
                {trip.destination}
                <img src={dynamicAirplane} alt="" className="w-[2.4rem] ml-4" />
              </span>
              <span className="mt-5 text-[1.2rem] text-gray-500">
                Departure Date: {trip.departureDate}
              </span>
            </div>
          </div>

          <div className="flex w-[40rem] ">
            <div className="ml-5 flex flex-col w-[40rem]">
              <div className="flex flex-col mb-3">
                <h1 className="text-[1.5rem] font-bold">About Flight</h1>
                <p className="text-[1.2rem] text-gray-500">
                  {trip.description}
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col ">
                  <h1 className="text-[1.5rem] font-bold">Arrival Time</h1>
                  <h1 className="text-[1.2rem] text-gray-500">
                    {trip.departureTime} - {trip.arrivalTime}
                  </h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[1.5rem] font-bold">Available Seats</h1>
                  <h3 className="text-[1.2rem] text-gray-500">
                    {trip.Availableseats}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex divide-x-2 w-[80rem]">
          <div className="flex flex-col w-[40rem] bg-gray-400   border border-gray-200  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-5">
            <h1 className="text-[2rem] text-white">Economy Plan</h1>
            <div className="flex items-center mt-5">
              <span className="text-[1.5rem] text-white">Price</span>
              <span className="text-[1.2rem] ml-2 text-center text-white">
                $ {trip.price}
              </span>
            </div>
            <div className="flex justify-center">
              <div
                className="cursor-pointer w-[20rem] h-[2rem] flex items-center  bg-gray-100 border border-gray-500  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-5"
                onClick={() => handleBook("Economy")}
              >
                <div
                  className="w-[1.5rem] h-[1.5rem]"
                  style={{
                    backgroundImage: `url(${economyIcon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <span
                  className="text-[1rem] ml-4
                "
                >
                  Book An Economy Ticket
                </span>
              </div>
            </div>
          </div>
          <div className="flex ml-5 flex-col w-[40rem]  bg-black border border-gray-200  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-5">
            <h1 className="text-[2rem] text-white">
              <span className="text-amber-400">VIP</span> Plan
            </h1>
            <div className="flex items-center mt-5 text-white">
              <span className="text-[1.5rem] ">Price</span>
              <span className="text-[1.2rem] ml-2 text-center">
                $ {trip.priceVIP}
              </span>
            </div>
            <div className="flex justify-center">
              <div
                className="cursor-pointer w-[20rem] h-[2rem] flex items-center bg-gradient-to-r from-red-300 to-purple-100 border border-gray-500  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-5"
                onClick={() => {
                  handleBook("Vip");
                }}
              >
                <div
                  className="w-[1.5rem] h-[1.5rem]"
                  style={{
                    backgroundImage: `url(${vipIcon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <span
                  className="text-[1rem] ml-4 
                "
                >
                  Book A VIP Ticket
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
