import React, { useEffect, useState } from "react";
import instance from "../../../firebase/instance";


const AddTicket = () => {

  const[data , setData] = useState({
    tripName : "" ,
    destination : "" ,
    StartDate : "" ,
    EndDate : "" ,
    deleted : 0 ,


  })

  const [tickets, setTickets] = useState([]);



  const handleChange = e =>{
    
    // retriave the data e.target.name or .value
    const { name, value } = e.target;
       // function call back to save last update after rendering and store data 
       setData((prevData) => ({
        ...prevData ,
        [name]: value,
        //name from name in const{name , value} = e.target ;

       }));
    
    };

  // post Data to fire base
  const handlepost = e =>{
    e.preventDefault()
    const postData = {
        tripName : data.tripName ,
        destination : data.destination,
        StartDate : data.StartDate ,
        EndDate: data.EndDate ,
        deleted : 0 ,

    }

    instance.post("/Tickets.json" , postData ).then(res =>{
        console.log(res) ;
        // to handle update in websit 
            // and when we do new suubmition
            // to update my data on screen 
            // we do this 
            const updatedTickets = [
                ...tickets , 
                {postData , id : res.data.name}
            ];
            setData({
                tripName : "" ,
                destination : "" ,
                StartDate : "" ,
                deleted : 0 ,

            })
            setTickets(updatedTickets);

        });
    
  };

  // Function get data in catalog page :

useEffect(()=>{
    instance.get("Tickets.json").then(res =>{
        const fetchData = [] ;
        for(let key in res.data){
            fetchData.push({...res.data[key] , id : key})
        }

        setTickets(fetchData)
    })
},[])

  // Handle Remove
  const handleRemove = async (id) => {
    try {
      const ticketToPatch = tickets.find((ticket) => ticket.id === id);

      if (ticketToPatch) {
        await instance.patch(`/Tickets/${id}.json`, {
            deleted: 1, });
        setTickets((prevTickets) =>prevTickets.map((ticket) =>
            ticket.id === id ? { ...ticket, deleted: 1 } : ticket
     )
        );
      } else {
        console.error("Ticket not found");
      }
    } catch (error) {
      console.error(error);
    }
  };

// handle update 
const handleUpdate = async (ticketId) => {
    try {
      const ticketToUpdate = tickets.find(ticket => ticket.id === ticketId);
  
      if (ticketToUpdate) {
        const newTripName = prompt("Enter new Trip Name", ticketToUpdate.tripName);
        const newDestination = prompt("Enter new Destination", ticketToUpdate.destination);
        const newStartDate = prompt("Enter new Start Date", ticketToUpdate.StartDate);
        const newEndDate = prompt("Enter new End Date", ticketToUpdate.EndDate);
  
        // Update the state with new values
        setTickets(prevTickets =>
          prevTickets.map(ticket =>
            ticket.id === ticketId
              ? {
                  ...ticket,
                  tripName: newTripName,
                  destination: newDestination,
                  StartDate: newStartDate,
                  EndDate: newEndDate,
                }
              : ticket
          )
        );
  
        // Update the database with new values
        await instance.put(`Tickets/${ticketId}.json`, {
          tripName: newTripName,
          destination: newDestination,
          StartDate: newStartDate,
          EndDate: newEndDate,
        });
  
        console.log("Updated ticket:", newTripName, newDestination, newStartDate, newEndDate);
      } else {
        console.error("Ticket not found");
      }
    } catch (error) {
      console.error("Error updating ticket:", error);
    }
  };
  

  


  return (
    <div className="bg-lightBlue">
        <div className="w-3/4 flex justify-center mx-auto">
      <form onSubmit={handlepost} className="bg-slate-400 w-3/4 flex justify-center mx-auto">
        <div className="input">
          <label htmlFor="trip-name">Trip Name:</label>
          <input
            type="text"
            id="trip-name"
            name="tripName"
            required
            onChange={handleChange}
            className="border-2"
            value={data.tripName}
          />
        </div>

        <div className="input">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            name="destination"
            required
            onChange={handleChange}
            className="border-2"
            value={data.destination}
          />
        </div>

        <div className="input">
          <label htmlFor="StartDate">Start Date:</label>
          <input
            type="date"
            id="StartDate"
            name="StartDate"
            required
            onChange={handleChange}
            className="border-2"
            value={data.StartDate}
          />
        </div>

        <div className="input">
          <label htmlFor="EndDate">End Date:</label>
          <input
            type="date"
            id="EndDate"
            name="EndDate"
            required
            onChange={handleChange}
            className="border-2"
            value={data.EndDate}
          />
        </div>

        <input type="submit" value="Add Ticket" />
      </form>
      </div>

      <div>
        {tickets
          .filter((ticket) => ticket.deleted === 0)
          .map((ticket) => (
            <div key={ticket.id}>
              <h1>{ticket.tripName}</h1>
              <h1>{ticket.destination}</h1>
              <h1>{ticket.StartDate}</h1>
              <h1>{ticket.EndDate}</h1>
              <button
                className="bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
                onClick={() => handleRemove(ticket.id)}
              >
                Remove
              </button>
              <button
                className="bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
                onClick={() => handleUpdate(ticket.id)}
              >
                update
              </button>
            </div>
          ))}
      </div>

      <div className="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="p-4">
            <div className="flex justify-between items-center">
                <div>
                    <div className="flex items-center">
                        <div>
                            <p className="font-bold text-gray-900">1 stop</p>
                            <p className="text-gray-600">8h 41m</p>
                            <p className="text-gray-600">Alaska Airlines</p>
                            <p className="text-gray-600 text-xs">Operated by SKYWEST AIRLINES AS ALASKASKYWEST</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center">
                            <div className="text-left">
                                <p className="font-bold text-gray-900">4:03 pm</p>
                                <p className="text-gray-600">BOS</p>
                            </div>
                            <div className="flex items-center">
                                <div className="h-px w-8 bg-gray-400 mx-2"></div>
                                <p className="text-gray-600">SAN</p>
                                <div className="h-px w-8 bg-gray-400 mx-2"></div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-900">9:44 pm</p>
                                <p className="text-gray-600">FAT</p>
                            </div>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Select this Departure</button>
                    </div>
                </div>
                <div>
                    <p className="text-2xl font-bold text-gray-900">$758.20</p>
                    <p className="text-gray-600">Price per person </p>
                </div>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex items-center">
                    <div>
                        <p className="font-bold text-gray-900">1 stop</p>
                        <p className="text-gray-600">10h 0m</p>
                        <p className="text-gray-600">Alaska Airlines</p>
                    </div>
                </div>
                <div className="mt-4">
                    <div class="flex justify-between items-center">
                        <div class="text-left">
                            <p class="font-bold text-gray-900">4:44 pm</p>
                            <p class="text-gray-600">FAT</p>
                        </div>
                        <div class="flex items-center">
                            <div class="h-px w-8 bg-gray-400 mx-2"></div>
                            <p class="text-gray-600">SEA</p>
                            <div class="h-px w-8 bg-gray-400 mx-2"></div>
                        </div>
                        <div class="text-right">
                            <p class="font-bold text-gray-900">5:44 am</p>
                            <p class="text-gray-600">BOS</p>
                        </div>
                    </div>
                    <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Select this Return</button>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  );
};

export default AddTicket;

