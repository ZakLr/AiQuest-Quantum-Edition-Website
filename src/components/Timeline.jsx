import { motion } from "framer-motion";
import QuantumParticles from "./QuantumParticles";

const Timeline = () => {
  const lockedEvents = [
    {
      date: "Day 1",
      title: "Quantum Sequence Initiated",
      description: "The quantum journey begins with an energy surge",
      time: "Morning",
    },
    {
      date: "Day 1",
      title: "Superposition Phase",
      description: "Teams enter quantum state of infinite possibilities",
      time: "Midday",
    },
    {
      date: "Day 1-2",
      title: "Entanglement Period",
      description: "Participants become quantumly connected",
      time: "Ongoing",
    },
    {
      date: "Day 2",
      title: "Wavefunction Collapse",
      description: "Solutions emerge from quantum probabilities",
      time: "Morning",
    },
    {
      date: "Day 2",
      title: "Quantum Observation",
      description: "The universe reveals its chosen states",
      time: "Afternoon",
    },
    {
      date: "Day 2",
      title: "Energy State Resolution",
      description: "The quantum field stabilizes",
      time: "Evening",
    },
  ];

  return (
    <section
      id="timeline"
      className="section relative min-h-screen bg-gradient-to-b from-quantum-black to-quantum-dark py-20 px-4 sm:px-6 lg:px-12"
    >
      <QuantumParticles particleCount={25} />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text glow-text">
            Quantum Timeline
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            The schedule exists in superposition - observe to collapse the
            possibilities
          </p>
          <p className="text-base sm:text-lg md:text-xl text-quantum-red max-w-3xl mx-auto">
            Full Schedule will be revealed soon.
          </p>
        </motion.div>

        <div className="relative">
          {/* Quantum Entanglement Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-quantum-orange/30 to-quantum-red/30 z-0 rounded-full">
            <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(90deg,transparent_0%,rgba(255,110,0,0.1)_50%,transparent_100%)] animate-[pulse_3s_ease-in-out_infinite]"></div>
          </div>

          <div className="grid gap-12">
            {lockedEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 items-start gap-8 ${
                  index % 2 === 0 ? "md:pr-20" : "md:pl-20"
                }`}
              >
                {/* Quantum Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-quantum-orange/70 ring-4 ring-black z-10">
                  <div className="absolute inset-0 rounded-full bg-quantum-orange animate-ping opacity-30"></div>
                </div>

                {/* Spacer for alternating sides */}
                {index % 2 !== 0 && <div className="hidden md:block" />}

                <div
                  className={`bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl hover:border-quantum-orange transition-all duration-300 ${
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                  }`}
                >
                  <div className="mb-2 flex items-center text-sm text-gray-400">
                    <span className="text-quantum-orange font-bold mr-3">
                      {event.date}
                    </span>
                    <span className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-1 text-quantum-orange"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {event.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-quantum-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    {event.title}
                  </h3>
                  <p className="text-gray-300">{event.description}</p>
                  <div className="mt-4 text-xs text-quantum-orange/70 flex items-center">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Full schedule will be revealed at event start
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
