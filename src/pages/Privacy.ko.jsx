import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import AiNav from '../components/AiNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const SectionTitle = ({ tag, title }) => (
  <div className="mb-8">
    {tag && <p className="text-sm font-semibold text-fuchsia-400 tracking-widest uppercase">{tag}</p>}
    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
  </div>
);

const Callout = ({ title, subtitle, cta, href = '#' }) => (
  <div className="my-8 p-6 bg-slate-800 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
    <div className="flex items-center">
      <ShieldCheck className="w-10 h-10 text-fuchsia-400 mr-4 shrink-0" />
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-slate-400">{subtitle}</p>
      </div>
    </div>
    <a href={href} className="shrink-0 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700">
      {cta}
    </a>
  </div>
);

const InfoSection = ({ id, title, subtitle, paragraphs }) => {
  return (
    <section id={id} className="py-16">
      <SectionTitle title={title} />
      {subtitle && <p className="text-xl text-slate-300 mb-8">{subtitle}</p>}
      <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
};

export default function PrivacyPage() {
  const navItems = [
    { id: 'introduction', label: "소개" },
    { id: 'info_collect', label: "Google이 수집하는 정보" },
    { id: 'why_collect', label: "Google이 데이터를 수집하는 이유" },
    { id: 'privacy_controls', label: "개인정보 보호 설정" },
    { id: 'sharing_info', label: "정보 공유" },
    { id: 'keeping_secure', label: "정보 보안" },
    { id: 'export_delete', label: "정보 내보내기 및 삭제" },
    { id: 'retaining_info', label: "정보 보관" }
  ];

  const introductionProps = {
    title: "Google 개인정보처리방침",
    p1: "Google 서비스를 이용하면 사용자는 자신의 정보를 Google에 맡기게 됩니다. Google은 이를 매우 중요한 책임으로 생각하며 사용자의 정보를 보호하고 사용자가 직접 정보를 관리할 수 있도록 최선을 다하고 있습니다.",
    p2: "본 개인정보처리방침은 Google이 어떤 정보를 수집하고 수집하는 이유가 무엇인지, 그리고 사용자가 자신의 정보를 어떻게 업데이트, 관리, 내보내기, 삭제할 수 있는지를 사용자가 이해하는 데 도움을 주기 위해 마련되었습니다.",
    checkup: {
      title: "개인정보 보호 진단",
      subtitle: "개인정보 보호 설정을 변경하고 싶으신가요?",
      cta: "개인정보 보호 진단 받기"
    },
    meta: "발효일: 2025년 7월 1일 | 보관처리된 버전 | PDF 다운로드",
    p3: "Google은 수백만 명의 사용자가 매일 새로운 방식으로 세상을 탐색하고 소통하는 데 도움이 되는 다양한 서비스를 구축합니다. Google 서비스는 다음과 같습니다.",
    services_list: [
      "검색, YouTube, Google Home과 같은 Google 앱, 사이트, 기기",
      "Chrome 브라우저 및 Android 운영체제와 같은 플랫폼",
      "광고, 애널리틱스, 삽입된 Google 지도와 같이 서드 파티 앱 및 사이트에 통합된 제품"
    ],
    p4: "사용자는 다양한 방법으로 Google 서비스를 이용하여 개인정보를 관리할 수 있습니다. 예를 들어 이메일, 사진과 같은 콘텐츠를 만들고 관리하거나 더 관련성 높은 검색 결과를 보고 싶다면 Google 계정에 가입할 수 있습니다. 또한 로그아웃하거나 계정을 전혀 만들지 않고도 Google 검색이나 YouTube 동영상 시청과 같은 많은 Google 서비스를 이용할 수 있습니다. 기기를 사용하는 다른 사람에게서 비공개로 인터넷을 사용하도록 도와주는 Chrome 시크릿 모드와 같이 비공개 모드로 웹을 탐색하도록 선택할 수도 있습니다. 그리고 Google 서비스 전반에서 개인정보 보호 설정을 조정하여 Google이 일부 유형의 데이터를 수집할지 여부와 수집한 데이터의 사용 방식을 제어할 수 있습니다.",
    p5: "최대한 명확하게 설명하기 위해 예시, 설명 동영상, 주요 용어 정의를 추가했습니다. 본 개인정보처리방침에 대해 궁금한 점이 있으면 Google에 문의할 수 있습니다."
  };

  const infoCollectProps = {
    title: "Google이 수집하는 정보",
    subtitle: "Google 서비스를 이용할 때 Google이 어떤 유형의 정보를 수집하는지 이해하시기 바랍니다.",
    paragraphs: [
      "Google은 사용자가 사용하는 언어와 같은 기본적인 정보부터 사용자에게 가장 유용할 광고, 온라인에서 사용자에게 가장 중요한 사람, 사용자가 좋아할 만한 YouTube 동영상과 같은 더 복잡한 정보에 이르기까지 모든 사용자에게 더 나은 서비스를 제공하기 위해 정보를 수집합니다. Google이 수집하는 정보와 해당 정보의 사용 방식은 사용자가 Google 서비스를 이용하는 방법과 개인정보 보호 설정을 관리하는 방법에 따라 다릅니다.",
      "사용자가 Google 계정에 로그인하지 않은 경우 Google은 사용자가 사용하는 브라우저, 애플리케이션 또는 기기에 연결된 고유 식별자와 함께 수집한 정보를 저장합니다. 이를 통해 Google은 선호하는 언어나 사용자의 활동을 기반으로 더 관련성 높은 검색 결과나 광고를 표시할지 여부와 같이 탐색 세션 전반에 걸쳐 사용자의 환경설정을 유지할 수 있습니다.",
      "사용자가 로그인하면 Google은 Google 계정에 저장하는 정보도 수집하며, 이 정보는 개인 정보로 취급합니다."
    ],
  };

  const whyCollectProps = {
    title: "Google이 데이터를 수집하는 이유",
    subtitle: "더 나은 서비스를 제공하기 위해 데이터를 사용합니다.",
    paragraphs: [
      "Google은 모든 서비스에서 수집한 정보를 다음 목적으로 사용합니다."
    ],
  };

  const privacyControlsProps = {
    title: "개인정보 보호 설정",
    subtitle: "수집하는 정보와 사용 방법에 대해 선택할 수 있습니다.",
    paragraphs: [
      "이 섹션에서는 서비스 전반에서 개인정보를 관리하기 위한 주요 제어 기능에 대해 설명합니다. 중요한 개인정보 보호 설정을 검토하고 조정할 수 있는 기회를 제공하는 개인정보 보호 진단을 방문할 수도 있습니다. 이러한 도구 외에도 Google 제품에는 특정 개인정보 보호 설정이 제공됩니다. 제품 개인정보 보호 가이드에서 자세히 알아볼 수 있습니다."
    ],
  };

  const sharingInfoProps = {
    title: "정보 공유",
    paragraphs: [
      "많은 Google 서비스를 통해 다른 사람과 정보를 공유할 수 있으며 공유 방법을 제어할 수 있습니다. 예를 들어 YouTube에서 동영상을 공개적으로 공유하거나 비공개로 유지하도록 결정할 수 있습니다. 정보를 공개적으로 공유하면 Google 검색을 포함한 검색 엔진을 통해 콘텐츠에 액세스할 수 있게 될 수 있다는 점을 기억하세요.",
      "로그인하여 YouTube 동영상에 댓글을 달거나 Play에서 앱을 검토하는 등 일부 Google 서비스와 상호작용하면 활동 옆에 이름과 사진이 표시됩니다. 공유 보증 설정에 따라 광고에 이 정보가 표시될 수도 있습니다."
    ],
  };

  const keepingSecureProps = {
    title: "정보 보안",
    subtitle: "정보를 보호하기 위해 서비스에 보안 기능을 내장합니다.",
    paragraphs: [
      "모든 Google 제품은 정보를 지속적으로 보호하는 강력한 보안 기능으로 구축됩니다. 서비스를 유지하면서 얻은 통찰력은 보안 위협이 사용자에게 도달하기 전에 감지하고 자동으로 차단하는 데 도움이 됩니다. 그리고 사용자가 알아야 할 위험한 것을 감지하면 사용자에게 알리고 더 잘 보호받을 수 있도록 단계를 안내합니다.",
      "Google은 다음과 같은 정보를 포함하여 Google이 보유한 정보에 대한 무단 액세스, 변경, 공개 또는 파괴로부터 사용자와 Google을 보호하기 위해 최선을 다합니다."
    ],
  };

  const exportDeleteProps = {
    title: "정보 내보내기 및 삭제",
    subtitle: "언제든지 정보 사본을 내보내거나 Google 계정에서 삭제할 수 있습니다.",
    paragraphs: [
      "백업하거나 Google 외부 서비스에서 사용하려는 경우 Google 계정의 콘텐츠 사본을 내보낼 수 있습니다.",
      "정보를 삭제하려면 다음을 수행할 수 있습니다."
    ],
  };

  const retainingInfoProps = {
    title: "정보 보관",
    paragraphs: [
      "Google은 수집하는 데이터가 무엇인지, 어떻게 사용하는지, 설정을 어떻게 구성하는지에 따라 다른 기간 동안 데이터를 보관합니다."
    ],
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Hero */}
      <header className="text-center px-6 py-24 sm:py-32">
        <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">{introductionProps.title}</motion.h1>
        <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mt-6 text-lg text-slate-300 max-w-4xl mx-auto">{introductionProps.p1}</motion.p>
        <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="mt-4 text-lg text-slate-300 max-w-4xl mx-auto">{introductionProps.p2}</motion.p>
      </header>

      <AiNav items={navItems} />

      <main className="max-w-4xl mx-auto px-6 divide-y divide-slate-800">
        {/* Introduction */}
        <section id="introduction" className="py-16">
          <Callout {...introductionProps.checkup} />
          <p className="text-center text-sm text-slate-500 my-8">{introductionProps.meta}</p>
          <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>{introductionProps.p3}</p>
            <ul>{introductionProps.services_list.map((item, i) => <li key={i}>{item}</li>)}</ul>
            <p>{introductionProps.p4}</p>
            <p>{introductionProps.p5}</p>
          </div>
        </section>

        {/* Other Sections */}
        <InfoSection id="info_collect" {...infoCollectProps} />
        <InfoSection id="why_collect" {...whyCollectProps} />
        <InfoSection id="privacy_controls" {...privacyControlsProps} />
        <InfoSection id="sharing_info" {...sharingInfoProps} />
        <InfoSection id="keeping_secure" {...keepingSecureProps} />
        <InfoSection id="export_delete" {...exportDeleteProps} />
        <InfoSection id="retaining_info" {...retainingInfoProps} />
      </main>
    </div>
  );
}
