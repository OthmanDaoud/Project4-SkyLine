import vipIcon from "../assets/VipIcon.png";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../../../sharedComponents/contextProvider";
export const CardTicket = () => {
  const [quantity, setQuantity] = useContext(Context).quantity;
  const [trip, setTrip] = useContext(Context).trip;
  const [ticketType, setTicket] = useContext(Context).ticketType;
  const headerColor = ticketType == "Vip" ? "text-amber-400" : "text-black";

  return (
    <>
      <div className="divide-x-2 flex text-white  ml-5 w-[55rem] bg-black border border-gray-200  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-[50rem] flex flex-col">
          <h1 className="text-[2rem] ">
            <span className={headerColor}>
              {ticketType == "Vip" ? "VIP" : "Economy"}
            </span>{" "}
            Ticket
          </h1>
          <div className="flex  items-center mt-3">
            <img
              src={trip.airlineimage}
              alt=""
              className="w-[4rem] h-[4rem] ml-4 rounded-full"
            />
            <h1 className="text-[1.5rem] ml-3 ">{trip.airlinename}</h1>
          </div>
          <h1 className="text-[1.3rem] font-bold mt-4 ">
            Journey:
            <span className="text-[1.2rem] font-normal ml-2">
              {trip.from} - {trip.destination}
            </span>
          </h1>
          <h1 className="text-[1.3rem] font-bold mt-4 ">
            Trip Duration:
            <span className="text-[1.2rem] font-normal ml-2 ">
              {trip.departureTime} - {trip.arrivalTime}
            </span>
          </h1>

          <h1 className="text-[1.3rem] font-bold mt-4 ">
            Gate:
            <span className="text-[1.2rem] font-normal ml-2">{trip.gate}</span>
          </h1>
        </div>
        <div className=" w-[15rem] flex flex-col justify-center ">
          <div className="flex justify-center items-center">
            <div className="ml-5 w-[6rem] h-[2rem] flex justify-between items-center divide-x-2 border-gray-300 border-solid border-2 rounded-md">
              <div
                onClick={() => {
                  if (quantity != 1) setQuantity(quantity - 1);
                }}
                className="text-[1rem] w-[4rem]  flex justify-center items-center cursor-pointer"
              >
                -
              </div>
              <div className="text-[1rem] w-[4rem]text-white flex justify-center items-center">
                {quantity}
              </div>
              <div
                onClick={() => setQuantity(quantity + 1)}
                className="text-[1rem] w-[4rem]  flex justify-center items-center cursor-pointer"
              >
                +
              </div>
            </div>
            <h1 className="text-[1rem] ml-3">Quantity</h1>
          </div>
        </div>
      </div>
    </>
  );
};
