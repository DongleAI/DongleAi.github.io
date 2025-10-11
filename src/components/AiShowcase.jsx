import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AiShowcase({ showcaseData, title, promptLabel }) {
    return (
        <section id="showcase" className="max-w-7xl mx-auto px-8 py-24">
            <motion.h2
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl font-extrabold tracking-tight text-white mb-12 text-center"
            >
                {title}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {showcaseData.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-800 rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="relative w-full h-64 bg-black flex items-center justify-center">
                            {item.type === 'image' && (
                                <img src={item.src} alt="Showcase" className="w-full h-full object-cover" />
                            )}
                            {item.type === 'video' && (
                                <video src={item.src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                            )}
                            {item.type === 'audio' && (
                                <div className="flex flex-col items-center justify-center">
                                    <audio src={item.src} controls className="w-full" />
                                    <button className="mt-4 p-3 rounded-full bg-fuchsia-600 text-white"><Play className="w-6 h-6" /></button>
                                </div>
                            )}
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-fuchsia-400">{promptLabel}</p>
                            <p className="text-white mt-2">{item.prompt}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
