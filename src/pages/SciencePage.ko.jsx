import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const SciencePage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <main className="max-w-4xl mx-auto px-6 py-24 sm:py-32 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
        >
          우리의 과학 이니셔티브
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 max-w-3xl mx-auto"
        >
          우리의 과학적 돌파구와 프로젝트를 발견합니다.
        </motion.p>
      </main>
    </div>
  );
};

export default SciencePage;
