import { motion } from "framer-motion";
import { LuCalendar, LuMapPin, LuClock, LuUsers } from "react-icons/lu";
import QuantumParticles from "./QuantumParticles";

const AboutSection = () => {
  const eventDetails = [
    {
      title: "Date",
      value: "01-03 MAY 2025",
      icon: <LuCalendar className="text-quantum-orange w-5 h-5" />,
    },
    {
      title: "Location",
      value: "Ecole Superieur d'Informatique, Sidi Bel Abbes, Algeria",
      icon: <LuMapPin className="text-quantum-orange w-5 h-5" />,
    },
    {
      title: "Duration",
      value: "36 Hours Non-Stop",
      icon: <LuClock className="text-quantum-orange w-5 h-5" />,
    },
    
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-quantum-black to-quantum-dark py-20 px-4 sm:px-6 lg:px-8"
    >
      <QuantumParticles particleCount={25} />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Event Details
          </h2>
          <div className="h-1 w-20 bg-quantum-orange mx-auto mb-4" />
        </motion.div>

        {/* Content with Map */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 sm:items-center">
          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 lg:w-1/2"
          >
            {eventDetails.map((detail, index) => (
              <div key={index} className="flex items-start">
                <div className="p-2 mr-4 bg-quantum-orange/10 rounded-lg">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {detail.title}
                  </h3>
                  <p className="text-xl font-medium text-white mt-1">
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2 h-96"
          >
            <div className="h-full w-full rounded-xl overflow-hidden border border-quantum-orange/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.8674542897547!2d-0.6357502251004752!3d35.2097703727431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7f00290df8ed91%3A0x91bd238762e84ce4!2s%C3%89cole%20sup%C3%A9rieure%20en%20informatique%2008%20Mai%201945%20-%20Sidi%20Bel%20Abb%C3%A8s%20-!5e0!3m2!1sfr!2sdz!4v1745170510508!5m2!1sfr!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">
              École supérieure d'Informatique, Sidi Bel Abbes, Algeria
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
