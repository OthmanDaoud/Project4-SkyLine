import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MyLocation() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const navigate = useNavigate();

  const Ticket = () => {
    navigate("/Flights");
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  // Constructing the Google Maps iframe URL dynamically
  const mapUrl = `https://maps.google.com/maps?q=${position.latitude},${position.longitude}&z=14&output=embed`;

  return (
    <div className="mx-8 sm:mx-8 lg:mx-12 mb-[120px] h-auto sm:h-96 p-6 shadow-md rounded-lg overflow-hidden flex flex-col lg:flex-row bg-white">
      <div className="sm:w-full lg:w-1/2 flex flex-col items-start px-4 sm:px-8 lg:px-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-900">
          Find the Nearest Airline Companies!
        </h2>
        {position.latitude && position.longitude ? (
          <div>
            <p className="text-base sm:text-lg text-gray-800 mb-2">
              Discover the best deals on airline tickets near you. Whether
              you're planning a business trip or a vacation, find the most
              affordable options available.
            </p>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              With our user-friendly platform, booking your next flight is
              easier than ever. Explore various airlines and choose the one that
              best fits your schedule and budget.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-red-700 transition-all duration-300 "
              onClick={Ticket}
            >
              Explore Tickets
            </button>
          </div>
        ) : (
          <p className="text-base sm:text-lg text-gray-800">Loading...</p>
        )}
      </div>

      {position.latitude && position.longitude && (
        <div className="sm:w-full lg:w-1/2 mt-4 lg:mt-0 flex justify-center">
          <iframe
            width="90%"
            height="300"
            src={mapUrl}
            title="Google Maps"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default MyLocation;
