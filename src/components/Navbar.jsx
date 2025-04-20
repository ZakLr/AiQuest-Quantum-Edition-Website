import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Event Details",
    "Challenges Aspects",
    "Sponsors",
    "Timeline",
    "Mentors",
    "FAQ",
  ];
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 w-full z-50 bg-quantum-black/80 backdrop-blur-lg border-b border-quantum-orange/20"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            
              <div className="relative inline-block">
                <img
                  src="/images/aiquest.png"
                  alt="Aiquest image"
                  className="w-28 sm:w-36"
                />
                
              </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative px-3 py-1 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-quantum-orange transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Social + Register */}
            <div className="hidden md:flex items-center space-x-6">
              <SocialIcons />
              
            </div>

            {/* Hamburger */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-quantum-orange transition-colors duration-300 focus:outline-none"
              >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Popup Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 px-6"
          >
            {/* Close button top right */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-gray-300 hover:text-quantum-orange transition"
            >
              <FaTimes size={28} />
            </button>

            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl text-white font-medium hover:text-quantum-orange transition"
              >
                {item}
              </motion.a>
            ))}

            <div className="flex space-x-6 mt-6">
              <SocialIcons />
            </div>

            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SocialIcons = () => (
  <>
    <motion.a
      whileHover={{ y: -2 }}
      href="https://www.instagram.com/gdg.sba/"
      className="text-gray-300 hover:text-quantum-orange transition-colors duration-300"
    >
      <FaInstagram size={20} />
    </motion.a>
    <motion.a
      whileHover={{ y: -2 }}
      href="https://www.linkedin.com/company/gdg-sba/"
      className="text-gray-300 hover:text-quantum-orange transition-colors duration-300"
    >
      <FaLinkedin size={20} />
    </motion.a>
  </>
);

export default Navbar;
