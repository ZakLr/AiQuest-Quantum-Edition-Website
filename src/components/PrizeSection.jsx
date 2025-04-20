import { motion } from "framer-motion";

const PrizeSection = () => {
  const prizeAmount = "XX'XXX"; // Your prize amount here

  return (
    <section
      id="prize"
      className="section bg-gradient-to-b from-quantum-black to-quantum-dark py-24 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Prize
          </h2>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="text-quantum-orange font-mono">
            <span className="text-6xl md:text-8xl font-bold tracking-tighter">
              {prizeAmount
                }
            </span>
            <span className="ml-10 text-6xl md:text-8xl font-bold ">DZD</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizeSection;
