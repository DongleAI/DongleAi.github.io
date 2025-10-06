import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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

export default function IcyIDPage({ ns }) {
  const { t } = useTranslation([ns, 'translation']);

  const hero = {
    title: t(`${ns}:hero.title`),
    tagline: t(`${ns}:hero.tagline`),
  };

  const navItems = [
    { id: 'breakthrough', label: t(`${ns}:nav.breakthrough`) },
    { id: 'impact', label: t(`${ns}:nav.impact`) },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-100 font-sans overflow-x-hidden">
      <AiHero heroTitle={hero.title} heroTagline={hero.tagline} />
      <AiNav items={navItems} />
      <Section
        id="breakthrough"
        title={t(`${ns}:breakthrough.title`)}
        content={t(`${ns}:breakthrough.content`)}
      />
      <Section
        id="impact"
        title={t(`${ns}:impact.title`)}
        content={t(`${ns}:impact.content`)}
      />
    </div>
  );
};