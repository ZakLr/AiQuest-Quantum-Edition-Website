import { motion } from "framer-motion";
import QuantumParticles from "./QuantumParticles";
import { useState, useEffect } from "react";

const HeroSection = () => {
  // State for countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time remaining until May 1st, 2025
  useEffect(() => {
    const targetDate = new Date("2025-05-01T20:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer(); // Initial call
    const interval = setInterval(updateTimer, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-quantum-black max-w-full overflow-hidden z-50 px-4 sm:px-6 lg:px-12">
      {/* Quantum particles background */}
      <QuantumParticles particleCount={60} />

      {/* Nuclear reactor image background */}
      <img
        src="/images/reactor.png"
        alt="Nuclear Reactor"
        className="absolute right-auto w-96 object-cover blur-[6px] mix-blend-screen pointer-events-none select-none z-40"
      />

      {/* Foreground content */}
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
            The New GDG SBA presents
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight grid place-items-center"
          >
            <div className="relative inline-block">
              <img
                src="/images/aiquest.png"
                alt="Aiquest image"
                className="w-72 sm:w-[40vw]"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-10 px-2"
          >
            The first Quantum Computing & Machine Learning Contest in Algeria and the Arab
            Maghreb. Explore the Quantum World and push the boundaries of your Knowledge.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-quantum-red shadow-2xl max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-10 px-2"
          >
            Time left before the start of the contest:
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 3 }}
            className="mb-6"
          >
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-md mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="flex flex-col items-center bg-quantum-black/50 border border-quantum-orange/30 rounded-lg p-2 sm:p-4"
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-quantum-orange">
                    {item.value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-gray-300">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Registration Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="flex flex-col justify-center items-center gap-4 px-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full sm:w-auto px-8 py-3 bg-gray-800 rounded-full text-white font-medium text-base sm:text-lg cursor-not-allowed group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-quantum-orange/20 to-quantum-red/20 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 text-quantum-orange animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Registrations not open yet</span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -bottom-8 left-0 right-0 text-xs text-quantum-orange mt-2"
              >
                Opens tomorrow Monday 21st April at 20:00
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bouncing arrow */}
      <motion.div
        animate={{ y: [40, -5, 40] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-0 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20"
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
