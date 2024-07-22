import Layout from "./Layout";

import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Tickets() {
  
  // const userId = sessionStorage.getItem('userId');
  // const [TicketDetails, setTicketDetails] = useState(null);
  //     useEffect(() => {
  //       if (userId) {
  //         // Replace with your Firebase Realtime Database URL
  //         const firebaseUrl = `https://airline-tickets-46241-default-rtdb.firebaseio.com/trips/Trips/${userId}.json`;
    
  //         axios.get(firebaseUrl)
  //           .then(res => {
  //             setTicketDetails(res.data);
  //           })
  //           .catch(error => {
  //             console.error("There was an error fetching the data!", error);
  //           });
  //       }
  //     }, [userId]);
    
   
    return (  


      <>
    
      <Layout/>
         <div className="ml-32 mr-32 mt-8">
      
      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md    ">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Destination</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">From</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">DepartureTime</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">ArrivalTime</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Description</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div class="relative  ">
 
          </div>
          <div class="text-sm">
            <div class="font-medium text-gray-700">
              {/* { TicketDetails.from || ''}  */}
                   ll
            </div>
          
          </div>
        </th>
        <td class="px-6 py-4">
          <span
            class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
          >
            <span ></span>
            {/* { TicketDetails.destination || ''} */}
            fff
          </span>
        </td>
        <td class="px-6 py-4"> 
          {/* {TicketDetails.departureTime|| ''} */}
                  hhhh
        </td>

        <td class="px-6 py-4">
          <div class="flex gap-2">
          {/* { TicketDetails.arrivalTime|| ''} */}
          ggg
          </div>
        </td>
        <td class="px-6 py-4">
            <div>
            {/* { TicketDetails.description|| ''} */}
               hhh
           </div>
        </td>
      </tr>
     
      
    </tbody>
  </table>
</div>
       </div>
      </>
    );
}

export default Tickets;