import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../sharedComponents/contextProvider";
import { useNavigate } from "react-router";

import { MdDiscount } from "react-icons/md";

const TicketCard = () => {
  const [trips, setTrips] = useState([]);
  const [lowestPrice, setLowestPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const navigate = useNavigate();

  const [selectedTrip, setSelected] = useContext(Context).trip;
  const [progress, setProgress] = useContext(Context).progress;

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(
          "https://airline-tickets-46241-default-rtdb.firebaseio.com/trips/Trips.json"
        );
        if (response.data) {
          const tripsArray = Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }));

          const minPrice = Math.min(
            ...tripsArray.map((trip) => parseFloat(trip.Price))
          );
          setLowestPrice(minPrice);
          setTrips(tripsArray.slice(0, 3));

          // Ensure the array is not empty before calculating max price
          if (tripsArray.length > 0) {
            const prices = tripsArray.map((trip) => parseFloat(trip.Price));
            setMaxPrice(Math.max(...prices));
          }
        }
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, []);

  const handleTripClick = (trip) => {
    setSelected(trip);
    setProgress("Details");
    navigate("/PaymentPage");
    sessionStorage.setItem("trip", JSON.stringify(trip));
    console.log(trip);
  };

  const calculateDiscountedPrice = (price) => {
    const discountRate = 0.2; // 20% discount
    return (price * (1 - discountRate)).toFixed(2);
  };

  return (
    <>
      <h2 className="flex justify-evenly text-3xl font-bold  mb-4 mt-[200px]">
        Discounted Ticket Specials
      </h2>

      <h4 className="text-lg text-center mb-0">
        Explore our current promotions on the most economical tickets available.
        Save more with our limited-time discounts!
      </h4>

      <div className="h-full pt-10 relative mb-28">
        {/* Line at the left */}

        <div className="flex flex-wrap gap-4 justify-evenly">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="mb-4 w-96 transform transition-transform duration-300 hover:scale-110"
            >
              <div className="bg-gradient-to-br rounded overflow-hidden shadow-lg border border-gray-300 mt-0">
                {/* Airline Image and Details */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <img
                      src={trip.airlineimage}
                      alt={trip.airlinename}
                      className="w-16 h-16 mr-4 rounded-full bg-red-300"
                    />
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        {trip.airlinename}
                      </p>
                      <p className="text-sm text-gray-600">
                        Flight: {trip.flightNum}
                      </p>
                      <div>
                        <p className="text-sm text-gray-600">
                          Available Seats: {trip.Availableseats}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flight Details */}
                <div className="p-4 bg-gradient-to-br from-purple-200 to-red-200">
                  <p className="text-lg font-semibold text-gray-800">
                    {trip.from} to {trip.destination}
                  </p>
                  <p className="text-sm text-gray-600">
                    Departure: {trip.departureTime}
                  </p>
                  <p className="text-sm text-gray-600">
                    Arrival: {trip.arrivalTime}
                  </p>
                  <p className="text-sm text-gray-600">
                    Description: {trip.description}
                  </p>
                </div>

                {/* Pricing and Booking */}
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="text-lg font-semibold text-red-600">
                      <del>${trip.price}</del>
                    </p>
                    <p className="text-lg font-semibold text-green-600">
                      ${calculateDiscountedPrice(trip.price)}
                    </p>
                    <p className="text-sm text-gray-600">Price per adult</p>
                  </div>
                  <button
                    className="px-6 py-2 bg-blue-900 text-white font-semibold rounded hover:bg-yellow-600"
                    onClick={() => handleTripClick(trip)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TicketCard;
