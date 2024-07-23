import React from "react";
import "./index.css";

import { ContextProvider } from "./component/sharedComponents/contextProvider";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import TicketsCatalogue from "./component/pages/ticketsCatalogue/TicketsCatalogue";
import Home from "./component/pages/homePage/Homepage";

import Header from "./component/pages/header/Header";
import { Footer } from "./component/pages/footer/Footer";
import Login from "./component/pages/Login-Signup/login";
import Register from "./component/pages/Login-Signup/register";
import Profile from "./component/pages/profilepage/Profilepage";
import Tickets from "./component/pages/profilepage/Tickets";
import { PaymentContainer } from "./component/pages/details-checkout-confirmedPage/details-checkout-confirmed";
import ContactUs from "./component/pages/ContactPage/contact";

function App() {
  return (
    
    <ContextProvider>
      <BrowserRouter>
        <Routes></Routes>

        <Content />
      </BrowserRouter>
    </ContextProvider>
  );
}

function Content() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/Login" || location.pathname === "/Signup";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Flights" element={<TicketsCatalogue />} />
        <Route path="/Support" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Register />} />

        <Route path="/profilepage" element={<Profile/>} />
        <Route path="/PaymentPage" element={<PaymentContainer/>} />
        <Route path="/Tickets" element={<Tickets/>} />
     

      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
