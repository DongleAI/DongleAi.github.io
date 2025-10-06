import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
    models: { titleKey: "nav.models" },
    performance: { titleKey: "nav.performance" },
    safety: { titleKey: "nav.safety" },
    build: { titleKey: "nav.build" },
};

export default function AiDongle({ getIconComponent, ns }) {
    const { t } = useTranslation([ns, "translation"]);

    const productName = t("aidongle:productName");
    const hero = {
        title: t("aidongle:hero.title"),
        tagline: t("aidongle:hero.tagline"),
        subtext: t("aidongle:hero.subtext"),
    };
    const models = [
        {
            icon: null,
            title: t("aidongle:models.model1.title"),
            description: t("aidongle:models.model1.description"),
        },
        {
            icon: null,
            title: t("aidongle:models.model2.title"),
            description: t("aidongle:models.model2.description"),
        },
        {
            icon: null,
            title: t("aidongle:models.model3.title"),
            description: t("aidongle:models.model3.description"),
        },
    ];
    const performanceFeatures = [
        {
            icon: null,
            title: t("aidongle:performance.feature1"),
            description: t("aidongle:performance.feature1_desc"),
        },
        {
            icon: null,
            title: t("aidongle:performance.feature2"),
            description: t("aidongle:performance.feature2_desc"),
        },
    ];
    const performanceTable = [
        {
            metric: t("aidongle:performance.eloScore"),
            value: "1.2",
            competitorA: "1.5",
            competitorB: "1.8",
            previousValue: "2.0",
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

            <section id="models" className="py-24">
                <AiModels
                    {...sectionMeta.models}
                    models={models}
                    getIconComponent={getIconComponent}
                    t={t}
                    SectionTitle={(props) => <SectionTitle {...props} t={t} />}
                />
            </section>

            <section id="performance" className="py-24">
                <AiPerformance {...sectionMeta.performance} t={t} SectionTitle={(props) => <SectionTitle {...props} t={t} />} productName={productName} performanceFeatures={performanceFeatures} performanceTable={performanceTable} />
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