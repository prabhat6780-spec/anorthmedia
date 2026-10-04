import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import logoLight from '../assets/anorthmedia1.PNG';
import logoDark from '../assets/anorthmedia.PNG';

import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isExplorePage = location.pathname === '/explore';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'} ${scrolled ? 'shadow-sm' : ''}`} style={{ transition: 'all 0.3s ease', backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
      <div className="container flex-wrap flex-md-nowrap align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={theme === 'dark' ? logoDark : logoLight} alt="Anorthmedia" height="35" className="d-inline-block align-text-top" />
        </Link>

        {isExplorePage && (
          <div className="navbar-nav flex-row gap-3 gap-md-4 ms-0 ms-md-auto order-3 order-md-2 mt-2 mt-md-0 w-100 w-md-auto d-flex align-items-center" style={{ fontSize: '0.85rem' }}>
            <a href="#about" className="nav-link text-uppercase fw-semibold px-0 px-md-2" style={{ letterSpacing: '0.05em' }}>Origin</a>
            <a href="#services" className="nav-link text-uppercase fw-semibold px-0 px-md-2" style={{ letterSpacing: '0.05em' }}>Vision</a>
            <a href="#experience" className="nav-link text-uppercase fw-semibold px-0 px-md-2" style={{ letterSpacing: '0.05em' }}>Insights</a>
            <a href="/#contact" className="nav-link text-uppercase fw-semibold px-0 px-md-2" style={{ letterSpacing: '0.05em' }}>Connect</a>
          </div>
        )}
        
        <div className="d-flex align-items-center ms-auto ms-md-4 order-2 order-md-3">
          <button onClick={toggleTheme} className={`btn rounded-circle d-flex align-items-center justify-content-center border-0 ${theme === 'dark' ? 'text-white' : 'text-dark'}`} style={{ width: '35px', height: '35px', backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} color="#ffc107" /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
