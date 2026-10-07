import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="container d-flex align-items-center" style={{ minHeight: 'clamp(70vh, 100vh, 1080px)', paddingTop: 'clamp(80px, 15vh, 120px)', paddingBottom: 'clamp(40px, 10vh, 120px)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }} className="row w-100">
        <div className="col-12 col-md-10 col-lg-8 px-4 px-md-3">
          <h2 className="mb-3 mb-md-4" style={{ fontFamily: "'Helvetica Now Display ExtraBold', 'Arial Black', sans-serif", fontWeight: 900, lineHeight: 'clamp(1.05, 3vw, 1.1)', letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 9vw, 4rem)' }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingRight: '0.1em' }}>Behind </span>
            every great brand<br className="d-none d-md-block" />
            <span className="d-inline d-md-none"> </span>is a
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingLeft: '0.1em', paddingRight: '0.1em' }}> story </span>
            worth telling.
          </h2>
          <div className="opacity-75" style={{ lineHeight: 'clamp(1.4, 3vw, 1.8)', fontSize: 'clamp(1rem, 4vw, 1.25rem)' }}>
            <p className="mb-3 mb-md-4">
              <strong style={{ fontFamily: "'Helvetica Now Display ExtraBold', 'Arial Black', sans-serif", fontWeight: 900 }}>Anorth Media is a creative and digital growth agency.</strong>
            </p>
            <p className="mb-3 mb-md-4">
              We believe every brand, artist and business has the potential to reach a wider audience. Our role is to bring that potential to life through thoughtful strategy, creative storytelling and smart digital solutions.
            </p>
            <p className="mb-0">
              From managing social media and building online identities to developing websites and supporting digital growth, we bring ideas and execution together to help our clients move forward.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
