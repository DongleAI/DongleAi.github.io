// src/components/AiProductLandingTemplate.jsx

import { motion } from "framer-motion";
import { Zap, LayoutGrid, Cpu, Shield, Code, Globe, Menu } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
// import { Suspense } from "react"; // (제거됨)


// ====================================================================
// 🚨 [필수] 애니메이션 및 아이콘 정의
// ====================================================================
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
// heroItem 정의 (ReferenceError 해결)
const heroItem = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
const IconMap = {
    Zap, LayoutGrid, Cpu, Shield, Code, Globe, Menu, 
    // 기타 필요한 아이콘 포함
};
const getIconComponent = (iconName) => {
  const IconComponent = IconMap[iconName];
  return IconComponent ? <IconComponent className="w-8 h-8 text-fuchsia-400" /> : <Zap className="w-8 h-8 text-fuchsia-400" />;
};
// ====================================================================


// 🚨 [필수] 데이터 로딩 및 Hands-on 스크롤 변수 정의
import { initialLandingData } from '../data/dongleLandingPageData'; 
const data = initialLandingData;
const { models, performanceFeatures, handsOnMedia, performanceTable } = data; // handsOnMedia 사용

// Hands-on 스크롤 변수 정의
const handsOnScrollWidth = 400; // 미디어 항목의 너비
const handsOnGap = 32;          // gap-8 (Tailwind gap-8은 32px)
const handsOnItems = handsOnMedia.length; // handsOnMedia의 항목 수

// 무한 스크롤을 위한 미디어 배열 확장
const handsOnScrollMedia = [...handsOnMedia, ...handsOnMedia]; 

// 스크롤 거리 계산
const scrollDistance = handsOnItems * handsOnScrollWidth + (handsOnItems - 1) * handsOnGap; 

/**
 * AI 제품 랜딩 페이지 템플릿 컴포넌트
 */
export default function AiProductLandingTemplate() { // { data } prop 제거
  const { t, i18n } = useTranslation();
  
  // URL 쿼리 스트링 'hl'을 사용하여 언어를 전환하는 함수
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const url = new URL(window.location.href);
    url.searchParams.set('hl', lng);
    window.history.pushState({}, '', url);
  };

  // productName만 t()로 정의
  const productName = t('productName', { defaultValue: "Submarine AI" }); 

  // 아래 JSX에서 handsOnScrollImages 대신 handsOnScrollMedia를 사용해야 합니다.
  
    // ... (JSX 시작)

  // SectionTitle 컴포넌트: defaultTitle, defaultSubTitle props 제거
  const SectionTitle = ({ titleKey, subTitleKey }) => (
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

  return (
    // <Suspense fallback={<div>Loading Translations...</div>}> 
    <div className="min-h-screen w-full bg-slate-900 text-slate-100 font-sans overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 sticky top-0 backdrop-blur-xl bg-slate-900/90 border-b border-slate-800 z-50">
        <div className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">
          <a
            href = "#"
          >
            Dongle AI
          </a>
        </div>
        <nav className="hidden lg:flex gap-10 text-base text-slate-300">
          {/* t() 호출에서 defaultValue 제거 */}
          <a
            
            className="hover:text-fuchsia-400 transition-colors font-medium"
          >
            {t('nav.models')}
          </a>
          <a
            className="hover:text-fuchsia-400 transition-colors font-medium"
          >
            {t('nav.research')}
          </a>
          <a
            className="hover:text-fuchsia-400 transition-colors font-medium"
          >
            {t('nav.science')}
          </a>
          <a

            className="hover:text-fuchsia-400 transition-colors font-medium"
          >
            {t('nav.about')}
          </a>
        </nav>
        <div className="flex gap-3 items-center">
        

            <button className="hidden sm:block px-5 py-2 border border-fuchsia-500 rounded-full text-fuchsia-400 bg-slate-900 hover:bg-slate-800 transition-colors text-sm font-semibold">
                {t('cta.chat')}
            </button>
            <button className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg shadow-fuchsia-500/30 text-sm font-semibold">
                {t('cta.buildApi')}
            </button>
            <button className="lg:hidden p-2 text-slate-300 hover:text-fuchsia-400">
                <Menu className="w-6 h-6" />
            </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-[90vh] pb-24 pt-40 bg-slate-900 overflow-hidden">
        {/* Background Gradients (복원된 생략 부분) */}
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
          {productName}
        </motion.h1>
        <motion.p
          variants={heroItem}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="mt-8 text-xl md:text-2xl text-fuchsia-300 max-w-3xl relative z-10"
        >
          {t('hero.tagline')}
        </motion.p>
        <motion.p
          variants={heroItem}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="mt-4 text-base text-slate-400 max-w-xl relative z-10"
        >
          {t('hero.subtext')}
        </motion.p>
        <motion.div
          variants={heroItem}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="mt-12 flex gap-4 relative z-10"
        >
          <button className="px-8 py-4 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-xl shadow-fuchsia-500/40">
            {t('cta.getStarted')}
          </button>
          <button className="px-8 py-4 border border-slate-700 rounded-full text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors text-lg font-semibold">
            {t('cta.viewDocs')}
          </button>
        </motion.div>
      </section>

      {/* Models and Image Generation */}
      <section id="models" className="max-w-7xl mx-auto px-8 py-32">
        <SectionTitle 
          titleKey="section.coreModels.title" 
          subTitleKey="section.coreModels.subtitle"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {models.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15 }}
              className="p-8 bg-slate-800 border border-slate-700 rounded-2xl shadow-xl shadow-slate-900/50 hover:border-fuchsia-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">{getIconComponent(m.icon)}</div>
              {/* 모델 이름 및 설명: t() 호출에 실패할 경우 data의 m.name/m.desc를 표시하도록 수정 */}
              <h3 className="text-2xl font-bold text-white">
                {t(`model.${m.name}.name`) || m.name}
              </h3> 
              <p className="text-slate-400 mt-2 text-base min-h-[60px]"> 
                {t(`model.${m.name}.desc`) || m.desc}
              </p>
              <a
                // href={m.href}
                className="mt-6 inline-flex items-center text-fuchsia-400 font-semibold hover:text-fuchsia-300 transition-colors"
              >
                {t('model.viewSpecs')}
                <span className="ml-2 text-lg">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Page Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-8 py-4 -mt-16 relative z-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full overflow-x-auto whitespace-nowrap bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-full p-2 shadow-xl shadow-slate-900/50 flex justify-center" 
        >
          <div className="flex space-x-2"> 
            {["Models", "Hands-on", "Performance", "Safety", "Build"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace("-", "")}`}
                  className="px-5 py-2 rounded-full text-base font-semibold text-slate-300 hover:bg-slate-700/70 hover:text-white transition-colors"
                >
                  {t(`nav.${item.toLowerCase().replace("-", "")}`)}
                </a>
              )
            )}
          </div>
        </motion.div>
      </nav>

      {/* Hands-on 섹션 */}
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
                    duration: handsOnMedia.length * 5, 
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
                    <div className="h-[300px] w-full rounded-lg overflow-hidden mb-4">
                      
                      {/* item.type이 'video'면 <video> 렌더링, 아니면 <img> 렌더링 */}
                      {item.type === 'video' ? (
                        <video 
                          src={item.src} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                          className="w-full h-full object-cover"
                          aria-label={`Hands-on video demo ${index}`}
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img 
                          src={item.src} 
                          alt={`Hands-on image demo ${index}`} 
                          className="w-full h-full object-cover"
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
      {/* Performance */}
<section id="performance" className="max-w-7xl mx-auto px-8 py-32 bg-slate-900">
    <SectionTitle 
        titleKey="section.performance.title" 
        subTitleKey="section.performance.subtitle"
    />

    <div className="space-y-24">
        {/* Performance Features List: 이미지 제거 및 단일 컬럼 레이아웃 */}
        {performanceFeatures.map((feature, i) => (
            <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 }}
                // 그리드 설정 제거, 단일 컬럼으로 변경
                className="max-w-3xl mx-auto" 
            >
                <div>
                    <h3 className="text-3xl font-bold text-fuchsia-400 mb-5">
                        {t(`performance.feature.${i}.title`)}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                        {t(`performance.feature.${i}.description`)}
                    </p>
                    <motion.button 
                        className="mt-8 px-6 py-3 border border-fuchsia-500 rounded-full text-fuchsia-400 bg-slate-900 hover:bg-slate-800 transition-colors font-medium shadow-md shadow-fuchsia-500/10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('cta.viewReport')}
                    </motion.button>
                </div>
                {/* 이전에 여기에 있었던 이미지 렌더링 div가 제거되었습니다. 
                */}
            </motion.div>
        ))}

        {/* Performance Benchmark Table */}
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: performanceFeatures.length * 0.15 }}
        >
            <table className="w-full text-left border-collapse bg-slate-800">
                <thead>
  <tr className="bg-slate-700/50">
    {/* 1. 벤치마크 이름 열 (Benchmark) */}
    <th className="p-5 font-bold text-slate-200 text-lg border-b border-slate-700 rounded-tl-xl">
      {t('table.benchmark')}
    </th>
    {/* 2. 현재 모델 열 (Current Model) */}
    <th className="p-5 font-bold text-slate-200 text-lg border-b border-slate-700">
      {productName} <span className="text-sm font-normal text-fuchsia-400">{t('table.current')}</span>
    </th>
    
    {/* 3. 경쟁 모델 A 열 (새로 추가) */}
    <th className="p-5 font-bold text-slate-200 text-lg border-b border-slate-700">
      {t('table.competitorA')} <span className="text-sm font-normal text-slate-500">{t('table.competitorA_version')}</span>
    </th>

    {/* 3. 경쟁 모델 B 열 (새로 추가) */}
    <th className="p-5 font-bold text-slate-200 text-lg border-b border-slate-700">
      {t('table.competitorB')} <span className="text-sm font-normal text-slate-500">{t('table.competitorB_version')}</span>
    </th>

    {/* 3. 경쟁 모델 A 열 (새로 추가) */}
    <th className="p-5 font-bold text-slate-200 text-lg border-b border-slate-700">
      {t('table.competitorC')} <span className="text-sm font-normal text-slate-500">{t('table.competitorC_version')}</span>
    </th>

    {/* 4. 이전 모델 열 (Previous Model) - 이제 네 번째 열이 됩니다. */}
    <th className="p-5 font-bold text-slate-200 text-lg border-b border-slate-700 rounded-tr-xl">
      {t('table.previousModel')} <span className="text-sm font-normal text-slate-500">{t('table.previous')}</span>
    </th>
  </tr>
</thead>
<tbody>
  {data.performanceTable.map((row, index) => (
    <tr key={index} className="border-t border-slate-700 hover:bg-slate-700/30 transition-colors">
      
      {/* 1. 벤치마크 이름 */}
      <td className="p-5 text-slate-300 font-medium">
        {t(`table.row.${index}.name`) || row.name} 
      </td>
      
      {/* 2. 현재 모델 값 */}
      <td className="p-5 text-white font-semibold">
        {row.currentValue} 
        {row.isBest && <span className="ml-2 text-xs font-bold text-fuchsia-400 bg-fuchsia-900/50 px-2 py-1 rounded-full">BEST</span>}
      </td>
      
      {/* 3. 경쟁 모델 A 값 (새로 추가) */}
      <td className="p-5 text-slate-400">
        {row.competitorAValue} 
      </td>

      {/* 3. 경쟁 모델 B 값 (새로 추가) */}
      <td className="p-5 text-slate-400">
        {row.competitorBValue} 
      </td>

      {/* 3. 경쟁 모델 C 값 (새로 추가) */}
      <td className="p-5 text-slate-400">
        {row.competitorCValue} 
      </td>

      {/* 4. 이전 모델 값 */}
      <td className="p-5 text-slate-400">
        {row.previousValue}
      </td>
      
    </tr>
  ))}
</tbody>
            </table>
        </motion.div>
    </div>
</section>
      {/* Safety */}
      <section id="safety" className="max-w-7xl mx-auto px-8 py-32">
        <SectionTitle
          titleKey="section.safety.title"
          subTitleKey="section.safety.subtitle"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              {t('safety.transparencyTitle')}
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              {t('safety.description')}
            </p>
            <button className="mt-8 px-6 py-3 border border-slate-700 rounded-full text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors font-medium shadow-md">
              {t('cta.readReport')}
            </button>
          </div>
          
          {/* Safety 이미지 복원 */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.8 }}
             className="relative p-8 bg-slate-800/80 rounded-3xl border border-slate-700 shadow-2xl shadow-cyan-900/30"
          >
            <Shield className="w-16 h-16 text-cyan-400 mb-6" />
            <p className="text-slate-300 italic">"{t('safety.quote')}"</p>
            <span className="mt-4 block text-sm text-slate-500">— {t('safety.quoteAuthor')}</span>
          </motion.div>
          {/* 복원 끝 */}
        </div>
      </section>
      
      {/* Responsibility Callout */}
      <motion.section 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-8 py-20 bg-slate-800/50 rounded-3xl border border-slate-700 my-16 bg-gradient-to-r from-slate-800 to-slate-800/80 shadow-2xl shadow-fuchsia-900/30"
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            {t('responsibility.calloutTitle')}
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto mb-10">
            {t('responsibility.calloutDescription')}
          </p>
          <button className="px-8 py-4 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg shadow-fuchsia-500/30">
            {t('cta.learnMore')}
          </button>
        </div>
      </motion.section>

      {/* Build */}
      <section id="build" className="max-w-7xl mx-auto px-8 py-32">
        <SectionTitle
          titleKey="section.build.title"
          subTitleKey="section.build.subtitle"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Build API Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="p-10 bg-slate-800 border border-slate-700 rounded-3xl shadow-xl hover:border-fuchsia-500 transition-all"
          >
            <Code className="w-10 h-10 text-fuchsia-400 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">
              {t('build.apiTitle')}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              {t('build.apiDescription')}
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg shadow-fuchsia-500/30">
                {t('cta.getApiKey')}
              </button>
              <button className="px-6 py-3 border border-slate-700 rounded-full text-slate-300 bg-slate-900 hover:bg-slate-700 transition-colors font-medium">
                {t('cta.viewDocs')}
              </button>
            </div>
          </motion.div>

          {/* Build Ecosystem Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="p-10 bg-slate-800 border border-slate-700 rounded-3xl shadow-xl hover:border-cyan-500 transition-all"
          >
            <Globe className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">
              {t('build.ecosystemTitle')}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              {t('build.ecosystemDescription')}
            </p>
            <button className="px-6 py-3 border border-fuchsia-500 rounded-full text-fuchsia-400 bg-slate-900 hover:bg-slate-700 transition-colors font-medium shadow-md shadow-fuchsia-500/10">
              {t('cta.explorePartners')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer (전체 복원) */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex justify-between items-center pb-12 border-b border-slate-800">
            <div className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">
              Dongle AI
            </div>
            <div className="flex gap-4 text-slate-400">
                <span className="text-sm font-medium">{t('footer.followUs')} →</span>
                {/* 소셜 아이콘 자리 */}
            </div>
          </div>

          {/* Main Navigation Columns (i18n 적용) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 text-slate-400">
              {[
                { title: 'footer.col1.title', links: ['footer.col1.link1', 'footer.col1.link2', 'footer.col1.link3'] },
                { title: 'footer.col2.title', links: ['footer.col2.link1', 'footer.col2.link2', 'footer.col2.link3'] },
                { title: 'footer.col3.title', links: ['footer.col3.link1', 'footer.col3.link2', 'footer.col3.link3'] },
                { title: 'footer.col4.title', links: ['footer.col4.link1', 'footer.col4.link2', 'footer.col4.link3'] },
                { title: 'footer.col5.title', links: ['footer.col5.link1', 'footer.col5.link2', 'footer.col5.link3'] },
              ].map((col, index) => (
                  <div key={index}>
                      <h4 className="text-lg font-bold text-white mb-4">{t(col.title)}</h4>
                      <ul className="space-y-3">
                          {col.links.map((linkKey) => (
                              <li key={linkKey}>
                                  <a  className="hover:text-fuchsia-400 transition-colors text-sm">
                                      {t(linkKey)}
                                  </a>
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
          {/* 복원 끝 */}
          
          {/* Bottom Section */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <p className="text-white font-semibold mb-4 md:mb-0">
              {t('footer.slogan')}
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center">
                <nav className="flex gap-4 text-slate-500">
                    <a  className="hover:text-fuchsia-400 transition-colors">{t('footer.privacy')}</a>
                    <a  className="hover:text-fuchsia-400 transition-colors">{t('footer.terms')}</a>
                    <a  className="hover:text-fuchsia-400 transition-colors">{t('footer.manageCookies')}</a>
                </nav>
                <p>© 2025 Dongle AI. {t('footer.copyright')}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    // </Suspense>
  );
}