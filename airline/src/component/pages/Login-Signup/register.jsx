import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase/firebase-config";

import { toast } from "react-toastify";

import { setUserData } from "./Controllers/setUserData";
import { Copoun } from "../../../models/copoun";
import { getCurrentDate } from "./Controllers/getCurrentDate";
import { User } from "../../../models/user";
import { Link } from "react-router-dom";
import formBackground from "./assets/bglsignup.png";
import background from "./assets/backg.jpg";
import { useNavigate } from "react-router-dom";
import { Context } from "../../sharedComponents/contextProvider";
import { useContext } from "react";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [userState, setUser] = useContext(Context).user;
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const currentUser = auth.currentUser;

      if (currentUser) {

        sessionStorage.setItem('userId', currentUser.uid);
        sessionStorage.setItem('userEmail', currentUser.email);
        const copoun = new Copoun({
          copounID: 0,
          description: "Welcoming copoun",
          discountPercentage: 20,
          expiration: getCurrentDate({ monthAdd: 1 }),
          isExpired: false,
          isUsed: false,
        });
        const user = new User({
          userID: currentUser.uid,
          email: currentUser.email,
          fullName: `${fname} ${lname}`,
          tickets: [],
          phoneNumber: phoneNumber,
          copouns: [copoun],
        });
        let response = await setUserData(user);
        if (response) {
          toast.success("User logged in Successfully", {
            position: "top-center",
          });
          setUser(user);
          sessionStorage.setItem("user", JSON.stringify(user));
        }
      }

      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        style={{
          backgroundImage: `url(${formBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3 className="text-2xl font-semibold text-center mb-6">Sign Up</h3>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>

          <p className="text-sm text-gray-600 text-right">
            Already registered{" "}
            <Link to="/Login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Register;
