import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TracksSection from "./components/TracksSection";
import Timeline from "./components/Timeline";
import Speakers from "./components/Speakers";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";
import QuantumParticles from "./components/QuantumParticles";

const LoadingScreen = ({ onComplete }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    { text: "BRACE YOURSELVES", duration: 1500 },
    { text: "FOR GREATNESS...", duration: 2000 },
    { text: "QUANTUM REACTORS ARE ON...", duration: 3000 },
    { text: "GDG SBA PRESENTS...", duration: 2500 },
  ];

  useEffect(() => {
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
        onComplete();
      }
    };

    showNextMessage();

    return () => {
      clearTimeout(messageTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-quantum-black z-50 flex flex-col items-center justify-center overflow-hidden">
      <QuantumParticles particleCount={10} />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-64 h-64 rounded-full animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(255,110,0,0.8) 0%, rgba(255,61,0,0) 70%)",
          filter: "blur(40px)",
        }}
      />
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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App relative overflow-hidden">
      {/* Fog overlays on the sides */}
      <div className="pointer-events-none animate-pulse fixed top-0 left-0 h-full w-12 md:w-24 z-100 bg-gradient-to-r from-quantum-orange/80 sm:from-quantum-orange/60 to-transparent blur-3xl md:blur-3xl" />
      <div className="pointer-events-none animate-pulse fixed top-0 right-0 h-full w-12 md:w-24 z-100 bg-gradient-to-l from-quantum-orange/80 sm:from-quantum-orange/60 to-transparent blur-3xl md:blur-3xl" />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen
            onComplete={() => {
              setIsLoading(false);
            }}
          />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <HeroSection />
            <AboutSection />
            <TracksSection />
            <Partners />
            <Timeline />
            <Speakers />
            <FAQ />
            <Footer />
            <AudioPlayer autoPlay={true} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
