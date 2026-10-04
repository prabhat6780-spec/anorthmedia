import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 2 }} className="bg-shape shape-1 position-absolute rounded-circle" style={{ filter: 'blur(80px)' }}></motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 2, delay: 0.5 }} className="bg-shape shape-2 position-absolute rounded-circle" style={{ filter: 'blur(80px)' }}></motion.div>
      <div className="container position-relative z-1 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-uppercase tracking-wider mb-4 opacity-75 fw-medium" style={{ letterSpacing: '0.3em', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
          ARTISTS &nbsp;/&nbsp; BRANDS &nbsp;/&nbsp; BUSINESSES
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-heading mb-4" style={{ fontFamily: "'Helvetica Now Display ExtraBold', 'Arial Black', sans-serif", fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', fontSize: 'clamp(4.5rem, 11vw, 8rem)' }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingRight: '0.1em' }}>The </span>
          digital era 
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingLeft: '0.1em', paddingRight: '0.1em' }}> of </span>
          <br />
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingRight: '0.1em' }}>your </span>
          brand.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="opacity-75 mx-auto fw-medium" style={{ maxWidth: '900px', lineHeight: 1.6, fontSize: 'clamp(1.5rem, 3.5vw, 2rem)' }}>
          Step into the digital world with creative strategies, powerful online presence and innovative digital solutions.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-5">
          <Link to="/explore" className="btn btn-outline-theme rounded-pill px-5 py-3 text-uppercase" style={{ fontFamily: "'Helvetica Now Display ExtraBold', 'Arial Black', sans-serif", letterSpacing: '0.15em', transition: 'all 0.3s ease', fontSize: '1.1rem' }}>
            Explore Anorthmedia
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
