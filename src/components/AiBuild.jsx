import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AiBuild({ SectionTitle, forDevelopers, title, startBuilding, ecosystemTitle, ecosystemDescription, aiStudio, aiStudioDescription, geminiApi, geminiApiDescription, learnMore }) {
    return (
        <section id="build" className="py-32">
            <div className="max-w-7xl mx-auto px-8">
                <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden mb-16">
                    <div className="p-12 text-center">
                        <p className="text-sm text-fuchsia-400 font-semibold">{forDevelopers}</p>
                        <h2 className="text-4xl font-extrabold text-white mt-4">{title}</h2>
                        <a href="#" className="mt-8 inline-block px-8 py-4 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg shadow-fuchsia-500/30">
                            {startBuilding}
                        </a>
                    </div>
                    <img src="https://via.placeholder.com/1296x1080" alt="" className="w-full" />
                </div>

                <SectionTitle
                    title={ecosystemTitle}
                    subtitle={ecosystemDescription}
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white">{aiStudio}</h3>
                            <p className="text-slate-400 mt-2">{aiStudioDescription}</p>
                        </div>
                        <div className="p-6 bg-slate-700/50 flex justify-between items-center">
                            <a href="#" className="text-fuchsia-400 hover:underline">{learnMore}</a>
                            <ArrowRight className="w-6 h-6 text-fuchsia-400" />
                        </div>
                    </div>
                    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white">{geminiApi}</h3>
                            <p className="text-slate-400 mt-2">{geminiApiDescription}</p>
                        </div>
                        <div className="p-6 bg-slate-700/50 flex justify-between items-center">
                            <a href="#" className="text-fuchsia-400 hover:underline">{learnMore}</a>
                            <ArrowRight className="w-6 h-6 text-fuchsia-400" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
