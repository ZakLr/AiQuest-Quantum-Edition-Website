import { motion } from "framer-motion";
import QuantumParticles from "./QuantumParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-quantum-black max-w-full overflow-hidden z-50 px-4 sm:px-6 lg:px-12">
      <QuantumParticles particleCount={40} />

      <div className="container mx-auto z-20 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Subheading */}
          <motion.div
            animate={{
              textShadow: [
                "0 0 8px rgba(255, 106, 0, 0.4)",
                "0 0 15px rgba(255, 61, 0, 0.6)",
                "0 0 8px rgba(255, 106, 0, 0.4)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-sm sm:text-base md:text-lg font-mono text-quantum-orange mb-4"
          >
            GDG SBA presents
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text font-orbitron">AiQuest</span>
            <br />
            <span className="bg-gradient-to-r from-quantum-dark/60 to-quantum-orange bg-clip-text text-transparent font-orbitron">
              Quantum Edition
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-10 px-2"
          >
            The first Quantum Computing & Machine Learning datathon in North
            Africa. Explore the quantum realm and push the boundaries of
            computation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 px-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-quantum-orange to-quantum-red rounded-full text-white font-medium hover:shadow-lg hover:shadow-quantum-orange/50 transition-all duration-300 text-base sm:text-lg"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 border border-quantum-orange rounded-full text-quantum-orange font-medium hover:bg-quantum-orange/10 transition-all duration-300 text-base sm:text-lg"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bouncing arrow */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-quantum-orange animate-float"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
