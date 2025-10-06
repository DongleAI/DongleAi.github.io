// src/components/AiHero.jsx
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from 'react-i18next';

const heroItem = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function AiHero({ productName, heroTitle, heroTagline, heroSubtext }) {
    const { t } = useTranslation('home');
    return (
        <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-[90vh] pb-24 pt-40 bg-slate-900 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-fuchsia-900/20 rounded-full blur-[200px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-900/20 rounded-full blur-[200px] animate-pulse animation-delay-5000" />
            </div>

            <motion.h1
                variants={heroItem}
                initial="hidden"
                animate="visible"
                className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white max-w-5xl leading-tight relative z-10"
            >
                {heroTitle || productName}
            </motion.h1>

            <motion.p
                variants={heroItem}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                className="mt-8 text-xl md:text-2xl text-fuchsia-300 max-w-3xl relative z-10"
            >
                {heroTagline || t('hero.tagline')}
            </motion.p>

            <motion.p
                variants={heroItem}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                className="mt-4 text-base text-slate-400 max-w-xl relative z-10"
            >
                {heroSubtext || t('hero.subtext')}
            </motion.p>

            <motion.div
                variants={heroItem}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                className="mt-12 flex gap-4 relative z-10"
            >
                <button className="px-8 py-4 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-xl shadow-fuchsia-500/40">
                    {t('cta.chat')}
                </button>
                <button className="px-8 py-4 border border-slate-700 rounded-full text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors text-lg font-semibold">
                    {t('cta.buildApi')}
                </button>
            </motion.div>
        </section>
    );
}
