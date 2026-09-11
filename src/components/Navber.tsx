import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ১. স্মল স্ক্রিনের জন্য আইকন (Large Screen-এ অদৃশ্য থাকবে) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                /* Cross (X) Icon SVG */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger Menu Icon SVG */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* ২. লোগো (Small Screen-এ মাঝে, Large Screen-এ বাঁয়ে) */}
          <div className="flex-1 text-center md:flex-initial md:text-left">
            <a href="#" className="text-2xl font-bold text-blue-600">
              MyLogo
            </a>
          </div>

          {/* ৩. লিস্ট আইটেম (Large Screen-এ মাঝে দেখাবে) */}
          <div className="hidden md:flex space-x-8 items-center justify-center">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Contact
            </a>
          </div>

          {/* ৪. সাইন-ইন এবং সাইন-আপ বোতাম */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition shadow-sm"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            About
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
