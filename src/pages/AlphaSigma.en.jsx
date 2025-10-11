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

export default function AlphaSigmaPage() {
  const hero = {
    title: "Understanding the Core of Intelligence",
    tagline: "AlphaSigma is our next-generation foundational model, pushing the boundaries of AI capabilities.",
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
        title="A New Architecture for General Intelligence"
        content="AlphaSigma introduces a novel neural architecture that allows for more efficient learning across different data types, including text, images, and audio, with unprecedented accuracy."
      />
      <Section
        id="impact"
        title="Accelerating Scientific Discovery"
        content="By understanding complex scientific data, AlphaSigma is poised to accelerate research in fields like medicine, materials science, and climate change."
      />
    </div>
  );
};
