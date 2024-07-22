import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../../sharedComponents/contextProvider";
import { reserveTicket } from "./checkoutPageController/reserveTicket";
import { Ticket } from "../../../../models/ticket";
export const PaypalButton = () => {
  const [ticket, setTicket] = useContext(Context).ticket;
  const [trip, setTrip] = useContext(Context).trip;
  const [user, setUser] = useContext(Context).user;
  const [ticketType, setTicketType] = useContext(Context).ticketType;
  const [totalPrice, setTotalPrice] = useContext(Context).totalPrice;
  console.log(totalPrice);
  const initialOptions = {
    "client-id": "test",
    "enable-funding": "card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: { currency_code: "USD", value: totalPrice },
                },
              ],
            });
          }}
          onApprove={() => {
            const ticket = new Ticket({
              flightNumber: trip.flightNum,
              arrivalTime: trip.arrivalTime,
              boardingTime: trip.departureTime,
              seatNumber: "A9",
              ticketClass: ticketType,
            });
            reserveTicket(user, trip, ticket);
          }}
        />
      </PayPalScriptProvider>
    </>
  );
};
