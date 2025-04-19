import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    { name: "Achbal Al Maarifa Academy", logo: "/images/achbal.jpg" },
    { name: "Chiali Groupe", logo: "/images/chiali.png" },
    { name: "Ampere Academy", logo: "/images/ampere.jpg" },
    
  ];

  return (
    <section
      id="partners"
      className="section bg-gradient-to-b from-quantum-black via-quantum-dark to-black py-24 px-4 sm:px-6 lg:px-12"
    >
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text glow-text">
            Our Partners
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Backed by our beloved sponsors for this event.
          </p>
        </motion.div>

        <div className="flex gap-8  items-center justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="bg-quantum-gray/40 backdrop-blur-md border border-gray-800 hover:border-quantum-orange transition-all duration-300 rounded-xl p-6 flex items-center justify-center shadow-lg min-w-64"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-24 object-contain  hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
