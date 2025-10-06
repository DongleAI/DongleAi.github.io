import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AiNav from '../components/AiNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const Section = ({ id, title, children }) => (
  <motion.section 
    id={id}
    variants={fadeInUp} 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.1 }}
    className="py-12 border-b border-slate-800 last:border-b-0"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>
    <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
      {children}
    </div>
  </motion.section>
);

const SubSection = ({ title, children }) => (
  <div className="mt-8">
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h3>
    <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
      {children}
    </div>
  </div>
);

const TermsPage = ({ ns }) => {
  const { t } = useTranslation([ns, 'translation']);

  const navItems = Object.entries(t('terms:nav', { returnObjects: true })).map(([key, value]) => ({
    id: key,
    label: value,
  }));

  const renderList = (key) => (
    <ul className="list-disc pl-5 space-y-2">
      {t(key, { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <header className="px-6 py-24 sm:py-32 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-slate-400">{t('terms:meta.country_version')}</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-white">{t('terms:title')}</h1>
          <p className="mt-4 text-sm text-slate-500">
            {t('terms:meta.effective_date')} | <a href="#" className="underline hover:text-white">{t('terms:meta.archived_versions')}</a> | <a href="#" className="underline hover:text-white">{t('terms:meta.download_pdf')}</a>
          </p>
        </div>
      </header>

      <AiNav items={navItems} />

      <main className="max-w-4xl mx-auto px-6">
        <Section id="introduction" title={t('terms:introduction.title')}>
          <p>{t('terms:introduction.p1')}</p>
          <p>{t('terms:introduction.p2')}</p>
          {renderList('terms:introduction.list')}
          <p>{t('terms:introduction.p3')}</p>
          <p>{t('terms:introduction.p4')}</p>
        </Section>

        <Section id="relationship" title={t('terms:relationship.title')}>
            <p>{t('terms:relationship.p1')}</p>
        </Section>

        <Section id="using_services" title={t('terms:using_services.title')}>
            <SubSection title={t('terms:using_services.your_account.title')}>
                <p>{t('terms:using_services.your_account.p1')}</p>
                <p>{t('terms:using_services.your_account.p2')}</p>
            </SubSection>
            <SubSection title={t('terms:using_services.on_behalf_of_org.title')}>
                <p>{t('terms:using_services.on_behalf_of_org.p1')}</p>
                {renderList('terms:using_services.on_behalf_of_org.list')}
            </SubSection>
            <SubSection title={t('terms:using_services.communications.title')}>
                <p>{t('terms:using_services.communications.p1')}</p>
                <p>{t('terms:using_services.communications.p2')}</p>
            </SubSection>
        </Section>

        <Section id="content_in_services" title={t('terms:content_in_services.title')}>
            <SubSection title={t('terms:content_in_services.your_content.title')}>
                <p>{t('terms:content_in_services.your_content.p1')}</p>
                <p>{t('terms:content_in_services.your_content.p2')}</p>
                <p>{t('terms:content_in_services.your_content.p3')}</p>
                <p>{t('terms:content_in_services.your_content.p4')}</p>
                <p>{t('terms:content_in_services.your_content.p5')}</p>
            </SubSection>
            <SubSection title={t('terms:content_in_services.google_content.title')}>
                <p>{t('terms:content_in_services.google_content.p1')}</p>
            </SubSection>
            <SubSection title={t('terms:content_in_services.other_content.title')}>
                <p>{t('terms:content_in_services.other_content.p1')}</p>
            </SubSection>
        </Section>

        <Section id="software_in_services" title={t('terms:software_in_services.title')}>
            <p>{t('terms:software_in_services.p1')}</p>
            <p>{t('terms:software_in_services.p2')}</p>
            {renderList('terms:software_in_services.list')}
            <p>{t('terms:software_in_services.p3')}</p>
            <p>{t('terms:software_in_services.p4')}</p>
        </Section>

        <Section id="problems_disagreements" title={t('terms:problems_disagreements.title')}>
            <p>{t('terms:problems_disagreements.p1')}</p>
            {/* Further subsections can be added here if needed */}
        </Section>

        <Section id="about_terms" title={t('terms:about_terms.title')}>
            <p>{t('terms:about_terms.p1')}</p>
            <p>{t('terms:about_terms.p2')}</p>
            <p>{t('terms:about_terms.p3')}</p>
            <p>{t('terms:about_terms.p4')}</p>
            <p>{t('terms:about_terms.p5')}</p>
            <p>{t('terms:about_terms.p6')}</p>
            <p>{t('terms:about_terms.p7')}</p>
            <p>{t('terms:about_terms.p8')}</p>
        </Section>

      </main>
    </div>
  );
};

export default TermsPage;