import { motion } from "framer-motion";
import QuantumParticles from "./QuantumParticles";

const Timeline = () => {
  const events = [
    {
      date: "Day 1",
      title: "Opening & Keynotes",
      description:
        "Introduction to quantum computing and machine learning with expert speakers.",
      time: "9:00 AM - 12:00 PM",
    },
    {
      date: "Day 1",
      title: "Team Formation",
      description: "Form your teams and receive the competition problems.",
      time: "1:00 PM - 2:00 PM",
    },
    {
      date: "Day 1-2",
      title: "Hackathon Begins",
      description: "Work on your quantum solutions with mentor support.",
      time: "2:00 PM - 10:00 PM",
    },
    {
      date: "Day 2",
      title: "Final Submissions",
      description: "Submit your projects before the deadline.",
      time: "10:00 AM - 12:00 PM",
    },
    {
      date: "Day 2",
      title: "Presentations",
      description: "Present your solutions to our panel of experts.",
      time: "2:00 PM - 5:00 PM",
    },
    {
      date: "Day 2",
      title: "Awards Ceremony",
      description: "Celebrate the winners and closing remarks.",
      time: "6:00 PM - 7:00 PM",
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
            Event Timeline
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Two days of intense quantum exploration, innovation, and
            collaboration.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-quantum-orange to-quantum-red z-0 rounded-full"></div>

          <div className="grid gap-12">
            {events.map((event, index) => (
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
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-quantum-orange ring-4 ring-black z-10 animate-pulse" />

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
                    <span>{event.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-300">{event.description}</p>
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
