import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    { name: "Achbal Al Maarifa Academy", logo: "/images/achbal.jpg" },
    { name: "Groupe Chiali", logo: "/images/chiali.png" },
    { name: "Ampere Academy", logo: "/images/ampere.jpg" },
  ];

  return (
    <section
      id="partners"
      className="section bg-gradient-to-b from-quantum-black via-quantum-dark to-black py-12 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 gradient-text glow-text">
            Our Sponsors
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            AiQuest—Quantum Edition is backed by our beloved sponsors, those
            whose contributions will make the contest an absolute masterpiece.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-center justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-quantum-gray/40 backdrop-blur-md border border-gray-800 hover:border-quantum-orange transition-all duration-300 rounded-xl p-4 sm:p-6 flex items-center justify-center shadow-lg w-full"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 sm:max-h-20 md:max-h-24 w-auto object-contain hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300"
                />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-center mt-4 text-lg font-medium text-gray-300"
              >
                {partner.name}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
