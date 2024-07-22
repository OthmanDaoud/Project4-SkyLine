import { CardTicket } from "./sharedComponents/ticketCard";
import { PaypalButton } from "./paypalbutton";
import { useContext, useEffect } from "react";
import { Context } from "../../../sharedComponents/contextProvider";
import { useState } from "react";
export const CheckoutPage = () => {
  const [quantity, setQuantity] = useContext(Context).quantity;
  const [trip, setTrip] = useContext(Context).trip;
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const [isApplied, setApplied] = useContext(Context).isApplied;
  const [ticketType, setTicket] = useContext(Context).ticketType;
  const [totalPrice, setTotalPrice] = useContext(Context).totalPrice;
  const [discountAmount, setDiscount] = useContext(Context).discountAmount;
  const price = ticketType == "Vip" ? trip?.priceVIP : trip.price;

  const subtotal = price * quantity;
  const discount = user.copouns[0].isUsed
    ? 0
    : user.copouns[0].discountPercentage;
  setDiscount((subtotal * discount) / 100);
  const total = subtotal - discountAmount;

  useEffect(() => {
    setTotalPrice(total);
  });
  return (
    <>
      <div className="w-screen flex flex-col justif-center items-center">
        <div className="mb-20 w-[90rem] flex    bg-white border border-gray-200  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className=" flex flex-col">
            <CardTicket />
          </div>
          <div className="ml-6 w-[30rem]  flex flex-col divide-y-2 divide-white   bg-gradient-to-r from-red-300 to-purple-100 border border-gray-200  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
            <div className="flex flex-col text-white">
              <h1 className="text-[1.4rem] font-bold mb-3 ">Order Summary</h1>
              <div className="flex flex-col ml-4">
                <span className="text-[1.2rem] mb-3">
                  x {quantity} tickets to {trip.destination}
                </span>
                <span className="text-[1.2rem] mb-3">subtotal: {subtotal}</span>
              </div>
            </div>
            {discount == 0 ? (
              <></>
            ) : (
              <div className=" text-white">
                <div className="flex flex-col mt-4">
                  <h1 className="text-[1.4rem] font-bold ">Copouns</h1>
                  <div className="border-white border-[2px] border-solid flex rounded-md mt-3 justify-between items-center mb-4">
                    <div className="flex flex-col">
                      <span className="text-[1.2rem] ml-4 font-bold">
                        {user.copouns[0].description}
                      </span>
                      <span className="text-[1.2rem] ml-4">
                        Discount: {discount}%
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        console.log(isApplied);
                        if (isApplied) {
                          setApplied(false);
                        } else {
                          setApplied(true);
                        }
                      }}
                      className="transition-colors duration-500  hover:text-red-400 flex justify-center items-center w-[6rem] h-[4rem] cursor-pointer"
                    >
                      <span className="text-[1.5rem] ">
                        {!isApplied ? "Apply" : "Remove"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="text-white mt-3">
              <div className="flex mt-3">
                <span className="text-[1.4rem] ">
                  Discount:{" "}
                  <span className="text-[1.2rem]">
                    - $ {isApplied ? discountAmount : 0}
                  </span>
                </span>
              </div>
            </div>

            <div className="text-white mt-3">
              <div className="flex mt-3">
                <span className="text-[1.6rem] ">
                  Total:{" "}
                  <span className="text-[1.4rem]">
                    $ {isApplied ? total : subtotal}
                  </span>
                </span>
              </div>
            </div>

            <div className="text-white mt-3">
              <div className="flex flex-col mt-3">
                <span className="text-[1.6rem]">Payment</span>
                <div className="mt-6">
                  <PaypalButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
