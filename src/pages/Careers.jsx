import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight, Briefcase, MapPin } from 'lucide-react';
import AiNav from '../components/AiNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const Hero = ({ t }) => (
  <header className="text-center px-6 py-32 sm:py-40 bg-slate-800/50">
    <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="text-sm font-semibold text-fuchsia-400 tracking-widest uppercase">{t('careers:hero.title')}</motion.h1>
    <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto">{t('careers:hero.subtitle')}</motion.p>
    <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="mt-8">
      <a href="#open-roles" className="inline-block px-8 py-4 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg">
        {t('careers:hero.cta')}
      </a>
    </motion.div>
  </header>
);

const Collaboration = ({ t }) => (
  <section id="collaboration" className="py-24 sm:py-32">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">{t('careers:collaboration.title')}</h2>
      <div className="mt-12 prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
        <p>{t('careers:collaboration.p1')}</p>
        <p>{t('careers:collaboration.p2')}</p>
        <p>{t('careers:collaboration.p3')}</p>
      </div>
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-white text-center">{t('careers:collaboration.inside.title')}</h3>
        <p className="text-slate-400 text-center mt-4 max-w-2xl mx-auto">{t('careers:collaboration.inside.subtitle')}</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t('careers:collaboration.inside.videos', { returnObjects: true }).map(video => (
            <a key={video.name} href={video.link} className="group">
              <div className="aspect-w-16 aspect-h-9 bg-slate-800 rounded-lg overflow-hidden">
                <img src={`https://via.placeholder.com/400x225.png/0f172a/94a3b8?text=${video.name}`} alt={video.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-white group-hover:text-fuchsia-400">{video.name}</h4>
              <p className="text-slate-400">{video.topic}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Mission = ({ t }) => (
  <section id="mission" className="py-24 sm:py-32 bg-slate-800/50">
    <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">{t('careers:mission.title')}</h2>
        <p className="mt-6 prose prose-invert prose-lg text-slate-300">{t('careers:mission.p1')}</p>
      </div>
      <div className="aspect-w-1 aspect-h-1 bg-slate-800 rounded-lg overflow-hidden">
        <img src="https://via.placeholder.com/500x500.png/0f172a/94a3b8?text=Team" alt={t('careers:mission.image_alt')} className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

const TeamSection = ({ t, teamKey }) => (
  <div className="grid md:grid-cols-2 gap-12 items-center py-12">
    <div className={`aspect-w-1 aspect-h-1 bg-slate-800 rounded-lg overflow-hidden ${teamKey === 'engineering' || teamKey === 'responsibility' || teamKey === 'operations' ? 'md:order-last' : ''}`}>
      <img src={`https://via.placeholder.com/500x500.png/0f172a/94a3b8?text=${t(`careers:teams.${teamKey}.title`)}`} alt={t(`careers:teams.${teamKey}.image_alt`)} className="w-full h-full object-cover" />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white">{t(`careers:teams.${teamKey}.title`)}</h3>
      <p className="mt-4 prose prose-invert prose-lg text-slate-300">{t(`careers:teams.${teamKey}.description`)}</p>
    </div>
  </div>
);

const Teams = ({ t }) => (
  <section id="teams" className="py-24 sm:py-32">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">{t('careers:teams.title')}</h2>
      <div className="mt-20 divide-y divide-slate-800">
        {['research', 'engineering', 'science', 'responsibility', 'product', 'operations'].map(key => (
          <TeamSection key={key} t={t} teamKey={key} />
        ))}
      </div>
      <figure className="mt-20 border-l-4 border-fuchsia-500 pl-8">
        <blockquote className="text-2xl font-semibold text-white">
          <p>"{t('careers:teams.quote.text')}"</p>
        </blockquote>
        <figcaption className="mt-4 text-slate-400">
          {t('careers:teams.quote.author')} <span className="text-slate-500">/ {t('careers:teams.quote.role')}</span>
        </figcaption>
      </figure>
    </div>
  </section>
);

const OpenRoles = ({ t }) => (
  <section id="open-roles" className="py-24 sm:py-32 bg-slate-800/50">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">{t('careers:openRoles.title')}</h2>
      <p className="mt-4 text-lg text-slate-400 text-center max-w-3xl mx-auto">{t('careers:openRoles.p1')}</p>
      <div className="mt-12 bg-slate-900 rounded-lg">
        <div className="p-4 flex justify-between items-center border-b border-slate-800">
          <button className="text-sm text-fuchsia-400 hover:underline">{t('careers:openRoles.filter.reset')}</button>
          <p className="text-sm text-slate-400">{t('careers:openRoles.filter.jobsFound')}</p>
        </div>
        <div className="divide-y divide-slate-800">
          {t('careers:openRoles.jobs', { returnObjects: true }).map((job, index) => (
            <div key={index} className="p-6 grid md:grid-cols-3 gap-4 items-center hover:bg-slate-800/50">
              <h3 className="md:col-span-2 text-lg font-semibold text-white">{job.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 text-sm text-slate-400">
                <span className="flex items-center"><Briefcase className="w-4 h-4 mr-2" />{job.team}</span>
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{job.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CareersPage = ({ ns }) => {
  const { t } = useTranslation([ns, 'translation']);

  const navItems = [
    { id: 'collaboration', label: t('careers:nav.collaboration') },
    { id: 'mission', label: t('careers:nav.mission') },
    { id: 'teams', label: t('careers:nav.teams') },
    { id: 'open-roles', label: t('careers:nav.openRoles') },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <Hero t={t} />
      <AiNav items={navItems} />
      <main>
        <Collaboration t={t} />
        <Mission t={t} />
        <Teams t={t} />
        <OpenRoles t={t} />
      </main>
    </div>
  );
};

export default CareersPage;