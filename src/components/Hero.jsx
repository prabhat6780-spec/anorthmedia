import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 2 }} className="position-absolute w-100 h-100" style={{ zIndex: 0, top: 0, left: 0, pointerEvents: 'none', isolation: 'isolate' }}>
        <div className="position-absolute" style={{ top: '-5%', left: '-5%', transform: 'rotate(-5deg)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(12rem, 28vw, 35rem)', color: 'var(--bg-type-color)', lineHeight: 0.8, whiteSpace: 'nowrap', userSelect: 'none' }}>
          digital
        </div>
        <div className="position-absolute" style={{ top: '20%', right: '-10%', transform: 'rotate(-5deg)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(12rem, 28vw, 36rem)', color: 'var(--bg-type-color)', lineHeight: 0.8, whiteSpace: 'nowrap', userSelect: 'none' }}>
          era
        </div>
        <div className="position-absolute" style={{ bottom: '0%', left: '-5%', transform: 'rotate(-5deg)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(12rem, 28vw, 36rem)', color: 'var(--bg-type-color)', lineHeight: 0.8, whiteSpace: 'nowrap', userSelect: 'none' }}>
          brand
        </div>
      </motion.div>
      <div className="container position-relative z-1 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-uppercase tracking-wider mb-5 opacity-75 fw-medium text-nowrap" style={{ letterSpacing: '0.2em', fontSize: 'clamp(0.65rem, 2.5vw, 1.4rem)' }}>
          ARTISTS &nbsp;/&nbsp; BRANDS &nbsp;/&nbsp; BUSINESSES
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-heading mb-5" style={{ fontFamily: "'Helvetica Now Display ExtraBold', 'Arial Black', sans-serif", fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', fontSize: 'clamp(3rem, 14vw, 8rem)' }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingRight: '0.1em' }}>The </span>
          digital era
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingLeft: '0.1em', paddingRight: '0.1em' }}> of </span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingRight: '0.1em' }}>your </span>
          brand.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="opacity-75 mx-auto mb-5" style={{ maxWidth: '650px', lineHeight: 1.8, fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontWeight: 400, letterSpacing: '0.02em', textWrap: 'balance' }}>
          Step into the digital world with creative strategies, powerful online presence and innovative digital solutions.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-4 pt-3">
          <Link to="/explore" className="btn btn-outline-theme rounded-pill px-4 px-md-5 py-2 py-md-3 text-uppercase text-nowrap" style={{ fontFamily: "'Helvetica Now Display ExtraBold', 'Arial Black', sans-serif", letterSpacing: '0.15em', transition: 'all 0.3s ease', fontSize: 'clamp(0.75rem, 2.5vw, 1.1rem)' }}>
            Explore Anorthmedia
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
