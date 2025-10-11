import { motion } from 'framer-motion';
import AiHero from '../components/AiHero';
import AiNav from '../components/AiNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({ id, title, content }) => (
  <section id={id} className="py-24">
    <div className="max-w-4xl mx-auto px-6">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center mb-12"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg text-slate-300 leading-relaxed"
      >
        {content}
      </motion.p>
    </div>
  </section>
);

export default function IcyIDPage() {
  const hero = {
    title: "Verifying Identity with AI",
    tagline: "IcyID provides robust and secure identity verification using advanced biometric and data analysis.",
  };

  const navItems = [
    { id: 'breakthrough', label: "Breakthrough" },
    { id: 'impact', label: "Impact" },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-100 font-sans overflow-x-hidden">
      <AiHero 
        heroTitle={hero.title} 
        heroTagline={hero.tagline} 
        ctaChat="Chat with Dongle"
        ctaBuildApi="Build with Dongle"
      />
      <AiNav items={navItems} />
      <Section
        id="breakthrough"
        title="Next-Generation Biometric Analysis"
        content="IcyID utilizes a novel deep learning approach to analyze multiple biometric markers simultaneously, achieving over 99.9% accuracy in real-world conditions."
      />
      <Section
        id="impact"
        title="Enhancing Digital Security and Trust"
        content="By providing a reliable and user-friendly verification system, IcyID is helping to secure online transactions, protect personal data, and build trust in the digital ecosystem."
      />
    </div>
  );
};
