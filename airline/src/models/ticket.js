export class Ticket {
  constructor({
    flightNumber,
    ticketID,
    seatNumber,
    ticketClass,
    boardingTime,
    arrivalTime,
  }) {
    this.flightNumber = flightNumber;
    this.ticketID = ticketID;
    this.seatNumber = seatNumber;
    this.ticketClass = ticketClass;
    this.boardingTime = boardingTime;
    this.arrivalTime = arrivalTime;
  }
}
