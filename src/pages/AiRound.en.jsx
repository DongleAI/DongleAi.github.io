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

export default function AiRound({ getIconComponent }) {
    const productName = "Round";
    const hero = {
        title: "Round Model",
        tagline: "Our lightweight SLM for efficient on-device AI",
        subtext: "Experience cutting-edge performance in a compact and optimized package.",
    };
    const models = [
        {
            icon: null,
            title: "Round 3",
            description: "The third iteration of the Round model.",
        },
        {
            icon: null,
            title: "Round 2n",
            description: "The 2n version of the Round model.",
        },
        {
            icon: null,
            title: "ShieldRound 1",
            description: "The shielded version of the Round model.",
        },
    ];
    const performanceTable = [
        {
            metric: "Speed",
            value: "1.0",
            competitorA: "1.2",
            competitorB: "1.5",
            previousValue: "1.8",
        },
        {
            metric: "Accuracy",
            value: "99",
            competitorA: "96",
            competitorB: "93",
            previousValue: "91",
        },
    ];

    const navItems = [
        { id: "models", label: "Models" },
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

            <section id="models" className="py-24">
                <AiModels
                    title="Our Core Models"
                    subtitle="Explore our lineup of models optimized for various purposes."
                    models={models}
                    getIconComponent={getIconComponent}
                    SectionTitle={SectionTitle}
                    learnMore="Learn more"
                />
            </section>

            <section id="performance" className="py-24">
                <AiPerformance 
                    title="Performance Benchmarks"
                    subtitle="Experience superior benchmark performance compared to competitors."
                    productName={productName} 
                    performanceTable={performanceTable} 
                    SectionTitle={SectionTitle} 
                    previousLabel="Previous"
                />
            </section>

            <section id="safety" className="py-24">
                <AiSafety 
                    title="Safety and Responsibility"
                    subtitle="We are committed to responsible AI development, prioritizing safety and reliability."
                    SectionTitle={SectionTitle} 
                    transparencyTitle="Transparent and Trustworthy AI"
                    description="Safety is integrated into every step of development, from model training to deployment, ensuring responsible usage."
                    learnMoreLink="Learn more about our Safety Principles"
                />
            </section>

            <section id="build" className="py-24">
                <AiBuild 
                    SectionTitle={SectionTitle} 
                    forDevelopers="For developers"
                    title="Dongle’s advanced thinking, native multimodality and massive context window empowers developers to build next-generation experiences."
                    startBuilding="Start building"
                    ecosystemTitle="Developer Ecosystem"
                    ecosystemDescription="Build with cutting-edge generative AI models and tools to make AI helpful for everyone."
                    aiStudio="Dongle AI Labs"
                    aiStudioDescription="Build with the latest models from Dongle AI DeepMind"
                    geminiApi="Dongle API"
                    geminiApiDescription="Easily integrate Dongle AI’s most capable AI model to your apps"
                    learnMore="Learn more"
                />
            </section>
        </div>
    );
}
