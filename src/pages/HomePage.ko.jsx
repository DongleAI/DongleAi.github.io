import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
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
          Dongle AI: 지능의 미래를 개척하다
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-8 text-xl md:text-2xl text-fuchsia-300 max-w-3xl relative z-10"
        >
          Dongle AI는 안전, 혁신 및 인간 중심 디자인에 중점을 두고 인공 지능 발전에 전념하고 있습니다.
        </motion.p>
      </section>

      {/* Product Intro Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="https://via.placeholder.com/600x400" alt="Product" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h2 className="text-4xl font-bold text-white">Dongle 1.5</h2>
            <p className="mt-4 text-lg text-slate-400">당사의 최신 플래그십 모델인 Dongle 1.5는 복잡한 작업, 창의적인 생성 및 효율적인 문제 해결을 위한 탁월한 성능을 제공합니다.</p>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg">
                Dongle 1.5 알아보기
              </button>
              <button className="px-6 py-3 border border-slate-700 rounded-full text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors">
                모델에 대해 자세히 알아보기
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-semibold text-white leading-relaxed">
            "내일의 세상 뒤에 있는 지능을 움직이는 것은 무엇일까요?"
          </motion.blockquote>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-8 text-lg text-slate-400 leading-relaxed">
            Dongle AI는 인류에게 힘을 실어주고 더 안전하고 번영하는 미래에 기여하는 지능형 시스템을 구축하기 위해 노력하고 있습니다.
          </motion.p>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-4 text-lg text-slate-400 leading-relaxed">
            강력한 AI 개발은 깊은 책임감을 바탕으로 이루어져야 한다고 믿습니다. 우리는 야심찬 기술 발전과 엄격한 윤리적 고려 사이의 균형을 맞추는 접근 방식을 취합니다.
          </motion.p>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.6 }} className="mt-4 text-lg text-slate-400 leading-relaxed">
            지속적인 연구, 투명한 정책 및 사용자 중심 제품 설계를 통해 책임감 있는 AI 혁신의 표준을 제시하기 위해 노력합니다.
          </motion.p>
        </div>
      </section>

      {/* Safety and Academy Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 bg-slate-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white">AI 안전에 대한 우리의 약속</h3>
          <a href="#" className="mt-4 inline-flex items-center text-fuchsia-400 hover:underline">
            AI 안전 원칙 살펴보기 <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 bg-slate-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white">Dongle AI의 책임감 있는 개발 프레임워크</h3>
          <a href="#" className="mt-4 inline-flex items-center text-fuchsia-400 hover:underline">
            개발 가이드라인 이해하기 <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6 bg-slate-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white">Dongle AI Academy: 지능으로 구축하기</h3>
          <a href="#" className="mt-4 inline-flex items-center text-fuchsia-400 hover:underline">
            Dongle AI Academy 참여하기 <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </section>

    </div>
  );
}
