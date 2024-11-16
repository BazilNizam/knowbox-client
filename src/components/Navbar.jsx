import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Close mobile menu on window resize to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close the mobile menu when switching to desktop
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-blue-dianne-950 text-white shadow-lg relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">KnowBox</a>
        </div>

        {/* Hamburger Button */}
        <button
          className="text-white md:hidden z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </motion.div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-8 items-center">
          {/* Search Bar */}
          <li className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full text-black focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </li>
          {/* Menu Items */}
          {["Explore Courses", "Instructors", "Login", "Resources"].map(
            (item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#4cb2c4",
                  borderRadius: "0.5rem",
                  transition: { duration: 0.15 }, // Faster hover animation
                }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-lg cursor-pointer transition-all duration-300"
              >
                <a href={`/${item.toLowerCase().replace(" ", "-")}`}>
                  {item}
                </a>
              </motion.li>
            )
          )}
        </ul>

        {/* Mobile Menu */}
        <motion.div
          className={`absolute top-16 left-0 w-full bg-blue-dianne-900 text-white z-10 ${
            isOpen ? "block" : "hidden"
          }`}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          exit="exit"
          variants={mobileMenuVariants}
        >
          <div className="p-4 space-y-4">
            {/* Search Bar */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-full text-black focus:outline-none"
              />
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>

            {/* Menu Items */}
            <ul className="space-y-4 text-center">
              {["Explore Courses", "Instructors", "Login", "Resources"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#4cb2c4",
                      borderRadius: "0.5rem",
                      transition: { duration: 0.15 }, // Faster hover animation
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-lg cursor-pointer transition-all duration-300"
                  >
                    <a href={`/${item.toLowerCase().replace(" ", "-")}`}>
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
