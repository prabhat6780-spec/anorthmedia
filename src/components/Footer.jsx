import logoLight from '../assets/anorthmedia1.PNG';
import logoDark from '../assets/anorthmedia.PNG';
import { motion } from 'framer-motion';

export default function Footer({ theme }) {
  return (
    <footer id="contact" className="container">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-5">
        <div className="mb-4 text-uppercase tracking-wider opacity-75" style={{ letterSpacing: '0.1em', fontSize: '0.8rem' }}>
          CONTACT / NORTH MEDIA
        </div>
        
        <h2 className="mb-4 text-uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', fontSize: 'clamp(1.8rem, 6vw, 4rem)' }}>
          YOUR NEXT BIG IDEA STARTS HERE.
        </h2>
        
        <p className="fs-5 opacity-75 mb-5" style={{ maxWidth: '700px', lineHeight: 1.6 }}>
          Whether you're an artist looking to grow your audience, a business ready to strengthen its online presence or a brand with a new idea, we'd love to hear from you.
        </p>

        <div className="p-4 rounded-4 border border-secondary border-opacity-25 mb-5">
          <h3 className="h6 fw-bold mb-3 text-uppercase tracking-wider">Let's talk about your project</h3>
          <p className="opacity-75 mb-4">Tell us what you're looking for, and our team will get in touch.</p>
          <a href="mailto:anushkacheema@anorthmedia.com" className="btn rounded-pill px-4 py-2 fw-bold w-100 w-md-auto d-flex align-items-center justify-content-center gap-2 text-decoration-none" style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', transition: 'all 0.3s ease' }}>
            START A CONVERSATION <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>

        <div className="mt-5">
          <h3 className="h6 fw-bold mb-4 text-uppercase tracking-wider">Get in touch</h3>
          <div className="d-flex flex-column gap-3 opacity-75">
            <a href="mailto:anushkacheema@anorthmedia.com" className="text-decoration-none" style={{ color: 'inherit' }}>anushkacheema@anorthmedia.com</a>
            <a href="https://anorthmedia.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: 'inherit' }}>@anorthmedia</a>
            <div className="d-flex gap-4 mt-2">
              <a href="https://www.instagram.com/anorthmedia?stkn=MWMwOWwwZ25vcDV3ZA==" target="_blank" rel="noopener noreferrer" className="text-decoration-none transition-opacity" style={{ color: 'inherit' }} aria-label="Instagram">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="https://www.facebook.com/share/1K1hgtaAFn/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-decoration-none transition-opacity" style={{ color: 'inherit' }} aria-label="Facebook">
                <i className="bi bi-facebook fs-4"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-top border-secondary border-opacity-25 text-center opacity-75 small" style={{ letterSpacing: '0.05em' }}>
          <div>Copyright {new Date().getFullYear()} &copy; Anorthmedia. All Rights Reserved</div>
        </div>
      </motion.div>
    </footer>
  );
}
