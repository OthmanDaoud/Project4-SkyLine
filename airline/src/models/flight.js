export class Flight {
  constructor({
    flightNumber,
    from,
    destination,
    dateDeparture,
    dateArrival,
    priceVip,
    price,
    image,
    description,
    airlineName,
    seatsAvailable,
    reservedTicketsVip,
    reservedTickets,
    gate,
  }) {
    this.flightNumber = flightNumber;
    this.from = from;
    this.destination = destination;
    this.dateDeparture = dateDeparture;
    this.dateArrival = dateArrival;
    this.priceVip = priceVip;
    this.description = description;
    this.airlineName = airlineName;
    this.gate = gate;
    this.price = price;
    this.image = image;
    this.seatsAvailable = seatsAvailable;
    this.reservedTicketsVip = reservedTicketsVip;
    this.reservedTicketsEco = reservedTickets;
  }
}
