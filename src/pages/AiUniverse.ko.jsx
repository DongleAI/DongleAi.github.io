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

export default function AiUniverse() {
    const productName = "유니버스";
    const hero = {
        title: "유니버스 모델",
        tagline: "AI 기반 생성 엔진으로 독창적인 음악을 작곡하세요",
        subtext: "끝없는 음악적 가능성을 탐색하고 독특한 사운드스케이프를 만드세요.",
    };
    const showcaseData = [
        { type: 'audio', src: 'https://www.w3schools.com/html/horse.mp3', prompt: "치솟는 현악기와 강력한 금관악기가 있는 서사적인 오케스트라 작품." },
        { type: 'audio', src: 'https://www.w3schools.com/html/horse.mp3', prompt: "부드러운 피아노 멜로디와 분위기 있는 패드가 있는 차분한 앰비언트 트랙." },
    ];
    const performanceTable = [
        {
            metric: "하모니",
            value: "8.5",
            competitorA: "7.0",
            competitorB: "6.0",
            previousValue: "5.0",
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
                <AiPerformance 
                    title="성능 비교"
                    subtitle="타사 대비 압도적인 벤치마크 성능을 경험하세요."
                    productName={productName} 
                    performanceTable={performanceTable} 
                    SectionTitle={SectionTitle} 
                    previousLabel="이전"
                />
            </section>

            <section id="safety" className="py-24">
                <AiSafety 
                    title="안전성 및 책임감"
                    subtitle="안전성과 신뢰성을 최우선으로, 책임감 있는 AI 개발에 전념합니다."
                    SectionTitle={SectionTitle} 
                    transparencyTitle="투명하고 신뢰할 수 있는 AI"
                    description="모델 훈련부터 배포까지 개발의 모든 단계에 안전성이 통합되어, 책임감 있는 사용을 보장합니다."
                    learnMoreLink="안전 원칙에 대해 더 알아보기"
                />
            </section>

            <section id="build" className="py-24">
                <AiBuild 
                    SectionTitle={SectionTitle} 
                    forDevelopers="개발자용"
                    title="Dongle의 발전된 사고력, 기본 멀티모달리티, 대규모 컨텍스트 창을 통해 개발자는 차세대 경험을 구축할 수 있습니다."
                    startBuilding="빌드 시작"
                    ecosystemTitle="개발자 생태계"
                    ecosystemDescription="최첨단 생성 AI 모델 및 도구로 구축하여 모든 사람에게 AI가 도움이 되도록 하세요."
                    aiStudio="Dongle AI Labs"
                    aiStudioDescription="Dongle AI의 최신 모델로 구축"
                    geminiApi="Dongle API"
                    geminiApiDescription="Dongle AI의 가장 유능한 AI 모델을 앱에 쉽게 통합"
                    learnMore="더 알아보기"
                />
            </section>

        </div>
    );
}
