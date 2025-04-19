import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "About",
    "Tracks",
    "Timeline",
    "Speakers",
    "Partners",
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group text-xl sm:text-2xl md:text-3xl font-bold"
            >
              <span className="text-white">AiQuest</span>{" "}
              <span className="bg-gradient-to-r from-white/50 to-quantum-red bg-clip-text text-transparent">
                Quantum Edition
              </span>
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,110,0,0.2)_0%,transparent_70%)]"></div>
              </div>
            </motion.div>

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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="quantum-btn text-sm"
              >
                REGISTER
              </motion.button>
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(false)}
              className="quantum-btn text-md mt-8"
            >
              REGISTER
            </motion.button>
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
      href="#"
      className="text-gray-300 hover:text-quantum-orange transition-colors duration-300"
    >
      <FaTwitter size={20} />
    </motion.a>
    <motion.a
      whileHover={{ y: -2 }}
      href="#"
      className="text-gray-300 hover:text-quantum-orange transition-colors duration-300"
    >
      <FaLinkedin size={20} />
    </motion.a>
    <motion.a
      whileHover={{ y: -2 }}
      href="#"
      className="text-gray-300 hover:text-quantum-orange transition-colors duration-300"
    >
      <FaGithub size={20} />
    </motion.a>
  </>
);

export default Navbar;
