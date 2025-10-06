import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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

const SectionTitle = ({ titleKey, subTitleKey, t }) => (
    <div className="text-center mb-16">
        <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight text-white mb-4"
        >
            {t(titleKey)}
        </motion.h2>
        {subTitleKey && (
            <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-400 max-w-3xl mx-auto"
            >
                {t(subTitleKey)}
            </motion.p>
        )}
    </div>
);

const sectionMeta = {
    showcase: { titleKey: "nav.showcase" },
    performance: { titleKey: "nav.performance" },
    safety: { titleKey: "nav.safety" },
    build: { titleKey: "nav.build" },
};

export default function AiUniverse({ getIconComponent, ns }) {
    const { t } = useTranslation([ns, "translation"]);

    const productName = t("aiuniverse:productName");
    const hero = {
        title: t("aiuniverse:hero.title"),
        tagline: t("aiuniverse:hero.tagline"),
        subtext: t("aiuniverse:hero.subtext"),
    };
    const showcaseData = [
        { type: 'audio', src: 'https://www.w3schools.com/html/horse.mp3', prompt: t("aiuniverse:showcase.prompt1") },
        { type: 'audio', src: 'https://www.w3schools.com/html/horse.mp3', prompt: t("aiuniverse:showcase.prompt2") },
    ];
    const performanceTable = [
        {
            metric: t("aiuniverse:performance.harmony"),
            value: "8.5",
            competitorA: "7.0",
            competitorB: "6.0",
            previousValue: "5.0",
        },
    ];

    const navItems = Object.entries(sectionMeta).map(([id, meta]) => ({
        id,
        label: t(meta.titleKey),
    }));

    return (
        <div className="min-h-screen w-full bg-slate-900 text-slate-100 font-sans overflow-x-hidden">
            <AiHero productName={productName} heroTitle={hero.title} heroTagline={hero.tagline} heroSubtext={hero.subtext} />
            <AiNav items={navItems} />

            <AiShowcase showcaseData={showcaseData} t={t} />

            <section id="performance" className="py-24">
                <AiPerformance {...sectionMeta.performance} t={t} SectionTitle={(props) => <SectionTitle {...props} t={t} />} productName={productName} performanceTable={performanceTable} />
            </section>

            <section id="safety" className="py-24">
                <AiSafety {...sectionMeta.safety} t={t} SectionTitle={(props) => <SectionTitle {...props} t={t} />} />
            </section>

            <section id="build" className="py-24">
                <AiBuild {...sectionMeta.build} t={t} SectionTitle={(props) => <SectionTitle {...props} t={t} />} />
            </section>

        </div>
    );
}