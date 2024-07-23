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

  const initialOptions = {
    "client-id": "test",
    "enable-funding": "card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        
      </PayPalScriptProvider>
    </>
  );
};
