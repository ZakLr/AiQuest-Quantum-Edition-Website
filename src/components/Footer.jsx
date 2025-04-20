import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import QuantumParticles from "./QuantumParticles";

const Footer = () => {
  return (
    <footer className="bg-quantum-black py-12 relative ">
      <QuantumParticles particleCount={20} />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400 text-sm mt-6">
            © {new Date().getFullYear()} The New GDG SBA AiQuest-Quantum
            Edition. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            <span>
              Song used: "Can You Hear The Music" by Ludwig Göransson. © {2023}
            </span>
          </p>
          <div className="flex justify-center space-x-8 mb-6">
            <a
              href="https://www.instagram.com/gdg.sba/"
              className="text-gray-400 hover:text-quantum-orange transition-colors p-4 rounded-full transform hover:scale-110"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://www.linkedin.com/company/gdg-sba/"
              className="text-gray-400 hover:text-quantum-orange transition-colors p-4 rounded-full transform hover:scale-110"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
