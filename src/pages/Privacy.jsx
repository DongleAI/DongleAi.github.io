import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import AiNav from '../components/AiNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const SectionTitle = ({ tag, title }) => (
  <div className="mb-8">
    {tag && <p className="text-sm font-semibold text-fuchsia-400 tracking-widest uppercase">{tag}</p>}
    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
  </div>
);

const Callout = ({ title, subtitle, cta, href = '#' }) => (
  <div className="my-8 p-6 bg-slate-800 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
    <div className="flex items-center">
      <ShieldCheck className="w-10 h-10 text-fuchsia-400 mr-4 shrink-0" />
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-slate-400">{subtitle}</p>
      </div>
    </div>
    <a href={href} className="shrink-0 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700">
      {cta}
    </a>
  </div>
);

const InfoSection = ({ id, sectionKey, t }) => {
  const title = t(`${sectionKey}.title`);
  const subtitle = t(`${sectionKey}.subtitle`);
  const paragraphs = Object.keys(t(sectionKey, { returnObjects: true }))
    .filter(key => key.startsWith('p'))
    .map(key => t(`${sectionKey}.${key}`));

  return (
    <section id={id} className="py-16">
      <SectionTitle title={title} />
      {subtitle && <p className="text-xl text-slate-300 mb-8">{subtitle}</p>}
      <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
};

const PrivacyPage = ({ ns }) => {
  const { t } = useTranslation([ns, 'translation']);

  const navItems = Object.entries(t('privacy:nav', { returnObjects: true })).map(([key, value]) => ({
    id: key,
    label: value,
  }));

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Hero */}
      <header className="text-center px-6 py-24 sm:py-32">
        <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">{t('privacy:title')}</motion.h1>
        <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mt-6 text-lg text-slate-300 max-w-4xl mx-auto">{t('privacy:introduction.p1')}</motion.p>
        <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="mt-4 text-lg text-slate-300 max-w-4xl mx-auto">{t('privacy:introduction.p2')}</motion.p>
      </header>

      <AiNav items={navItems} />

      <main className="max-w-4xl mx-auto px-6 divide-y divide-slate-800">
        {/* Introduction */}
        <section id="introduction" className="py-16">
          <Callout {...t('privacy:introduction.checkup', { returnObjects: true })} />
          <p className="text-center text-sm text-slate-500 my-8">{t('privacy:introduction.meta')}</p>
          <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>{t('privacy:introduction.p3')}</p>
            <ul>{t('privacy:introduction.services_list', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}</ul>
            <p>{t('privacy:introduction.p4')}</p>
            <p>{t('privacy:introduction.p5')}</p>
          </div>
        </section>

        {/* Other Sections */}
        {navItems.slice(1).map(item => (
          <InfoSection key={item.id} id={item.id} sectionKey={`privacy:${item.id}`} t={t} />
        ))}
      </main>
    </div>
  );
};

export default PrivacyPage;