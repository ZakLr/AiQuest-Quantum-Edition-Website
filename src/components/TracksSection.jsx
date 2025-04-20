import { motion } from "framer-motion";

const TracksSection = () => {
  const tracks = [
    {
      title: "Quantum Machine Learning",
      description:
        "Build quantum machine learning models that leverage quantum properties.",
      color: "from-quantum-red to-quantum-orange",
    },
    {
      title: "Quantum Algorithms & Optimization",
      description:
        "Develop and design quantum algorithms to solve various problems.",
      color: "from-quantum-orange to-quantum-red",
    },
    {
      title: "Quantum Security & Randomness Generation",
      description:
        "Explore quantum cryptography & security methods and randomness generation techniques.",
      color: "from-orange-600 to-red-700",
    },
    {
      title: "Quantum Theory & CTF Challenges",
      description:
        "Solve challenges that require an understanding of quantum theory to find hidden flags...",
      color: "from-red-700 to-orange-600",
    },
  ];

  return (
    <section
      id="tracks"
      className="section relative bg-gradient-to-b from-quantum-dark via-quantum-black to-black min-h-screen pt-24 px-4 sm:px-6 lg:px-12 flex flex-col justify-center items-center"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('/circuit-board.svg')] bg-repeat pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text glow-text">
            Challenges Aspects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Explore diffrent paths in the quantum realm. Each path unlocks a unique
            domain of challenges.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className={`relative bg-transparent p-[2px] rounded-2xl shadow-md  hover:shadow-quantum-orange transition-shadow duration-300`}
            >
              <div className="bg-quantum-orange/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 h-full flex flex-col border-2 border-quantum-red/20 hover:border-quantum-orange/60 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {track.title}
                </h3>
                <p className="text-gray-300 flex-grow">{track.description}</p>
              </div>

              {/* Glow overlay */}
              <div className="absolute -inset-0.5 rounded-2xl opacity-25 bg-gradient-to-br blur-xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
