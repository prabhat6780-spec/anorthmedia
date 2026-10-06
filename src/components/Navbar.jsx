import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import logoLight from '../assets/anorthmedia1.PNG';
import logoDark from '../assets/anorthmedia.PNG';

import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isExplorePage = location.pathname === '/explore';
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['about', 'services', 'experience'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    
    // Check initially
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top py-2 py-md-3 ${scrolled && !isHome ? 'shadow-sm' : ''}`} style={{ transition: 'all 0.3s ease', backgroundColor: scrolled ? 'var(--bg-color)' : 'transparent', borderBottom: (scrolled && !isHome) || (isExplorePage && !scrolled) ? '1px solid rgba(128, 128, 128, 0.1)' : '1px solid transparent' }}>
      <div className="container flex-wrap flex-md-nowrap align-items-center justify-content-between">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <motion.img layoutId="brand-logo" src={theme === 'dark' ? logoDark : logoLight} alt="Anorthmedia" className="d-inline-block align-text-top" style={{ height: 'clamp(35px, 6vw, 50px)' }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} />
        </Link>

        {isExplorePage && (
          <motion.div initial="hidden" animate="visible" variants={navVariants} className="navbar-nav flex-row justify-content-start justify-content-md-end gap-3 gap-md-4 order-3 order-md-2 mt-2 mt-md-0 w-100 w-md-auto flex-grow-1 align-items-center px-0 px-md-4" style={{ fontSize: '0.85rem' }}>
            <motion.a variants={itemVariants} href="#about" className={`nav-link text-uppercase fw-semibold px-0 px-md-2 ${activeSection === 'about' ? 'active' : ''}`} style={{ letterSpacing: '0.05em' }}>Origin</motion.a>
            <motion.a variants={itemVariants} href="#services" className={`nav-link text-uppercase fw-semibold px-0 px-md-2 ${activeSection === 'services' ? 'active' : ''}`} style={{ letterSpacing: '0.05em' }}>Vision</motion.a>
            <motion.a variants={itemVariants} href="#experience" className={`nav-link text-uppercase fw-semibold px-0 px-md-2 ${activeSection === 'experience' ? 'active' : ''}`} style={{ letterSpacing: '0.05em' }}>Insights</motion.a>
            <motion.div variants={itemVariants}>
              <Link to="/#contact" className="nav-link text-uppercase fw-semibold px-0 px-md-2" style={{ letterSpacing: '0.05em' }}>Connect</Link>
            </motion.div>
          </motion.div>
        )}
        
        <div className="d-flex align-items-center ms-auto ms-md-0 order-2 order-md-3">
          <button onClick={toggleTheme} className="btn rounded-circle d-flex align-items-center justify-content-center border-0" style={{ width: '35px', height: '35px', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} color="currentColor" /> : <Moon size={18} color="currentColor" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
