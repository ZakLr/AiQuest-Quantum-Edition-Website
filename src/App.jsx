import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import PrizeSection from "./components/PrizeSection";

const Challenges = () => {
  const challenges = [
    {
      name: "Quantum Circuit Optimization",
      author: "Nesrine ABDELHAK",
      description:
        "Design an efficient quantum circuit to solve a complex optimization problem using minimal qubits.",
      link: "#",
      ponderation: "30%",
    },
    {
      name: "Quantum Machine Learning",
      author: "Ashraf BOUSSAHI",
      description:
        "Implement a quantum-enhanced machine learning model for pattern recognition.",
      link: "#",
      ponderation: "25%",
    },
    {
      name: "Quantum Cryptography Challenge",
      author: "Zakaria LOURGHI",
      description:
        "Develop a quantum-resistant cryptographic protocol for secure communication.",
      link: "#",
      ponderation: "20%",
    },
    {
      name: "Quantum Simulation",
      author: "Mouadh ASSAL",
      description:
        "Create a quantum simulation to model molecular interactions for drug discovery.",
      link: "#",
      ponderation: "25%",
    },
  ];

  return (
    <section
      id="challenges"
      className="relative min-h-screen bg-gradient-to-b from-quantum-black to-quantum-dark py-20 px-4 sm:px-6 lg:px-12"
    >
      <QuantumParticles particleCount={20} />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text glow-text">
            Quantum Challenges
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Tackle cutting-edge quantum computing challenges designed by our
            expert mentors
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="relative bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl hover:border-quantum-orange transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-quantum-orange/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {challenge.name}
              </h3>
              <p className="text-sm text-quantum-orange mb-2">
                By {challenge.author}
              </p>
              <p className="text-gray-300 mb-4">{challenge.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={challenge.link}
                  className="text-quantum-orange hover:text-quantum-orange/70 transition"
                >
                  View Challenge Details
                </a>
                <span className="text-sm text-gray-400">
                  Weight: {challenge.ponderation}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function App() {
  //const [audioLoaded, setAudioLoaded] = useState(false);

  return (
    <Router>
      <div className="App relative overflow-hidden">
        {/* Fog overlays on the sides */}
        <div className="pointer-events-none animate-pulse fixed top-0 left-0 h-full w-12 md:w-24 z-100 bg-gradient-to-r from-quantum-orange/80 sm:from-quantum-orange/60 to-transparent blur-3xl md:blur-3xl" />
        <div className="pointer-events-none animate-pulse fixed top-0 right-0 h-full w-12 md:w-24 z-100 bg-gradient-to-l from-quantum-orange/80 sm:from-quantum-orange/60 to-transparent blur-3xl md:blur-3xl" />

        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <HeroSection />
                <AboutSection />
                <TracksSection />
                <Partners />
                <PrizeSection />
                <Timeline />
                <Speakers />
                <FAQ />
                <Footer />
               {/*  <AudioPlayer
                  autoPlay={true}
                  onAudioLoaded={() => setAudioLoaded(true)}
                /> */}
              </motion.div>
            }
          />
          {/* <Route path="/challenges" element={<Challenges />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
