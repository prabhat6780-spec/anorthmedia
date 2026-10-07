import { motion } from 'framer-motion';
import { useEffect } from 'react';
import logoDark from '../assets/anorthmedia.PNG';
import logoLight from '../assets/anorthmedia1.PNG';

export default function IntroAnimation({ onComplete, theme }) {
  useEffect(() => {
    // Unmount the intro after 2.0 seconds to trigger the logo layout transition to the navbar faster
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: theme === 'dark' ? '#5A0914' : '#FAF9F6', zIndex: 9999 }}
      exit={{ backgroundColor: theme === 'dark' ? 'rgba(90, 9, 20, 0)' : 'rgba(250, 249, 246, 0)' }} // Fade out the solid background
      transition={{ duration: 1.0, ease: 'easeInOut' }}
    >
      <motion.img 
        layoutId="brand-logo"
        src={theme === 'dark' ? logoDark : logoLight} // Use the theme-appropriate logo
        alt="Anorthmedia" 
        initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ 
          default: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
          layout: { duration: 2.2, ease: 'easeInOut' }
        }}
        style={{ height: 'clamp(70px, 12vw, 100px)' }} 
      />
    </motion.div>
  );
}
