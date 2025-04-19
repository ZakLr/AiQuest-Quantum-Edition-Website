import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from "howler";
import QuantumParticles from "./QuantumParticles";

const LoadingScreen = ({ onComplete }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    { text: "BRACE YOURSELVES", duration: 800 },
    { text: "FOR GREATNESS", duration: 1000 },
    { text: "QUANTUM REVOLUTION AWAITS", duration: 1200 },
    { text: "INITIALIZING DATATHON", duration: 900 },
    { text: "WELCOME TO THE FUTURE", duration: 1100 },
  ];

  useEffect(() => {
    // Initialize audio immediately
    const sound = new Howl({
      src: ["/sounds/oppenheimer.mp3"],
      html5: true,
      volume: 0.5,
      loop: true,
    });

    let messageTimeout;
    let currentIndex = 0;

    const showNextMessage = () => {
      if (currentIndex < messages.length) {
        setCurrentMessageIndex(currentIndex);
        messageTimeout = setTimeout(() => {
          currentIndex++;
          showNextMessage();
        }, messages[currentIndex].duration);
      } else {
        // All messages shown, complete loading
        onComplete(sound);
      }
    };

    // Start the message sequence
    showNextMessage();

    return () => {
      clearTimeout(messageTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-quantum-black z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Quantum particle background */}
      <QuantumParticles particleCount={10} />

      {/* Glowing center orb */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-64 h-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,110,0,0.8) 0%, rgba(255,61,0,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Animated messages */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessageIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-white text-center px-4"
        >
          {messages[currentMessageIndex]?.text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoadingScreen;
