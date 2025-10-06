// AiModels.jsx
export default function AiModels({ models = [], getIconComponent = () => null, t, SectionTitle, titleKey, subTitleKey }) {
    return (
        <div>
            <SectionTitle titleKey={titleKey} subTitleKey={subTitleKey} />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {models.map((model, idx) => {
                    const IconComp = model.icon || getIconComponent(model.title);
                    return (
                        <div key={idx} className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                            <img src="https://via.placeholder.com/415x415" alt="" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mt-2">{t(model.title)}</h3>
                                <p className="text-slate-400 mt-2">{t(model.description)}</p>
                            </div>
                            <div className="p-6 bg-slate-700/50">
                                <a href="#" className="text-fuchsia-400 hover:underline">{t('cta.learnMore')}</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}