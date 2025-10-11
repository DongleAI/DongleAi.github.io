import { motion } from "framer-motion";

import AiHero from "../components/AiHero";
import AiNav from "../components/AiNav";
import AiPerformance from "../components/AiPerformance";
import AiSafety from "../components/AiSafety";
import AiBuild from "../components/AiBuild";

import AiShowcase from "../components/AiShowcase";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight text-white mb-4"
        >
            {title}
        </motion.h2>
        {subtitle && (
            <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-400 max-w-3xl mx-auto"
            >
                {subtitle}
            </motion.p>
        )}
    </div>
);

export default function AiAbyss() {
    const productName = "어비스";
    const hero = {
        title: "어비스 모델",
        tagline: "고급 이미지 생성 AI로 창의력을 발휘하세요",
        subtext: "비교할 수 없는 디테일과 스타일로 아이디어를 놀라운 비주얼로 변환하세요.",
    };
    const showcaseData = [
        { type: 'image', src: 'https://via.placeholder.com/600x400?text=Abyss+Image+1', prompt: "해질녘 비행차가 있는 미래형 도시." },
        { type: 'image', src: 'https://via.placeholder.com/600x400?text=Abyss+Image+2', prompt: "빛나는 동식물이 있는 마법에 걸린 숲." },
        { type: 'image', src: 'https://via.placeholder.com/600x400?text=Abyss+Image+3', prompt: "숨겨진 폭포와 고대 유적이 있는 고요한 풍경." },
    ];
    const performanceTable = [
        {
            metric: "품질",
            value: "90",
            competitorA: "85",
            competitorB: "80",
            previousValue: "75",
        },
    ];

    const navItems = [
        { id: "showcase", label: "쇼케이스" },
        { id: "performance", label: "성능" },
        { id: "safety", label: "안전성" },
        { id: "build", label: "개발" },
    ];

    return (
        <div className="min-h-screen w-full bg-slate-900 text-slate-100 font-sans overflow-x-hidden">
            <AiHero 
                productName={productName} 
                heroTitle={hero.title} 
                heroTagline={hero.tagline} 
                heroSubtext={hero.subtext}
                ctaChat="채팅 시작"
                ctaBuildApi="API 구축"
            />
            <AiNav items={navItems} />
            <AiShowcase showcaseData={showcaseData} title="우리의 창작물 살펴보기" promptLabel="프롬프트:" />
            <section id="performance" className="py-24">
                <AiPerformance title="성능" subtitle="타사 대비 압도적인 벤치마크 성능을 경험하세요." productName={productName} performanceTable={performanceTable} SectionTitle={SectionTitle} />
            </section>

            <section id="safety" className="py-24">
                <AiSafety title="안전성 및 책임감" subtitle="안전성과 신뢰성을 최우선으로, 책임감 있는 AI 개발에 전념합니다." SectionTitle={SectionTitle} />
            </section>

            <section id="build" className="py-24">
                <AiBuild title="Dongle로 구축" subtitle="강력한 API와 폭넓은 생태계를 활용하여 차세대 애플리케이션을 구축하세요." SectionTitle={SectionTitle} />
            </section>

        </div>
    );
}
