import React from "react";
import { Link } from "react-router-dom";
import Capture from "../header/assets/Capture.png";
import logoA from "./assets/logoA.jpg"


import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Flights",
    path: "/Flights",
  },
  {
    title: "Support",
    path: "/support",
  },
];

export const Footer = () => {
  return (
    <div className="text-black bg-gradient-to-r from-purple-300 to-pink-200">
      <div className="container mx-auto px-4">
        <div
          data-aos="zoom-in"
          className="grid md:grid-cols-3 gap-8 pb-10 pt-5"
        >
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img
                src={logoA}
                alt="SkyLine Logo"
                className="h-12 w-12 rounded-full"
              />
              SkyLine
            </h1>
            <p>
              At SkyLine, we believe in providing the best travel experience to
              our customers. Our services are designed to make your journey
              comfortable.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black"
                      key={link.title}
                    >
                      <Link to={link.path}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black"
                      key={link.title}
                    >
                      <Link to={link.path}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="flex flex-col items-start gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Zarqa, Jordan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
