import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import QuantumParticles from "./QuantumParticles";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Quantum Expert",
      title: "Quantum Computing Researcher",
      affiliation: "MIT",
      image: "/images/speaker1.jpg",
    },
    {
      name: "Prof. ML Pioneer",
      title: "AI & Quantum ML Specialist",
      affiliation: "Stanford",
      image: "/images/speaker2.jpg",
    },
    {
      name: "Eng. Tech Visionary",
      title: "Quantum Algorithms Developer",
      affiliation: "Google Quantum AI",
      image: "/images/speaker3.jpg",
    },
    {
      name: "Dr. Science Leader",
      title: "Quantum Simulation Expert",
      affiliation: "CERN",
      image: "/images/speaker4.jpg",
    },
  ];

  return (
    <section
      id="speakers"
      className="relative section bg-quantum-black py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center"
    >
      <QuantumParticles particleCount={12} />
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text glow-text">
            Featured Speakers
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Learn from global leaders in quantum computing, simulation, and
            machine learning.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="rounded-xl overflow-hidden border border-gray-800 bg-quantum-gray shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-white text-xl font-semibold">
                    {speaker.name}
                  </h3>
                  <p className="text-quantum-orange text-sm">{speaker.title}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 text-sm">{speaker.affiliation}</p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-quantum-orange transition"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-quantum-orange transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-quantum-orange transition"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
