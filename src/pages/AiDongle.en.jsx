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
    const productName = "Dongle";
    const hero = {
        title: "Dongle AI",
        tagline: "Our best AI models",
        subtext: "Experience unprecedented power, speed, and reliability in a single, unified platform.",
    };
    const models = [
        {
            icon: null,
            title: "Dongle Pro",
            description: "The high-performance multimodal model.",
        },
        {
            icon: null,
            title: "Dongle Flash",
            description: "The low-latency, real-time processing model.",
        },
        {
            icon: null,
            title: "Dongle Lite",
            description: "The lightweight model optimized for edge devices.",
        },
    ];
    const performanceFeatures = [
        {
            icon: null,
            title: "Next-Level Reasoning",
            description: "Achieve state-of-the-art results across major industry benchmarks.",
        },
        {
            icon: null,
            title: "Unmatched Speed",
            description: "Deliver results faster than ever, minimizing latency for real-time applications.",
        },
    ];
    const performanceTable = [
        {
            metric: "ELO Score",
            value: "1.2",
            competitorA: "1.5",
            competitorB: "1.8",
            previousValue: "2.0",
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
                    performanceFeatures={performanceFeatures} 
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
