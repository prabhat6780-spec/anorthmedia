import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import About from './About';
import Experience from './Experience';
import Services from './Services';

export default function Explore() {
  return (
    <div className="pt-5 mt-5">
      <About />
      <Services />
      <Experience />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-center pb-5 mb-5">
        <Link to="/" className="btn btn-outline-theme rounded-pill px-5 py-2">
          &larr; Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
