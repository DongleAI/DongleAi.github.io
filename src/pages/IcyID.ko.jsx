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

export default function IcyIDPage() {
  const hero = {
    title: "AI로 신원 확인",
    tagline: "IcyID는 고급 생체 인식 및 데이터 분석을 사용하여 강력하고 안전한 신원 확인을 제공합니다.",
  };

  const navItems = [
    { id: 'breakthrough', label: "돌파구" },
    { id: 'impact', label: "영향" },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-100 font-sans overflow-x-hidden">
      <AiHero 
        heroTitle={hero.title} 
        heroTagline={hero.tagline} 
        ctaChat="채팅 시작"
        ctaBuildApi="API 구축"
      />
      <AiNav items={navItems} />
      <Section
        id="breakthrough"
        title="차세대 생체 인식 분석"
        content="IcyID는 여러 생체 인식 마커를 동시에 분석하는 새로운 딥 러닝 접근 방식을 활용하여 실제 조건에서 99.9% 이상의 정확도를 달성합니다."
      />
      <Section
        id="impact"
        title="디지털 보안 및 신뢰 강화"
        content="신뢰할 수 있고 사용자 친화적인 확인 시스템을 제공함으로써 IcyID는 온라인 거래를 보호하고 개인 데이터를 보호하며 디지털 생태계에 대한 신뢰를 구축하는 데 도움을 줍니다."
      />
    </div>
  );
};
