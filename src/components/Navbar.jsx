import React, { useState, useEffect, useRef } from "react";
import "./animate.css"; // External CSS for transition + max-height logic
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm navbar-transition dark:bg-gray-900 fixed w-full z-50 top-0 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and desktop menu */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white">
                <i className="fas fa-file-invoice-dollar text-xl"></i>
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                Faturat
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
              {[
                { icon: "fa-cogs", label: "Services" },
                { icon: "fa-lightbulb", label: "Solutions" },
                { icon: "fa-tag", label: "Pricing" },
                { icon: "fa-question-circle", label: "Help Center" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  <i className={`fas ${icon} mr-2`}></i>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/signin"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Log In
            </Link>
            <a
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-700 hover:to-blue-500 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button
              ref={buttonRef}
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none"
            >
              <i
                className={`fas ${
                  isMobileOpen ? "fa-times" : "fa-bars"
                } text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`mobile-menu md:hidden bg-white dark:bg-gray-900 ${
          isMobileOpen ? "open" : ""
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {[
            { icon: "fa-cogs", label: "Services" },
            { icon: "fa-lightbulb", label: "Solutions" },
            { icon: "fa-tag", label: "Pricing" },
            { icon: "fa-question-circle", label: "Help Center" },
          ].map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <i className={`fas ${icon} mr-2`}></i>
              {label}
            </a>
          ))}

          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <Link
              to="/signin"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Log In
            </Link>
            <a
              href="/signup"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
