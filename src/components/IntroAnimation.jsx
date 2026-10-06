import { motion } from 'framer-motion';
import { useEffect } from 'react';
import logoLight from '../assets/anorthmedia1.PNG';

export default function IntroAnimation({ onComplete }) {
  useEffect(() => {
    // Unmount the intro after 2 seconds to trigger the logo layout transition to the navbar
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: '#5A0914', zIndex: 9999 }}
      exit={{ backgroundColor: 'rgba(90, 9, 20, 0)' }} // Fade out the solid background
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <motion.img 
        layoutId="brand-logo"
        src={logoLight} // Always use light logo on the dark burgundy background
        alt="Anorthmedia" 
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 2.5, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // smooth cubic-bezier
        style={{ height: '40px' }} 
      />
    </motion.div>
  );
}
