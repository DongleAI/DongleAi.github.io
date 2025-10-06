import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Youtube, ArrowRight } from 'lucide-react';
import AiNav from '../components/AiNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const AboutPage = ({ ns }) => {
  const { t } = useTranslation([ns, 'translation']);

  const navItems = [
    { id: 'vision', label: t('about:nav.vision') },
    { id: 'journey', label: t('about:nav.journey') },
    { id: 'models', label: t('about:nav.models') },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Hero */}
      <header className="text-center px-6 py-32 sm:py-40">
        <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="text-sm font-semibold text-fuchsia-400 tracking-widest uppercase">{t('about:hero.title')}</motion.h1>
        <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto">{t('about:hero.subtitle')}</motion.p>
      </header>

      <AiNav items={navItems} />

      {/* Vision Section */}
      <section id="vision" className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">{t('about:vision.title')}</motion.h2>
          <div className="mt-12 prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>{t('about:vision.p1')}</p>
            <p>{t('about:vision.p2')}</p>
            <p>{t('about:vision.p3')}</p>
            <p>{t('about:vision.p4')}</p>
          </div>
          <motion.figure variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 border-l-4 border-fuchsia-500 pl-8">
            <blockquote className="text-2xl font-semibold text-white">
              <p>"{t('about:vision.quote.text')}"</p>
            </blockquote>
            <figcaption className="mt-4 text-slate-400">
              {t('about:vision.quote.author')} <span className="text-slate-500">/ {t('about:vision.quote.role')}</span>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 sm:py-32 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">{t('about:journey.title')}</motion.h2>
          <div className="mt-12 prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>{t('about:journey.p1')}</p>
            <p>{t('about:journey.p2')}</p>
            <p>{t('about:journey.p3')}</p>
            <p>{t('about:journey.p4')}</p>
          </div>

          <div className="my-16 grid gap-8 md:grid-cols-3">
            {t('about:journey.videos', { returnObjects: true }).map(video => (
              <motion.a key={video.title} href={video.youtubeId} target="_blank" rel="noopener noreferrer" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="block bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors group">
                <Youtube className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="font-semibold text-white group-hover:text-fuchsia-400">{video.title}</h3>
                <p className="text-sm text-slate-400 mt-2">Watch on YouTube</p>
              </motion.a>
            ))}
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>{t('about:journey.p5')}</p>
            <p>{t('about:journey.p6')}</p>
            <p>{t('about:journey.p7')}</p>
            <p>{t('about:journey.p8')}</p>
            <p>{t('about:journey.p9')}</p>
          </div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="my-16 bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white">{t('about:journey.research.title')}</h3>
            <p className="text-slate-400 mt-2">{t('about:journey.research.subtitle')}</p>
            <div className="mt-6 space-y-4">
              {t('about:journey.research.items', { returnObjects: true }).map(item => (
                <div key={item.title} className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center mt-6 px-6 py-3 rounded-full text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg">{t('about:journey.research.cta')} <ArrowRight className="ml-2 w-4 h-4" /></a>
          </motion.div>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>{t('about:journey.p10')}</p>
            <p>{t('about:journey.p11')}</p>
            <p>{t('about:journey.p12')}</p>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">{t('about:models.title')}</motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{delay: 0.1}} className="mt-4 text-lg text-slate-400 text-center max-w-2xl mx-auto">{t('about:models.subtitle')}</motion.p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {t('about:models.items', { returnObjects: true }).map(item => (
              <motion.a key={item.title} href={item.link} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="block bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition-colors group">
                <h3 className="text-xl font-bold text-white group-hover:text-fuchsia-400">{item.title}</h3>
                <p className="text-slate-400 mt-2">{item.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;