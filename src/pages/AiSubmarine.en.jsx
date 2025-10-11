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

export default function AiSubmarine() {
    const productName = "Submarine";
    const hero = {
        title: "Submarine Model",
        tagline: "Generate stunning videos from text with our advanced AI",
        subtext: "Bring your stories to life with dynamic and realistic video content.",
    };
    const showcaseData = [
        { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', prompt: "A serene underwater scene with colorful fish and coral reefs." },
        { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4', prompt: "A bustling city street at night with neon lights and reflections." },
    ];
    const performanceTable = [
        {
            metric: "Resolution",
            value: "1080p",
            competitorA: "720p",
            competitorB: "480p",
            previousValue: "360p",
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
