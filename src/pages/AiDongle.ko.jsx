import { motion } from "framer-motion";

import AiHero from "../components/AiHero";
import AiNav from "../components/AiNav";
import AiModels from "../components/AiModels";
import AiPerformance from "../components/AiPerformance";
import AiSafety from "../components/AiSafety";
import AiBuild from "../components/AiBuild";

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

export default function AiDongle({ getIconComponent }) {
    const productName = "동글";
    const hero = {
        title: "동글 AI",
        tagline: "최고의 AI 모델",
        subtext: "단일 통합 플랫폼에서 전례 없는 성능, 속도 및 안정성을 경험하십시오.",
    };
    const models = [
        {
            icon: null,
            title: "동글 프로",
            description: "고성능 멀티모달 모델입니다.",
        },
        {
            icon: null,
            title: "동글 플래시",
            description: "지연 시간이 짧은 실시간 처리 모델입니다.",
        },
        {
            icon: null,
            title: "동글 라이트",
            description: "에지 장치에 최적화된 경량 모델입니다.",
        },
    ];
    const performanceFeatures = [
        {
            icon: null,
            title: "차세대 추론",
            description: "주요 산업 벤치마크에서 최첨단 결과를 달성하십시오.",
        },
        {
            icon: null,
            title: "타의 추종을 불허하는 속도",
            description: "실시간 애플리케이션의 대기 시간을 최소화하여 그 어느 때보다 빠르게 결과를 제공합니다.",
        },
    ];
    const performanceTable = [
        {
            metric: "ELO 점수",
            value: "1.2",
            competitorA: "1.5",
            competitorB: "1.8",
            previousValue: "2.0",
        },
    ];

    const navItems = [
        { id: "models", label: "모델" },
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

            <section id="models" className="py-24">
                <AiModels
                    title="핵심 모델 라인업"
                    subtitle="다양한 목적에 맞춰 최적화된 모델 라인업을 경험하세요."
                    models={models}
                    getIconComponent={getIconComponent}
                    SectionTitle={SectionTitle}
                    learnMore="더 알아보기"
                />
            </section>

            <section id="performance" className="py-24">
                <AiPerformance 
                    title="성능 비교"
                    subtitle="타사 대비 압도적인 벤치마크 성능을 경험하세요."
                    productName={productName} 
                    performanceFeatures={performanceFeatures} 
                    performanceTable={performanceTable} 
                    SectionTitle={SectionTitle} 
                />
            </section>

            <section id="safety" className="py-24">
                <AiSafety 
                    title="안전성 및 책임감"
                    subtitle="안전성과 신뢰성을 최우선으로, 책임감 있는 AI 개발에 전념합니다."
                    SectionTitle={SectionTitle} 
                />
            </section>

            <section id="build" className="py-24">
                <AiBuild 
                    title="Dongle로 구축"
                    subtitle="강력한 API와 폭넓은 생태계를 활용하여 차세대 애플리케이션을 구축하세요."
                    SectionTitle={SectionTitle} 
                />
            </section>
        </div>
    );
}
