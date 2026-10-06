import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'Social Media Management',
      desc: "Building and managing your brand's presence across social platforms.",
    },
    {
      title: 'Website Design & Development',
      desc: 'Creating modern, responsive websites that bring your business online.',
    },
    {
      title: 'Branding & Identity',
      desc: 'Giving your brand a unique identity that stands out.',
    },
    {
      title: 'Content Creation',
      desc: 'Creating engaging content that connects your brand with its audience.',
    },
    {
      title: 'Google Business & Online Presence',
      desc: 'Making your business easier to discover through Google and local search.',
    }
  ];

  return (
    <section id="services" className="py-5 my-5 container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }} className="mb-5">
        <h2 className="mb-4" style={{ fontFamily: "'Helvetica Now Display ExtraBold', 'Arial Black', sans-serif", fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 600, letterSpacing: '-0.02em', paddingRight: '0.1em' }}>What </span>
          we do.
        </h2>
        <p className="lead opacity-75 fs-5" style={{ maxWidth: '800px' }}>
          We help brands and businesses build their digital presence, connect with their audience and grow through creative ideas and smart digital solutions.
        </p>
      </motion.div>
      <div className="row g-4 mt-2 justify-content-center">
        {services.map((service, index) => (
          <motion.div key={index} className="col-md-6 col-lg-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <div className="card h-100 border-0 p-4 shadow-sm text-center" style={{ backgroundColor: 'rgba(128,128,128,0.02)', borderRadius: '12px', color: 'var(--text-color)' }}>
              <div className="card-body d-flex flex-column justify-content-center">
                <h3 className="h4 fw-bold mb-3">{service.title}</h3>
                <p className="card-text opacity-75">{service.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
