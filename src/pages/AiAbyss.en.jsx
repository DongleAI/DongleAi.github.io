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
    const productName = "Abyss";
    const hero = {
        title: "Abyss",
        tagline: "Unleash your creativity with our advanced image generation AI",
        subtext: "Transform your ideas into stunning visuals with unparalleled detail and style.",
    };
    const showcaseData = [
        { type: 'image', src: 'https://via.placeholder.com/600x400?text=Abyss+Image+1', prompt: "A futuristic city at sunset with flying cars." },
        { type: 'image', src: 'https://via.placeholder.com/600x400?text=Abyss+Image+2', prompt: "An enchanted forest with glowing flora and fauna." },
        { type: 'image', src: 'https://via.placeholder.com/600x400?text=Abyss+Image+3', prompt: "A serene landscape with a hidden waterfall and ancient ruins." },
    ];
    const performanceTable = [
        {
            metric: "Quality",
            value: "90",
            competitorA: "85",
            competitorB: "80",
            previousValue: "75",
        },
    ];

    const navItems = [
        { id: "showcase", label: "Showcase" },
        { id: "performance", label: "Performance" },
        { id: "safety", label: "Safety" },
        { id: "build", label: "Build" },
    ];

    return (
        <div className="min-h-screen w-full bg-slate-900 text-slate-100 font-sans overflow-x-hidden">
            <AiHero 
                productName={productName} 
                heroTitle={hero.title} 
                heroTagline={hero.tagline} 
                heroSubtext={hero.subtext}
                ctaChat="Chat with Dongle"
                ctaBuildApi="Build with Dongle"
            />
            <AiNav items={navItems} />
            <AiShowcase showcaseData={showcaseData} title="Explore Our Creations" promptLabel="Prompt:" />
            <section id="performance" className="py-24">
                <AiPerformance title="Performance Benchmarks" subtitle="Experience superior benchmark performance compared to competitors." productName={productName} performanceTable={performanceTable} SectionTitle={SectionTitle} />
            </section>

            <section id="safety" className="py-24">
                <AiSafety title="Safety and Responsibility" subtitle="We are committed to responsible AI development, prioritizing safety and reliability." SectionTitle={SectionTitle} />
            </section>

            <section id="build" className="py-24">
                <AiBuild title="Build with Dongle" subtitle="Leverage our powerful API and broad ecosystem to build next-generation applications." SectionTitle={SectionTitle} />
            </section>

        </div>
    );
}
