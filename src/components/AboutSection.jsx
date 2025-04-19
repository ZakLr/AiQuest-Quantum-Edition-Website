import { motion } from "framer-motion";
import { LuCpu, LuBrain, LuZap } from "react-icons/lu";
import QuantumParticles from "./QuantumParticles";

const features = [
  {
    title: "Quantum Computing",
    desc: "Dive into qubits, superposition, and algorithms beyond classical limits.",
    icon: (
      <LuCpu className="text-quantum-orange glow-icon w-10 h-10 sm:w-12 sm:h-12" />
    ),
  },
  {
    title: "Machine Learning",
    desc: "Explore quantum-enhanced models solving real-world challenges at lightning speed.",
    icon: (
      <LuBrain className="text-quantum-orange glow-icon w-10 h-10 sm:w-12 sm:h-12" />
    ),
  },
  {
    title: "Innovation",
    desc: "Collaborate on boundary-pushing tech shaping the future across industries.",
    icon: (
      <LuZap className="text-quantum-orange glow-icon w-10 h-10 sm:w-12 sm:h-12" />
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section relative bg-gradient-to-b from-quantum-black to-quantum-dark  flex items-center justify-center min-h-screen flex-col px-4 sm:px-6 lg:px-12 py-10"
    >
      <QuantumParticles particleCount={10} />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.07] bg-[length:60px_60px] z-0 pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mx-auto text-center mb-16 px-4"
        >
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text glow-text"
          >
            About the Event
          </motion.h2>
          <motion.p
            variants={item}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Where cutting-edge quantum technologies meet the power of machine
            learning. Be part of a datathon unlike any other.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(255,106,0,0.4)",
              }}
              className="relative p-6 sm:p-8 rounded-2xl bg-transparent border border-quantum-red backdrop-blur-md transition-all duration-300 hover:border-quantum-orange/60"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                {feature.desc}
              </p>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
