import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-5 container" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2 className="mb-4" style={{ fontFamily: "'Helvetica Now Display ExtraBold', 'Arial Black', sans-serif", fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', maxWidth: '900px' }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingRight: '0.1em' }}>The experience behind a </span>
          North media.
        </h2>
      </motion.div>
      <div className="fs-5 opacity-75 mt-5 text-start" style={{ maxWidth: '800px', lineHeight: 1.8 }}>
        <p className="mb-4">
          Our experience spans artists, content creators, restaurants, and businesses, giving us a broad understanding of the digital world.
        </p>
        <p className="mb-4">
          With a skilled team combining creativity, technology, and industry knowledge, we work on everything from social media management and content creation to website development and brand building.
        </p>
        <p>
          Every project adds to our experience and inspires us to find new ways to help brands grow, connect with their audiences, and build a stronger online presence.
        </p>
      </div>
    </section>
  );
}
