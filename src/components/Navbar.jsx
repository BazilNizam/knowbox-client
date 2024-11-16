import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query

  return (
    <nav className="bg-blue-dianne-950 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">KnowBox</a>
        </div>

        {/* Hamburger Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Conditionally render the hamburger or close icon */}
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </motion.div>
        </button>

        {/* Menu Items */}
        <ul
          className={`md:flex md:space-x-8 items-center md:static absolute md:bg-transparent bg-blue-dianne-900 w-full md:w-auto top-16 left-0 md:flex-row flex-col ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* Search Bar */}
          <motion.li
            key="search-bar"
            className="list-none md:inline-block px-4 py-2 cursor-pointer transition-all duration-300 text-lg"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full text-black md:w-auto w-full focus:outline-none"
              />
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>
          </motion.li>

          {/* Other Menu Items */}
          {["Explore Courses", "Instructors", "Login", "Resources"].map(
            (item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#4cb2c4",
                  borderRadius: "0.5rem",
                }}
                whileTap={{ scale: 0.95 }}
                className="list-none md:inline-block px-4 py-2 cursor-pointer transition-all duration-300 text-lg"
              >
                <a
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block md:inline-block"
                >
                  {item}
                </a>
              </motion.li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
