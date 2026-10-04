import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import logoLight from '../assets/anorthmedia1.PNG';
import logoDark from '../assets/anorthmedia.PNG';

import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isExplorePage = location.pathname === '/explore';

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

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'} ${scrolled ? 'shadow-sm' : ''}`} style={{ transition: 'all 0.3s ease', backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
      <div className="container flex-wrap flex-md-nowrap align-items-center justify-content-between">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={theme === 'dark' ? logoDark : logoLight} alt="Anorthmedia" height="50" className="d-inline-block align-text-top" />
        </Link>

        {isExplorePage && (
          <div className="navbar-nav flex-row justify-content-start justify-content-md-end gap-3 gap-md-4 order-3 order-md-2 mt-2 mt-md-0 w-100 w-md-auto flex-grow-1 align-items-center px-0 px-md-4" style={{ fontSize: '0.85rem' }}>
            <a href="#about" className={`nav-link text-uppercase fw-semibold px-0 px-md-2 ${activeSection === 'about' ? 'active' : ''}`} style={{ letterSpacing: '0.05em' }}>Origin</a>
            <a href="#services" className={`nav-link text-uppercase fw-semibold px-0 px-md-2 ${activeSection === 'services' ? 'active' : ''}`} style={{ letterSpacing: '0.05em' }}>Vision</a>
            <a href="#experience" className={`nav-link text-uppercase fw-semibold px-0 px-md-2 ${activeSection === 'experience' ? 'active' : ''}`} style={{ letterSpacing: '0.05em' }}>Insights</a>
            <Link to="/#contact" className="nav-link text-uppercase fw-semibold px-0 px-md-2" style={{ letterSpacing: '0.05em' }}>Connect</Link>
          </div>
        )}
        
        <div className="d-flex align-items-center ms-auto ms-md-0 order-2 order-md-3">
          <button onClick={toggleTheme} className={`btn rounded-circle d-flex align-items-center justify-content-center border-0 ${theme === 'dark' ? 'text-white' : 'text-dark'}`} style={{ width: '35px', height: '35px', backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} color="#ffc107" /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
