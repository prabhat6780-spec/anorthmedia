import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 2 }} className="position-absolute w-100 h-100 d-none d-md-block overflow-hidden" style={{ zIndex: 0, top: 0, left: 0, pointerEvents: 'none', isolation: 'isolate' }}>
        <div className="position-absolute" style={{ top: '-5%', left: '-5%', transform: 'rotate(-5deg)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(12rem, 28vw, 35rem)', color: 'var(--bg-type-color)', lineHeight: 0.8, whiteSpace: 'nowrap', userSelect: 'none' }}>
          digital
        </div>
        <div className="position-absolute" style={{ top: '25%', right: '-10%', transform: 'rotate(-5deg)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(12rem, 28vw, 36rem)', color: 'var(--bg-type-color)', lineHeight: 0.8, whiteSpace: 'nowrap', userSelect: 'none' }}>
          era
        </div>
        <div className="position-absolute" style={{ bottom: '-5%', left: '-5%', transform: 'rotate(-5deg)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(12rem, 28vw, 36rem)', color: 'var(--bg-type-color)', lineHeight: 0.8, whiteSpace: 'nowrap', userSelect: 'none' }}>
          brand
        </div>
      </motion.div>
      <div className="container position-relative z-1 text-start text-md-center" style={{ marginTop: '15px' }}>
        <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 2.0, delay: 2.0, ease: 'easeOut' }} className="text-uppercase tracking-wider mb-5 opacity-75 fw-medium text-nowrap" style={{ letterSpacing: '0.2em', fontSize: 'clamp(0.65rem, 2.5vw, 1.4rem)' }}>
          ARTISTS &nbsp;/&nbsp; BRANDS &nbsp;/&nbsp; BUSINESSES
        </motion.div>
        <motion.h1 initial={{ opacity: 0, filter: 'blur(20px)', letterSpacing: '0.1em' }} animate={{ opacity: 1, filter: 'blur(0px)', letterSpacing: '-0.04em' }} transition={{ duration: 2.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] }} className="hero-heading mb-4 mb-md-5" style={{ fontFamily: "'Helvetica Now Display ExtraBold', 'Arial Black', sans-serif", fontWeight: 900, lineHeight: 1.1, fontSize: 'clamp(3rem, 14vw, 8rem)' }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingRight: '0.1em' }}>The </span>
          <br className="d-block d-md-none" />
          digital era
          <br className="d-block d-md-none" />
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingLeft: '0.1em', paddingRight: '0.1em' }}> of </span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-accent-color)' }}>your brand.</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 2.0, delay: 2.5, ease: 'easeInOut' }} className="d-block d-md-none mb-4 mx-auto" style={{ width: '50px', height: '2px', backgroundColor: 'var(--text-accent-color)', transformOrigin: 'center' }}></motion.div>

        <motion.p initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 2.0, delay: 2.6, ease: 'easeOut' }} className="opacity-75 mx-0 mx-md-auto mb-5" style={{ maxWidth: '650px', lineHeight: 1.8, fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontWeight: 400, letterSpacing: '0.02em' }}>
          Step into the digital world with creative strategies, powerful online presence and innovative digital solutions.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2.0, delay: 2.8, ease: 'easeOut' }} className="mt-4 pt-3 d-flex justify-content-start justify-content-md-center">
          <Link to="/explore" className="btn btn-outline-theme rounded-pill px-4 px-md-5 py-2 py-md-3 text-uppercase text-nowrap d-flex align-items-center gap-2" style={{ fontFamily: "'Helvetica Now Display ExtraBold', 'Arial Black', sans-serif", letterSpacing: '0.15em', transition: 'all 0.3s ease', fontSize: 'clamp(0.75rem, 2.5vw, 1.1rem)' }}>
            Explore Anorthmedia <i className="bi bi-arrow-right fs-5"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
