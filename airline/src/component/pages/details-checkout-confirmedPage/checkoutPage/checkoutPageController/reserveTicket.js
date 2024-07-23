import axios from "axios";
import { firebaseURL } from "../../../../firebase/firebase-config";

export const reserveTicket = async (user, flight, ticket) => {
  if (!user.tickets) {
    user.tickets = [];
  }
  user.tickets = user.tickets.concat(ticket);

  sessionStorage.setItem("user", JSON.stringify(user));

  if (ticket.ticketClass == "Vip") {
    if (!flight.reservedTicketsVip) flight.reservedTicketsVip = [];
    flight.reservedTicketsVip = flight.reservedTicketsVip.concat(ticket);
    sessionStorage.setItem("flight", JSON.stringify(flight));
  } else {
    if (!flight.reservedTickets) flight.reservedTickets = [];
    flight.reservedTickets = flight.reservedTickets.concat(ticket);
    sessionStorage.setItem("flight", JSON.stringify(flight));
  }
  console.log(ticket.length);
  console.log(flight.reservedTickets);
  flight.Availableseats -= ticket.length;
  console.log(flight.Availableseats);

  if (flight.Availableseats == 0) {
    flight.isBookedUp = true;
  }

  await axios
    .put(firebaseURL + "/trips/Trips/" + flight.id + ".json", flight)
    .then(async () => {
      await axios.put(firebaseURL + "/Users/" + user.userID + ".json", user);
    })
    .catch((e) => {
      console.log(e);
    });
};
