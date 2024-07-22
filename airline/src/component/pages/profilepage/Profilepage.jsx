import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from "./Layout";

function Profile() {
  const userId = sessionStorage.getItem('userId');
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    if (userId) {
      // Replace with your Firebase Realtime Database URL
      const firebaseUrl = `https://airline-tickets-46241-default-rtdb.firebaseio.com/Users/${userId}.json`;

      axios.get(firebaseUrl)
        .then(res => {
          setUserDetails(res.data);
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        });
    }
  }, [userId]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const update = async () => {
    if (!userId) return;
    const url = `https://airline-tickets-46241-default-rtdb.firebaseio.com/Users/${userId}.json`;

    try {
      const response = await axios.patch(url, userDetails);
      console.log('User updated successfully:', response.data);
      alert("User updated successfully");
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <>
      <Layout />
      <div className="flex items-center justify-center ml-32 mr-32 mt-8 ">
        <div className="container max-w-screen-lg mx-auto">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={userDetails.fullName || ''}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={userDetails.email || ''}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phone_number"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={userDetails.phoneNumber || ''}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <center>
                        <button
                          onClick={update}
                          className=" bg-blue-900 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mr-96"
                        >
                          Save
                        </button>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
