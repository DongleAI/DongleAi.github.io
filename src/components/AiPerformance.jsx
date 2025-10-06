// src/components/AiPerformance.jsx

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, LabelList } from 'recharts';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/**
 * AI Performance 섹션 컴포넌트
 */
export default function AiPerformance({ performanceTable, productName, t, SectionTitle }) {
    const chartData = performanceTable.map(row => ({
        name: row.metric,
        [productName]: parseFloat(row.value),
        competitorA: parseFloat(row.competitorA),
        competitorB: parseFloat(row.competitorB),
        previousValue: parseFloat(row.previousValue),
    }));

    return (
        <section id="performance" className="max-w-7xl mx-auto px-8 py-32 bg-slate-900">
            <SectionTitle
                titleKey="section.performance.title"
                subTitleKey="section.performance.subtitle"
            />

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                        <XAxis dataKey="name" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Legend wrapperStyle={{ color: '#e2e8f0' }} />
                        <Bar dataKey={productName} fill="#a855f7" activeBar={false} />
                        <Bar dataKey="competitorA" fill="#64748b" activeBar={false} />
                        <Bar dataKey="competitorB" fill="#64748b" activeBar={false} />
                        <Bar dataKey="previousValue" name={t('table.previousLabel')} fill="#475569" activeBar={false} />
                    </BarChart>
                </ResponsiveContainer>
            </motion.div>
        </section>
    );
}