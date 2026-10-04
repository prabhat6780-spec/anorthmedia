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
          <button className={`btn ${theme === 'dark' ? 'btn-light text-dark' : 'btn-dark text-white'} rounded-pill px-4 py-2 fw-bold w-100 w-md-auto d-flex align-items-center justify-content-center gap-2`}>
            START A CONVERSATION <i className="bi bi-arrow-up-right"></i>
          </button>
        </div>

        <div className="mt-5">
          <h3 className="h6 fw-bold mb-4 text-uppercase tracking-wider">Get in touch</h3>
          <div className="d-flex flex-column gap-3 opacity-75">
            <a href="mailto:info@anorthmedia.com" className="text-decoration-none" style={{ color: 'inherit' }}>info@anorthmedia.com</a>
            <a href="#" className="text-decoration-none" style={{ color: 'inherit' }}>@anorthmedia</a>
            <div>
              <a href="#" className="text-decoration-none" style={{ color: 'inherit' }}>Instagram</a> &bull; <a href="#" className="text-decoration-none" style={{ color: 'inherit' }}>Facebook</a>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center opacity-50 small">
          <div>NORTH MEDIA &copy; {new Date().getFullYear()}</div>
          <img src={theme === 'dark' ? logoLight : logoDark} alt="Anorthmedia" height="24" className="opacity-50" />
        </div>
      </motion.div>
    </footer>
  );
}
