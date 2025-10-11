import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-[70vh] pb-24 pt-40 bg-slate-900 overflow-hidden">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white max-w-5xl leading-tight relative z-10"
        >
          Dongle AI: Pioneering the Future of Intelligence
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-8 text-xl md:text-2xl text-fuchsia-300 max-w-3xl relative z-10"
        >
          At Dongle AI, we are dedicated to advancing artificial intelligence with a focus on safety, innovation, and human-centric design.
        </motion.p>
      </section>

      {/* Product Intro Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="https://via.placeholder.com/600x400" alt="Product" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h2 className="text-4xl font-bold text-white">Dongle 1.5</h2>
            <p className="mt-4 text-lg text-slate-400">Our latest flagship model, Dongle 1.5, offers unparalleled performance for complex tasks, creative generation, and efficient problem-solving.</p>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg">
                Discover Dongle 1.5
              </button>
              <button className="px-6 py-3 border border-slate-700 rounded-full text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors">
                Learn more about our models
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-semibold text-white leading-relaxed">
            "What drives the intelligence behind tomorrow's world?"
          </motion.blockquote>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-8 text-lg text-slate-400 leading-relaxed">
            Dongle AI is committed to building intelligent systems that empower humanity and contribute to a safer, more prosperous future.
          </motion.p>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-4 text-lg text-slate-400 leading-relaxed">
            We believe that the development of powerful AI must be guided by a deep sense of responsibility. Our approach balances ambitious technological progress with rigorous ethical considerations.
          </motion.p>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.6 }} className="mt-4 text-lg text-slate-400 leading-relaxed">
            Through continuous research, transparent policies, and user-focused product design, we strive to set the standard for responsible AI innovation.
          </motion.p>
        </div>
      </section>

      {/* Safety and Academy Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 bg-slate-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white">Our Commitment to AI Safety</h3>
          <a href="#" className="mt-4 inline-flex items-center text-fuchsia-400 hover:underline">
            Explore our AI Safety principles <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 bg-slate-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white">Dongle AI's Responsible Development Framework</h3>
          <a href="#" className="mt-4 inline-flex items-center text-fuchsia-400 hover:underline">
            Understand our development guidelines <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6 bg-slate-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white">Dongle AI Academy: Build with Intelligence</h3>
          <a href="#" className="mt-4 inline-flex items-center text-fuchsia-400 hover:underline">
            Join the Dongle AI Academy <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </section>

    </div>
  );
}
