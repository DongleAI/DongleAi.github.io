// src/components/AiSafety.jsx
import { motion } from "framer-motion";

export default function AiSafety({ SectionTitle, title, subtitle, transparencyTitle, description, learnMoreLink }) {
    return (
        <div className="max-w-7xl mx-auto px-6 text-center">
            <SectionTitle title={title} subtitle={subtitle} />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-slate-800 rounded-xl shadow-lg max-w-3xl mx-auto"
            >
                <h3 className="text-3xl font-bold text-white mb-4">{transparencyTitle}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">{description}</p>
                <a href="/safety" className="px-8 py-4 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg shadow-fuchsia-500/30">
                    {learnMoreLink}
                </a>
            </motion.div>
        </div>
    );
}