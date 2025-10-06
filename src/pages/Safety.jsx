import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const Section = ({ title, paragraphs }) => (
  <div className="mb-16">
    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-8"
    >
      {title}
    </motion.h2>
    <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
      {paragraphs.map((p, index) => (
        <motion.p
          key={index}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 * index }}
        >
          {p}
        </motion.p>
      ))}
    </div>
  </div>
);

const SafetyPage = ({ ns }) => {
  const { t } = useTranslation([ns, 'translation']);

  const sections = [
    {
      title: t('safety:approach.title'),
      paragraphs: [
        t('safety:approach.p1'),
        t('safety:approach.p2'),
        t('safety:approach.p3'),
        t('safety:approach.p4'),
        t('safety:approach.p5'),
        t('safety:approach.p6'),
        t('safety:approach.p7'),
      ],
    },
    {
      title: t('safety:secureAI.title'),
      paragraphs: [
        t('safety:secureAI.p1'),
        t('safety:secureAI.p2'),
        t('safety:secureAI.p3'),
      ],
    },
    {
      title: t('safety:benefitsEveryone.title'),
      paragraphs: [
        t('safety:benefitsEveryone.p1'),
        t('safety:benefitsEveryone.p2'),
        t('safety:benefitsEveryone.p3'),
        t('safety:benefitsEveryone.p4'),
        t('safety:benefitsEveryone.p5'),
        t('safety:benefitsEveryone.p6'),
        t('safety:benefitsEveryone.p7'),
        t('safety:benefitsEveryone.p8'),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <main className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {t('safety:title')}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-fuchsia-300 max-w-3xl mx-auto">
            {t('safety:hero.title')}
          </p>
        </motion.div>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <Section key={index} title={section.title} paragraphs={section.paragraphs} />
        ))}
      </main>
    </div>
  );
};

export default SafetyPage;