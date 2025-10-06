import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage({ ns }) {
  const { t } = useTranslation([ns, "translation"]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-[70vh] pb-24 pt-40 bg-slate-900 overflow-hidden">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white max-w-5xl leading-tight relative z-10"
        >
          {t('home:hero.title')}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-8 text-xl md:text-2xl text-fuchsia-300 max-w-3xl relative z-10"
        >
          {t('home:hero.subtitle')}
        </motion.p>
      </section>

      {/* Product Intro Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="https://via.placeholder.com/600x400" alt="Product" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h2 className="text-4xl font-bold text-white">{t('home:product.title')}</h2>
            <p className="mt-4 text-lg text-slate-400">{t('home:product.description')}</p>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg">
                {t('home:product.announcement')}
              </button>
              <button className="px-6 py-3 border border-slate-700 rounded-full text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors">
                {t('home:product.learnMore')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-semibold text-white leading-relaxed">
            "{t('home:mission.quote')}"
          </motion.blockquote>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-8 text-lg text-slate-400 leading-relaxed">
            {t('home:mission.paragraph1')}
          </motion.p>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-4 text-lg text-slate-400 leading-relaxed">
            {t('home:mission.paragraph2')}
          </motion.p>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.6 }} className="mt-4 text-lg text-slate-400 leading-relaxed">
            {t('home:mission.paragraph3')}
          </motion.p>
        </div>
      </section>

      {/* Safety and Academy Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 bg-slate-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white">{t('home:safetyViews.title')}</h3>
          <a href="#" className="mt-4 inline-flex items-center text-fuchsia-400 hover:underline">
            {t('home:safetyViews.link')} <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 bg-slate-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white">{t('home:scalingPolicy.title')}</h3>
          <a href="#" className="mt-4 inline-flex items-center text-fuchsia-400 hover:underline">
            {t('home:scalingPolicy.link')} <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6 bg-slate-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white">{t('home:academy.title')}</h3>
          <a href="#" className="mt-4 inline-flex items-center text-fuchsia-400 hover:underline">
            {t('home:academy.link')} <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </section>

    </div>
  );
}