// src/components/AiHandsOn.jsx

import { motion } from "framer-motion";

/**
 * AI Hands-on 섹션 컴포넌트
 */
export default function AiHandsOn({ handsOnScrollMedia = [], scrollDistance, handsOnMediaLength, t, SectionTitle }) {
    return (
        <section id="hands-on" className="max-w-7xl mx-auto px-8 py-32">
            <SectionTitle
                titleKey="section.handsOn.title"
                subTitleKey="section.handsOn.subtitle"
            />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h3 className="text-3xl font-bold text-white mb-6">
                        {t('handsOn.dialogTitle')}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                        {t('handsOn.description')}
                    </p>
                    <button className="mt-10 px-8 py-4 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg shadow-fuchsia-500/30">
                        {t('cta.tryDemo')}
                    </button>
                </div>

                {/* 이미지/스크롤 영역 수정: 비디오/이미지 혼합 렌더링 */}
                <div className="relative overflow-hidden h-[550px] rounded-2xl border border-slate-700 shadow-xl bg-slate-800 ">
                    <div className="absolute inset-0 mask-image-scroll" />
                    <motion.div
                        className="flex gap-8 absolute left-0" // gap-8은 32px
                        animate={{ x: `-${scrollDistance}px` }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: handsOnMediaLength * 5,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* handsOnScrollMedia를 순회하며 렌더링 */}
                        {handsOnScrollMedia.map((item, index) => (
                            <div
                                key={index}
                                className="w-[400px] flex-shrink-0 h-full rounded-xl overflow-hidden bg-slate-900 border border-slate-700 p-4"
                            >
                                {/* === 미디어 (이미지/비디오) 영역: 조건부 렌더링 === */}
                                <div className="h-[300px] w-full rounded-2xl overflow-hidden mb-4 bg-black">

                                    {/* item.type이 'video'면 <video> 렌더링, 아니면 <img> 렌더링 */}
                                    {item.type === 'video' ? (
                                        <video
                                            src={item.src}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-contain rounded-2xl"
                                            aria-label={`Hands-on video demo ${index}`}
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={`Hands-on image demo ${index}`}
                                            className="w-full h-full object-contain rounded-2xl"
                                        />
                                    )}

                                </div>

                                {/* 프롬프트 텍스트 영역 */}
                                <p className="text-xs text-fuchsia-400 font-medium uppercase mb-1">
                                    {t('handsOn.promptLabel') || "Prompt:"}
                                </p>
                                <p className="text-sm text-slate-300 line-clamp-4">
                                    {item.prompt}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}