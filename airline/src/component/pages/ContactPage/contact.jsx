import React, { useState } from 'react';
import axios from 'axios';
import team01 from './images/Team-01.png';
import team02 from './images/team-02.jpg';
import team03 from './images/team-03.png';
import team04 from './images/team-04.png';
import team05 from './images/team-05.png';





const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const firebaseEndpoint = 'https://airline-tickets-46241-default-rtdb.firebaseio.com/trips/messages.json';
      const newContact = {
        name: name,
        email: email,
        message: message
      };
      const response = await axios.post(firebaseEndpoint, newContact);

      if (response.status === 200) {
        setSubmitSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmitError('Failed to submit. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting contact message:', error);
      setSubmitError('Failed to submit. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const teamMembers = [
    {
      imgUrl: team03,
      name: 'Othman Daoud',
      position: 'Product Owner'
    },
    {
      imgUrl: team01,
      name: 'Tasnim Zaid',
      position: 'Scrum Master'
    },
    {
      imgUrl: team04,
      name: 'Basil Abushihab',
      position: 'Developer'
    },

    {
      imgUrl: team05,
      name: ' Reem Nedal ',
      position: 'Developer'
    },
    {
      imgUrl: team02,
      name: 'Mohammad Husban',
      position: 'Qa - Specialist'
    },
  ]

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row"
      style={{
        backgroundImage: "url('/imageaboutus.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* About Us Section */}
      <div className="flex-1 text-white py-16 px-4 md:px-8 bg-black bg-opacity-5">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="bg-black bg-opacity-5 p-6 rounded-lg shadow-lg">
          <p className="mb-3 text-center">
            We are travelers and technologists. We work across time zones, hemispheres, cultures and languages. We’re used to breaking things down and building them back up again, until they’re even better. We know travel can be hard, but we also know that it’s worth it, every time. And because we believe travel is a force for good, we take our roles seriously. We’re here to build great products, and facilitate connections between travelers and our partners that truly bring good into the world.
          </p>
        </div><br></br>
        <div className="bg-black bg-opacity-5 p-6 rounded-lg shadow-lg">
          <section className='our__team text-center' >
            <div className='container'>
              <div className='team__content'>
                <h6 className='subtitle font-bold '>Our Team</h6>
                <h2>
                  Join With Our Team
                </h2>
              </div>
              <div className='team__wrapper flex flex-wrap gap-9 text-center' style={{ whiteSpace: 'nowrap' }}>
                {
                  teamMembers.map((item, index) => (
                    <div className='team__item' key={index} style={{ width: '100px', height: '110px' }}>
                      <div className='team__img' style={{ width: '130px', height: '130px' }}>
                        <img src={item.imgUrl} alt='' />
                      </div>
                      <div className='team__details'>
                        <h4 className='font-semibold bt-7'>{item.name}</h4>
                        <p className='description'>{item.position}</p>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>
          </section>
        </div>
      </div>


      {/* Contact Us Section */}
      <div className="flex-1 text-white py-12 px-4 md:px-8 bg-black bg-opacity-5 flex justify-center items-center">
        <div className="bg-black bg-opacity-5 p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">We're listening! Contact us with feedback or suggestions</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2  rounded-md bg-gray-700/50 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2  rounded-md bg-gray-700/50 text-white"
                required
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="message" className="block text-lg font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full px-3 py-2  rounded-md bg-gray-700/50 text-white"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-sky-900 hover:bg-sky-700 text-white px-4 py-2 rounded-md w-full font-semibold">Send Message</button>
          </form>
          {submitting && <p className="text-white-700 mt-2">Thank you for your patience!</p>}
          {submitError && <p className="text-orange-500 mt-2">{submitError}</p>}
          {submitSuccess && <p className="text-white-700 mt-2">We will reconnect with you shortly. Thank you</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
