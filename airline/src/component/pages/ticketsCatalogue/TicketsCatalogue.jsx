import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Context } from "../../sharedComponents/contextProvider";
import { useNavigate } from "react-router";

const TicketsCatalogue = () => {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState([]);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;
  const maxPages = 5;

  const [trip, setTrip] = useContext(Context).trip;
  const [progress, setProgress] = useContext(Context).progress;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://airline-tickets-46241-default-rtdb.firebaseio.com/trips/Trips.json"
      )
      .then((response) => {
        const data = response.data;
        setTickets(data);
        setSearch(data);
        if (data.length > 0) {
          const prices = data.map((ticket) => ticket.price);
          setMaxPrice(Math.max(...prices));
          setPrice(Math.max(...prices));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const applyFilters = () => {
    let Tickets = tickets;

    if (destination) {
      Tickets = Tickets.filter((ticket) =>
        ticket.destination.toLowerCase().includes(destination.toLowerCase())
      );
    }

    if (date) {
      Tickets = Tickets.filter((ticket) =>
        ticket.arrivalDate.toString().includes(date.toString())
      );
    }

    if (price > 0) {
      Tickets = Tickets.filter((ticket) => ticket.price <= price);
    }

    setSearch(Tickets);
    setCurrentPage(1);
  };

  useEffect(() => {
    applyFilters();
  }, [destination, date, price]);

  // Pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const currentCards = search.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.min(
    maxPages,
    Math.ceil(search.length / cardsPerPage)
  );

  // sessionStorage
  const saveData = (ticket) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      setTrip(ticket);
      setProgress("Details");
      navigate("/PaymentPage");
      sessionStorage.setItem("trip", JSON.stringify(trip));
      console.log(trip);
    } else {
      navigate("/Login");
    }
  };

  return (
    <>
      <div className="search-block bg-gradient-to-r from-purple-300 to-pink-200 rounded-lg overflow-hidden shadow-md p-6 mt-16 mx-10 sm:mx-8 lg:mx-24 border-black">
        <form
          id="search-form"
          className="flex flex-col lg:flex-row items-center justify-center pl-4 sm:pl-8 lg:pl-14"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Price */}
          <div className="price mb-5 lg:mr-10 lg:mb-0">
            <h3 className="mb-3">Max Price: {price}$</h3>
            <input
              className="w-48 sm:w-36"
              type="range"
              min="0"
              max={maxPrice}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          {/* Destination */}
          <div className="mb-4 lg:mb-0 flex flex-col sm:flex-row">
            <div className="mb-4 sm:mb-0 sm:mr-4">
              <label
                htmlFor="destination"
                className="block text-zinc-500 mb-2 pl-1"
              >
                Search your destination:
              </label>
              <div className="flex items-center">
                <FaLocationDot className="text-blue-500 mr-1 h-6 w-6" />
                <input
                  id="destination"
                  type="input"
                  placeholder="going to..."
                  className="w-80 sm:w-72 px-4 py-2 placeholder-gray-400 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-red-500 focus:border-red-500"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-zinc-500 mb-2">
                Select your date:
              </label>
              <div className="flex items-center">
                <input
                  id="date"
                  type="date"
                  className="w-64 sm:w-52 px-3 py-2 placeholder-gray-400 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-pink-500 focus:border-pink-500"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* CARDS */}
      <div className="flex flex-col items-center mx-4 sm:mx-8 lg:mx-20 my-10">
        {currentCards.map((ticket, index) => (
          <div key={index} className="w-full max-w-4xl mb-10">
            <div className="flex items-center justify-center h-full">
              <div className="w-full bg-gradient-to-br from-purple-200 to-pink-200 rounded overflow-hidden shadow-lg border border-gray-300">
                {/* Airline Image and Details */}
                <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-4">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <img
                      src={ticket.airlineimage}
                      alt={ticket.airlinename}
                      className="w-16 h-16 mr-4 rounded-full"
                    />
                    <div>
                      <p className="text-lg font-bold text-slate-950">
                        {ticket.from} to {ticket.destination}
                      </p>
                      <p className="text-sm text-gray-600">
                        Flight: {ticket.flightNum}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Available Seats: {ticket.Availableseats}
                    </p>
                  </div>
                </div>

                {/* Flight Details */}
                <div className="p-4">
                  <p className="text-lg font-semibold text-gray-800">
                    {ticket.airlinename}
                  </p>
                  <p className="text-sm text-gray-600">
                    Departure: {ticket.departureDate}
                  </p>
                  <p className="text-sm text-gray-600">
                    Arrival: {ticket.arrivalDate}
                  </p>
                  <p className="text-sm text-gray-600">
                    Description: {ticket.description}
                  </p>
                </div>

                {/* Pricing and Booking */}
                <div className="bg-gray-100 flex items-center justify-between p-4">
                  <div>
                    <p className="text-lg font-bold text-green-500">
                      ${ticket.price}
                    </p>
                    <p className="text-sm text-gray-600">Price per adult</p>
                  </div>
                  <button
                    className="px-6 py-2 bg-blue-900 text-white font-semibold rounded hover:bg-yellow-600"
                    type="click"
                    onClick={() => saveData(ticket)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-900 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default TicketsCatalogue;
