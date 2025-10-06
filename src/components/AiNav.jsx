// src/components/AiNav.jsx
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AiNav({ items }) {
    const { t } = useTranslation();
    return (
        <nav className="max-w-7xl mx-auto px-8 py-4 -mt-16 relative z-20">
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="w-full bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-xl shadow-slate-900/50 flex flex-wrap justify-center gap-2"
            >
                {items.map(
                    (item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="px-5 py-2 rounded-full text-base font-semibold text-slate-300 hover:bg-slate-700/70 hover:text-white transition-colors"
                        >
                            {item.label}
                        </a>
                    )
                )}
            </motion.div>
        </nav>
    );
}
