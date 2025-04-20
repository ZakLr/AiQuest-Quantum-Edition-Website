import { useState } from "react";
import { ChevronDown } from "lucide-react";
import QuantumParticles from "./QuantumParticles";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a AiQuest—Quantum Edition?",
      answer:
        "A competitive contest where participants work on quantum computing and quantum machine learning challenges, developing solutions within a limited timeframe of 36h.",
    },
    {
      question: "Do I need quantum computing experience?",
      answer:
        "While helpful, it's not required. We'll have introductory workshops and mentors to help beginners.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, and any other devices you need to work.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "The event is completely free to attend. Food and drinks will be provided during the event for free.",
    },
    {
      question: "How are teams formed?",
      answer:
        "You can form teams of 4 persons. If you don't have a team, we'll help you find one during the event.",
    },
    {
      question: "What are the prizes?",
      answer:
        "Winners will receive an exciting and valuable prize, noting taht the full experience is the real reward.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative section py-24 px-4 sm:px-6 lg:px-12 bg-quantum-black"
    >
      <QuantumParticles particleCount={12} />
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently <span className="gradient-text">Asked Questions</span>
        </h2>
        <p className="text-lg text-gray-400">
          Find answers to common questions about the Quantum Datathon.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`transition-all duration-300 border border-gray-800 rounded-xl overflow-hidden ${
                isOpen
                  ? "bg-quantum-gray/60 border-quantum-orange"
                  : "bg-quantum-dark"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left group"
              >
                <h3 className="text-base sm:text-lg font-medium text-white">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-quantum-orange transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "max-h-[500px] py-3 opacity-100"
                    : "max-h-0 opacity-0"
                } text-gray-300 text-sm sm:text-base`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
