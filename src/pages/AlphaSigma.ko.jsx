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

export default function AlphaSigmaPage() {
  const hero = {
    title: "지능의 핵심 이해",
    tagline: "AlphaSigma는 AI 능력의 한계를 뛰어넘는 차세대 기초 모델입니다.",
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
        title="일반 지능을 위한 새로운 아키텍처"
        content="AlphaSigma는 텍스트, 이미지, 오디오 등 다양한 데이터 유형에 걸쳐 전례 없는 정확도로 더 효율적인 학습을 가능하게 하는 새로운 신경망 아키텍처를 도입합니다."
      />
      <Section
        id="impact"
        title="과학적 발견 가속화"
        content="복잡한 과학 데이터를 이해함으로써 AlphaSigma는 의학, 재료 과학, 기후 변화와 같은 분야의 연구를 가속화할 준비가 되어 있습니다."
      />
    </div>
  );
};
