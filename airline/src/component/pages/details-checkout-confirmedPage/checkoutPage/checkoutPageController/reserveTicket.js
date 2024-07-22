import axios from "axios";
import { firebaseURL } from "../../../../firebase/firebase-config";

export const reserveTicket = (user, flight, ticket) => {
  return new Response(async (resolve, reject) => {
    if (user.tickets == null) user.tickets = [];
    user.ticket.push(ticket);

    sessionStorage.setItem("user", JSON.stringify(user));

    if (ticket.ticketClass == "Vip") {
      if (flight.reservedTicketsVip == "") flight.reservedTicketsVip = [];
      flight.reservedTicketsVip.push(ticket);
      sessionStorage.setItem("user", JSON.stringify(flight));
    } else {
      if (flight.reservedTickets == "") flight.reservedTickets = [];
      flight.reservedTickets.push(ticket);
      sessionStorage.setItem("user", JSON.stringify(flight));
    }

    flight.availableSeats--;

    if (flight.availableSeats == 0) {
      flight.isBookedUp = true;
    }

    await axios
      .put(firebaseURL + "/trips/Trips/" + flight.id, flight)
      .then(async () => {
        let response = await axios.put(
          firebaseURL + "/trips/" + "Users/" + user.userID,
          user
        );
        resolve(response);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
