import { motion } from "framer-motion";
import QuantumParticles from "./QuantumParticles";

const Timeline = () => {
  const eventDays = [
    {
      date: "Day 1",
      events: [
        {
          time: "17:00",
          title: "Check-in",
          description: "",
        },
        {
          time: "18:00",
          title: "Opening Ceremony",
          //description: "Welcome to the Quantum Realm",
        },
        {
          time: "19:00",
          title: "Coffee Break",
          //description: "Teams enter quantum state of infinite possibilities",
        },
        {
          time: "20:00",
          title: "Competition Begins",
          //description: "Teams enter quantum state of infinite possibilities",
        },
        {
          time: "21:00",
          title: "Dinner Time",
          //description: "Teams enter quantum state of infinite possibilities",
        },
        {
          time: "23:30",
          title: "First Workshop",
          //description: "Teams enter quantum state of infinite possibilities",
        },
        
      ],
    },
    {
      date: "Day 2",
      events: [
        {
          time: "8:00",
          title: "Breakfast Time",
         // description: "Solutions emerge from quantum probabilities",
        },
        {
          time: "12:00",
          title: "Lunch Time",
          //description: "The universe reveals its chosen states",
        },
        {
          time: "16:00",
          title: "Coffee Break",
          //description: "The quantum field stabilizes",
        },
        {
          time: "18:00",
          title: "Second Workshop",
          //description: "The quantum field stabilizes",
        },
        {
          time: "20:00",
          title: "Dinner Time",
          //description: "The quantum field stabilizes",
        },
      ],
    },
    {
      date: "Day 3",
      events: [
        {
          time: "8:00",
          title: "Competiton Ends",
          //description: "Final presentations and quantum awards ceremony",
        },
        {
          time: "8:00",
          title: "Breakfast Time & Netwroking",
          //description: "Final presentations and quantum awards ceremony",
        },
        {
          time: "10:00",
          title: "Closing Ceremony & Awards",
          //description: "Final presentations and quantum awards ceremony",
        },
      ],
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
            Explore the key moments of our quantum event across three days
          </p>
        </motion.div>

        <div className="relative">
          {/* Quantum Entanglement Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-quantum-orange/30 to-quantum-red/30 z-0 rounded-full">
            <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(90deg,transparent_0%,rgba(255,110,0,0.1)_50%,transparent_100%)] animate-[pulse_3s_ease-in-out_infinite]"></div>
          </div>

          <div className="grid gap-12">
            {eventDays.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 items-start gap-8 ${
                  index === 1 ? "md:pl-20" : "md:pr-20"
                }`}
              >
                {/* Quantum Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-quantum-orange/70 ring-4 ring-black z-10">
                  <div className="absolute inset-0 rounded-full bg-quantum-orange animate-ping opacity-30"></div>
                </div>

                {/* Spacer for Day 2 */}
                {index === 1 && <div className="hidden md:block" />}

                <div
                  className={`bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl hover:border-quantum-orange transition-all duration-300 ${
                    index === 1 ? "md:col-start-2" : "md:col-start-1"
                  }`}
                >
                  <div className="mb-4 text-lg  text-quantum-orange font-bold text-center">
                    {day.date}
                  </div>
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="mb-6 last:mb-0 flex justify-between ">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-md text-quantum-orange mb-2 font-bold" >
                        <span className="flex items-center">{event.time}</span>
                      </div>
                      
                    </div>
                  ))}
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
