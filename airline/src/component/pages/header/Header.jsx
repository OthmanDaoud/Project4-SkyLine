import Capture from "./assets/Capture.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Context } from "../../sharedComponents/contextProvider";
import logoA from "./assets/logoA.jpg"
import { useTranslation } from 'react-i18next';


const Header = () => {
  const [currentUser, setUser] = useContext(Context).user;
  const [highlighted, setHighlight] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeEN = () => {
      i18n.changeLanguage('en');
  };
  
  const changeAR = () => {
      i18n.changeLanguage('ar');
  };

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, [setUser]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/Login");
  };

  return (
    <header className="bg-gradient-to-r from-purple-300 to-pink-200 shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img src={logoA} alt="Logo" className="h-12 w-12 rounded-full" />
          <span className="ml-2 text-xl font-bold text-gray-800">SkyLine</span>
        </div>
        <div className="sm:hidden relative">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
              <nav className="flex flex-col items-start p-4 space-y-2">
                <Link
                  to="/"
                  className={
                    highlighted === "Home" ? "text-red-500" : "text-gray-600"
                  }
                  onClick={() => {
                    setHighlight("Home");
                    toggleMenu();
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/Flights"
                  className={
                    highlighted === "Flights" ? "text-red-500" : "text-gray-600"
                  }
                  onClick={() => {
                    setHighlight("Flights");
                    toggleMenu();
                  }}
                >
                  Flights
                </Link>
                <Link
                  to="/Support"
                  className={
                    highlighted === "Support" ? "text-red-500" : "text-gray-600"
                  }
                  onClick={() => {
                    setHighlight("Support");
                    toggleMenu();
                  }}
                >
                  Support
                </Link>
                <Link
                  to="/About"
                  className={
                    highlighted === "Team" ? "text-red-500" : "text-gray-600"
                  }
                  onClick={() => {
                    setHighlight("Team");
                    toggleMenu();
                  }}
                >
                  Team
                </Link>
                <Link
                  to="Testi18n"
                  className={
                    highlighted === "Testi18n" ? "text-red-500" : "text-gray-600"
                  }
                  onClick={() => {
                    setHighlight("Testi18n");
                    toggleMenu();
                  }}
                >
                 Testi18n
                </Link>
                {!currentUser ? (
                  <>
                    <button
                      onClick={() => {
                        navigate("/Login");
                        toggleMenu();
                      }}
                      className="text-gray-600 text-left w-full"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        navigate("/Signup");
                        toggleMenu();
                      }}
                      className="px-4 py-2 bg-red-500 text-white rounded text-left w-full"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="text-gray-600 text-left w-full"
                  >
                    Log Out
                  </button>
                )}
              </nav>
            </div>
          )}
        </div>
        <nav className="hidden sm:flex items-center space-x-10">
          <Link
            to="/"
            className={
              highlighted === "Home" ? "text-pink-800" : "text-gray-600 font-semibold"
            }
            onClick={() => setHighlight("Home")}
          >
            Home
          </Link>
          <Link
            to="/Flights"
            className={
              highlighted === "Flights" ? "text-pink-800" : "text-gray-600 font-semibold"
            }
            onClick={() => setHighlight("Flights")}
          >
            Flights
          </Link>
          <Link
            to="/Support"
            className={
              highlighted === "Support" ? "text-pink-800" : "text-gray-600 font-semibold"
            }
            onClick={() => setHighlight("Support")}
          >
            Support
          </Link>
        
                
            <div>
            <button className="bg-pink-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={changeEN}>EN</button>
<button className="bg-pink-800 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" onClick={changeAR}>AR</button>

            </div>
          {currentUser && (
            <Link
              to="/profilepage"
              className={
                highlighted === "profile" ? "text-pink-800" : "text-gray-600 font-semibold"
              }
              onClick={() => setHighlight("profile")}
            >
              Profile
            </Link>
          )}
        </nav>
        <div className="hidden sm:flex items-center space-x-4">
          {!currentUser ? (
            <>
              <button
                onClick={() => {
                  navigate("/Login");
                }}
                className="text-gray-600"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  navigate("/Signup");
                }}
                className="px-4 py-2 bg-blue-900 text-white rounded"
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-white font-bold w-20 h-10 rounded-md bg-blue-900  "
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
