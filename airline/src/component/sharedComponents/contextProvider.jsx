import React from "react";
import { useState } from "react";
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [currentUser, setUser] = useState("");
  const [trip, setTrip] = useState("");
  const [progress, setProgress] = useState("Details");
  const [quantity, setQuantity] = useState(1);
  const [ticketType, setTicketType] = useState("");
  const [ticket, setTicket] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [isApplied, setApplied] = useState(false);
  const [discountAmount, setDiscount] = useState(0);

  return (
    <Context.Provider
      value={{
        user: [currentUser, setUser],
        trip: [trip, setTrip],
        progress: [progress, setProgress],
        quantity: [quantity, setQuantity],
        ticketType: [ticketType, setTicketType],
        ticket: [ticket, setTicket],
        totalPrice: [totalPrice, setTotalPrice],
        isApplied: [isApplied, setApplied],
        discountAmount:[discountAmount,setDiscount]
      }}
    >
      {children}
    </Context.Provider>
  );
};
