import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight, Briefcase, MapPin } from 'lucide-react';
import AiNav from '../components/AiNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const Hero = ({ heroTitle, heroSubtitle, heroCta }) => (
  <header className="text-center px-6 py-32 sm:py-40 bg-slate-800/50">
    <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="text-sm font-semibold text-fuchsia-400 tracking-widest uppercase">{heroTitle}</motion.h1>
    <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto">{heroSubtitle}</motion.p>
    <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="mt-8">
      <a href="#open-roles" className="inline-block px-8 py-4 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg">
        {heroCta}
      </a>
    </motion.div>
  </header>
);

const Collaboration = ({ title, p1, p2, p3, insideTitle, insideSubtitle, insideVideos }) => (
  <section id="collaboration" className="py-24 sm:py-32">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">{title}</h2>
      <div className="mt-12 prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
      </div>
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-white text-center">{insideTitle}</h3>
        <p className="text-slate-400 text-center mt-4 max-w-2xl mx-auto">{insideSubtitle}</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {insideVideos.map(video => (
            <a key={video.name} href={video.link} className="group">
              <div className="aspect-w-16 aspect-h-9 bg-slate-800 rounded-lg overflow-hidden">
                <img src={`https://via.placeholder.com/400x225.png/0f172a/94a3b8?text=${video.name}`} alt={video.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-white group-hover:text-fuchsia-400">{video.name}</h4>
              <p className="text-slate-400">{video.topic}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Mission = ({ title, p1, imageAlt }) => (
  <section id="mission" className="py-24 sm:py-32 bg-slate-800/50">
    <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
        <p className="mt-6 prose prose-invert prose-lg text-slate-300">{p1}</p>
      </div>
      <div className="aspect-w-1 aspect-h-1 bg-slate-800 rounded-lg overflow-hidden">
        <img src="https://via.placeholder.com/500x500.png/0f172a/94a3b8?text=Team" alt={imageAlt} className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

const TeamSection = ({ teamKey, title, description, imageAlt }) => (
  <div className="grid md:grid-cols-2 gap-12 items-center py-12">
    <div className={`aspect-w-1 aspect-h-1 bg-slate-800 rounded-lg overflow-hidden ${teamKey === 'engineering' || teamKey === 'responsibility' || teamKey === 'operations' ? 'md:order-last' : ''}`}>
      <img src={`https://via.placeholder.com/500x500.png/0f172a/94a3b8?text=${title}`} alt={imageAlt} className="w-full h-full object-cover" />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 prose prose-invert prose-lg text-slate-300">{description}</p>
    </div>
  </div>
);

const Teams = ({ title, teamSections, quoteText, quoteAuthor, quoteRole }) => (
  <section id="teams" className="py-24 sm:py-32">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">{title}</h2>
      <div className="mt-20 divide-y divide-slate-800">
        {teamSections.map(team => (
          <TeamSection key={team.teamKey} {...team} />
        ))}
      </div>
      <figure className="mt-20 border-l-4 border-fuchsia-500 pl-8">
        <blockquote className="text-2xl font-semibold text-white">
          <p>"{quoteText}"</p>
        </blockquote>
        <figcaption className="mt-4 text-slate-400">
          {quoteAuthor} <span className="text-slate-500">/ {quoteRole}</span>
        </figcaption>
      </figure>
    </div>
  </section>
);

const OpenRoles = ({ title, p1, filterReset, filterJobsFound, jobs }) => (
  <section id="open-roles" className="py-24 sm:py-32 bg-slate-800/50">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">{title}</h2>
      <p className="mt-4 text-lg text-slate-400 text-center max-w-3xl mx-auto">{p1}</p>
      <div className="mt-12 bg-slate-900 rounded-lg">
        <div className="p-4 flex justify-between items-center border-b border-slate-800">
          <button className="text-sm text-fuchsia-400 hover:underline">{filterReset}</button>
          <p className="text-sm text-slate-400">{filterJobsFound}</p>
        </div>
        <div className="divide-y divide-slate-800">
          {jobs.map((job, index) => (
            <div key={index} className="p-6 grid md:grid-cols-3 gap-4 items-center hover:bg-slate-800/50">
              <h3 className="md:col-span-2 text-lg font-semibold text-white">{job.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 text-sm text-slate-400">
                <span className="flex items-center"><Briefcase className="w-4 h-4 mr-2" />{job.team}</span>
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{job.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default function CareersPage() {
  const navItems = [
    { id: 'collaboration', label: "유연한 협업" },
    { id: 'mission', label: "미션" },
    { id: 'teams', label: "팀" },
    { id: 'open-roles', label: "채용 중인 직무" },
  ];

  const heroProps = {
    heroTitle: "채용",
    heroSubtitle: "다양한 분야, 하나의 공동 목표",
    heroCta: "모든 직무 보기",
  };

  const collaborationProps = {
    title: "유연한 협업",
    p1: "Dongle AI DeepMind의 미션의 중심에는 사회의 요구와 기대에 부응하여 AI 분야에서 책임감 있는 선구자 역할을 하겠다는 우리의 약속이 있습니다.",
    p2: "이를 위해서는 우리가 살고 있는 세상을 대표하는 사람들에 의해 그리고 그들을 위해 우리의 기술이 만들어지도록 해야 합니다. 이는 우리의 다양한 경험, 지식, 배경 및 관점이 실제 문제를 해결하는 연결 고리를 찾는 데 어떻게 도움이 되는지 인식하는 내부 문화를 지속적으로 배양해야만 감당할 수 있는 책임입니다.",
    p3: "협업은 우리가 하는 모든 일의 중심에 있지만, 매일 다르게 보일 수 있다는 것을 알고 있습니다. 그래서 우리는 조직 전체에 최적화된 사무실 근무와 원격 근무의 유연성을 허용하는 근무 모델을 가지고 있습니다.",
    insideTitle: "Inside Dongle AI DeepMind",
    insideSubtitle: "이 시리즈에서는 우리 사무실을 둘러보는 여정을 통해 우리가 하는 일에 대한 내부 모습을 보여드리고, 가장 중요하게는 이 모든 것을 가능하게 하는 일부 사람들을 소개해 드립니다.",
    insideVideos: [
      { name: "페이지의 이야기", topic: "생성 AI의 가능성", link: "#" },
      { name: "돈의 이야기", topic: "윤리를 실천에 옮기다", link: "#" },
      { name: "코리의 이야기", topic: "AI에서 유머 찾기", link: "#" },
      { name: "디니의 이야기", topic: "차세대 AI 제품 탐색", link: "#" },
      { name: "스테파노의 이야기", topic: "로봇 공학과 AI", link: "#" },
      { name: "안나의 이야기", topic: "AI 혁신을 가능하게 하는 도구 구축", link: "#" }
    ],
  };

  const missionProps = {
    title: "독특한 미션을 가진 커뮤니티",
    p1: "우리는 '지능 해결'에 전념하고 우리 기술이 광범위한 공익을 위해 사용되도록 보장하는 헌신적인 과학 커뮤니티입니다. 함께, 우리는 문제를 해결하는 방법을 배우고 모두를 위한 과학적 발견을 발전시키는 컴퓨터 시스템을 구축합니다.",
    imageAlt: "두 동료가 나란히 앉아 보이지 않는 물체나 사람을 향해 책상 너머로 미소 짓고 있습니다.",
  };

  const teamSections = [
    { teamKey: 'research', title: "연구", description: "우리의 연구팀은 인공 지능 이론과 실제, 과학적 발견 및 AI 기반 제품의 경계를 넓히는 데 중점을 둡니다. 우리의 문화는 모든 연구 그룹 간의 협업을 장려하여 야심찬 창의성과 혁신적인 돌파구로 이어집니다.", imageAlt: "농담을 나누는 동료 그룹." },
    { teamKey: 'engineering', title: "엔지니어링", description: "우리의 엔지니어들은 우리 팀 전반에 걸쳐 확장 가능하고 책임감 있는 AI 연구 및 개발 프로그램의 기반을 구축합니다. 그들은 세계에서 가장 진보되고 대규모인 AI 연구 일부를 지원하고 이러한 기술을 새로운 AI 기반 제품에 통합하는 데 도움을 줍니다.", imageAlt: "농담을 나누는 동료 그룹." },
    { teamKey: 'science', title: "과학 및 지속 가능성", description: "이 다학제팀은 물리적 세계에 대한 우리의 이해를 근본적으로 바꿀 수 있는 AI 프로젝트를 수행합니다. 이러한 프로젝트에는 생물학, 양자 화학, 물리학, 수학, 기후 및 지속 가능성을 포함하여 인류의 가장 큰 과제를 해결하는 데 중요한 분야에서 AI가 혁신을 가능하게 할 잠재력을 탐색하는 것이 포함됩니다.", imageAlt: "동료에게 무언가를 설명하는 남자." },
    { teamKey: 'responsibility', title: "책임 및 안전", description: "우리의 정책 전문가, 철학자 및 연구원들은 학계, 시민 사회 및 더 넓은 AI 커뮤니티의 다른 그룹과 협력하여 우리 시스템을 엄격하게 테스트하고 윤리를 실천하며 사회가 AI의 영향을 해결하도록 돕습니다.", imageAlt: "계획과 과제에 대해 논의하는 동료 그룹." },
    { teamKey: 'product', title: "제품", description: "우리의 제품팀은 Alphabet 전반에 걸쳐 최첨단 인공 지능 기능을 잠금 해제하여 수십억 명의 사용자에게 긍정적인 영향과 마법 같은 제품 경험을 제공하는 것을 목표로 합니다. 이 팀은 Dongle AI DeepMind 연구를 실제 응용 프로그램에 배포하기 위해 노력합니다.", imageAlt: "회의실에 있는 동료 그룹." },
    { teamKey: 'operations', title: "운영", description: "우리의 운영팀은 Dongle AI DeepMind를 AI 연구 발전을 위한 세계 최고의 환경으로 만들기 위해 열심히 노력합니다. 우리의 전담팀에는 프로그램 관리, 인재 개발, 여행, 인재 확보, 대중 참여 등 다양한 분야의 전문가가 포함됩니다. 함께, 그들은 우리의 문화와 세계 최고의 연구를 유지, 최적화 및 육성합니다.", imageAlt: "회의실에 있는 동료 그룹." },
  ];

  const teamsProps = {
    title: "우리의 팀",
    teamSections: teamSections,
    quoteText: "우리는 수십억 명의 삶을 극적으로 개선하고, 산업을 변화시키고, 과학을 발전시키는 AI 연구 및 제품을 제공할 실질적인 기회를 가지고 있습니다.",
    quoteAuthor: "데미스 하사비스",
    quoteRole: "Google DeepMind 공동 창립자 겸 CEO",
  };

  const openRolesProps = {
    title: "채용 중인 직무",
    p1: "Google DeepMind에서의 경력은 과학계 및 그 이상의 최고의 인재들과 긴밀하게 협력할 수 있는 기회를 제공합니다. 우리는 세상에 실질적이고 긍정적인 영향을 미치고 싶은 모든 배경의 사람들을 찾고 있습니다.",
    filterReset: "초기화",
    filterJobsFound: "65개의 직무를 찾았습니다",
    jobs: [
      { title: "소프트웨어 엔지니어링 매니저, GeminiApp", team: "엔지니어링", location: "인도 벵갈루루" },
      { title: "AI 제품 디자이너, Gemini App UX", team: "운영", location: "미국 캘리포니아주 마운틴뷰; 미국 뉴욕주 뉴욕시; 미국 캘리포니아주 샌프란시스코; 미국 워싱턴주 시애틀" },
      { title: "연구 엔지니어 - ACE", team: "연구", location: "미국 캘리포니아주 마운틴뷰" },
      { title: "행정 비즈니스 파트너", team: "운영", location: "미국 캘리포니아주 마운틴뷰" },
      { title: "로보틱스 제품 관리 이사", team: "운영", location: "미국 캘리포니아주 마운틴뷰" },
      { title: "수석 모바일 엔지니어, GeminiApp, Google DeepMind", team: "엔지니어링", location: "미국 캘리포니아주 마운틴뷰; 미국 뉴욕주 뉴욕시" },
      { title: "기술 프로그램 매니저 GeminiApp 개인화", team: "운영", location: "미국 캘리포니아주 마운틴뷰; 미국 뉴욕주 뉴욕시" },
      { title: "시장 출시(GTM) 리드, GeminiApp", team: "운영", location: "미국 캘리포니아주 마운틴뷰" },
      { title: "연구 과학자, 멀티모달 LLM", team: "연구", location: "미국 캘리포니아주 마운틴뷰" },
      { title: "연구 엔지니어, 오디오 대화", team: "엔지니어링", location: "미국 캘리포니아주 마운틴뷰; 미국 뉴욕주 뉴욕시" },
      { title: "선임 모바일 엔지니어, GeminiApp, Google DeepMind", team: "엔지니어링", location: "미국 캘리포니아주 마운틴뷰; 미국 뉴욕주 뉴욕시" },
      { title: "선임 보안 엔지니어, 로보틱스(물리적 AI)", team: "엔지니어링", location: "미국 캘리포니아주 마운틴뷰; 미국 뉴욕주 뉴욕시; 가상" },
      { title: "기술 프로그램 매니저, GeminiApp", team: "운영", location: "미국 캘리포니아주 마운틴뷰" },
      { title: "수석 UX 연구원, Gemini App", team: "운영", location: "미국 캘리포니아주 마운틴뷰; 미국 캘리포니아주 샌프란시스코" },
      { title: "기술 프로그램 매니저, 생성 비디오, 미국", team: "운영", location: "미국 캘리포니아주 마운틴뷰" },
      { title: "임원 비즈니스 파트너", team: "운영", location: "프랑스 파리" },
      { title: "그룹 제품 관리자, Gemini 로보틱스", team: "운영", location: "미국 캘리포니아주 마운틴뷰" },
      { title: "인사 파트너, GenAI", team: "운영", location: "미국 캘리포니아주 마운틴뷰" },
      { title: "제품 관리자, Gemini 앱 자동화 - 심층 연구", team: "운영", location: "미국 캘리포니아주 마운틴뷰" },
      { title: "비즈니스 및 기업 개발 관리자 (GenAI 제품 및 데이터 파트너십)", team: "운영", location: "영국 런던" }
    ],
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <Hero {...heroProps} />
      <AiNav items={navItems} />
      <main>
        <Collaboration {...collaborationProps} />
        <Mission {...missionProps} />
        <Teams {...teamsProps} />
        <OpenRoles {...openRolesProps} />
      </main>
    </div>
  );
}
