import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-5 container" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }}>
        <h2 className="mb-4" style={{ fontFamily: "'Helvetica Now Display ExtraBold', 'Arial Black', sans-serif", fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', fontSize: 'clamp(2rem, 8vw, 4.5rem)', maxWidth: '900px' }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingRight: '0.1em' }}>The experience behind a </span>
          North media.
        </h2>
      </motion.div>
      <div className="opacity-75 mt-5 text-start px-2 px-md-0" style={{ maxWidth: '800px', lineHeight: 'clamp(1.4, 3vw, 1.8)', fontSize: 'clamp(1rem, 4vw, 1.25rem)' }}>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-3 mb-md-4">
          Our experience spans artists, content creators, restaurants, and businesses, giving us a broad understanding of the digital world.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.3 }} className="mb-3 mb-md-4">
          With a skilled team combining creativity, technology, and industry knowledge, we work on everything from social media management and content creation to website development and brand building.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.4 }}>
          Every project adds to our experience and inspires us to find new ways to help brands grow, connect with their audiences, and build a stronger online presence.
        </motion.p>
      </div>
    </section>
  );
}
