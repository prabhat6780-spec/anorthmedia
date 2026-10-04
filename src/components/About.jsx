import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="row">
        <div className="col-12 col-md-10 col-lg-8">
          <h2 className="mb-4" style={{ fontFamily: "'Helvetica Now Display ExtraBold', 'Arial Black', sans-serif", fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', fontSize: 'clamp(1.8rem, 5vw, 4rem)' }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingRight: '0.1em' }}>Behind </span>
            every great brand<br />is a 
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingLeft: '0.1em', paddingRight: '0.1em' }}> story </span>
            worth telling.
          </h2>
          <div className="fs-5 opacity-75" style={{ lineHeight: 1.8 }}>
            <p className="mb-4">
              <strong style={{ fontFamily: "'Helvetica Now Display ExtraBold', 'Arial Black', sans-serif", fontWeight: 900 }}>North Media is a creative and digital growth agency.</strong>
            </p>
            <p className="mb-4">
              We believe every brand, artist and business has the potential to reach a wider audience. Our role is to bring that potential to life through thoughtful strategy, creative storytelling and smart digital solutions.
            </p>
            <p>
              From managing social media and building online identities to developing websites and supporting digital growth, we bring ideas and execution together to help our clients move forward.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
