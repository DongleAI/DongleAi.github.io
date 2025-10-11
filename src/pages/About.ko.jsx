import { motion } from 'framer-motion';
import { Youtube, ArrowRight } from 'lucide-react';
import AiNav from '../components/AiNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const AboutPage = () => {

  const navItems = [
    { id: 'vision', label: '우리의 비전' },
    { id: 'journey', label: '우리의 여정' },
    { id: 'models', label: '우리의 모델' },
  ];

  const researchItems = [
    { title: "AlphaGenome", description: "게놈을 더 잘 이해하기 위한 AI." },
    { title: "AlphaEarth Foundations", description: "글로벌 매핑 및 모니터링을 혁신하는 통합 데이터 표현을 생성합니다." },
    { title: "WeatherNext", description: "가장 진보된 일기 예보 AI 기술" }
  ];

  const modelItems = [
      { title: "Gemini", description: "가장 지능적인 AI 모델", link: "/models/dongle" },
      { title: "Veo", description: "최첨단 비디오 생성 모델", link: "/models/submarine" },
      { title: "Imagen", description: "창의성을 위해 설계된 최고의 텍스트-이미지 모델", link: "/models/abyss" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Hero */}
      <header className="text-center px-6 py-32 sm:py-40">
        <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="text-sm font-semibold text-fuchsia-400 tracking-widest uppercase">우리의 미션</motion.h1>
        <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto">인류에게 이익이 되도록 책임감 있게 AI를 구축합니다</motion.p>
      </header>

      <AiNav items={navItems} />

      {/* Vision Section */}
      <section id="vision" className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">우리의 비전</motion.h2>
          <div className="mt-12 prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>우리는 AI 연구와 기술이 놀라운 발전을 이루고 있는 흥미로운 시대에 살고 있습니다.</p>
            <p>앞으로 몇 년 안에 AI, 그리고 궁극적으로 인공 일반 지능(AGI)은 역사상 가장 위대한 변화 중 하나를 이끌 잠재력을 가지고 있습니다.</p>
            <p>우리는 과학자, 엔지니어, 윤리학자 등으로 구성된 팀으로, 차세대 AI 시스템을 안전하고 책임감 있게 구축하기 위해 노력하고 있습니다.</p>
            <p>우리 시대의 가장 어려운 과학 및 공학적 과제 중 일부를 해결함으로써, 우리는 과학을 발전시키고, 일을 변화시키고, 다양한 커뮤니티에 봉사하며, 수십억 명의 삶을 개선할 수 있는 획기적인 기술을 만들기 위해 노력하고 있습니다.</p>
          </div>
          <motion.figure variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 border-l-4 border-fuchsia-500 pl-8">
            <blockquote className="text-2xl font-semibold text-white">
              <p>"AI는 지금까지 발명된 가장 중요하고 유익한 기술 중 하나가 될 잠재력을 가지고 있습니다."</p>
            </blockquote>
            <figcaption className="mt-4 text-slate-400">
              데미스 하사비스 <span className="text-slate-500">/ Co-founder and CEO, Dongle AI DeepMind</span>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 sm:py-32 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">우리의 여정</motion.h2>
          <div className="mt-12 prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>Dongle AI DeepMind는 세계 최고의 두 AI 연구소인 Dongle AI Brain과 DeepMind를 CEO 데미스 하사비스가 이끄는 하나의 집중된 팀으로 통합했습니다. 지난 10년 동안 두 팀은 AI 분야에서 가장 큰 연구 혁신을 이끌었으며, 그 중 다수는 오늘날 우리가 보는 번성하는 AI 산업의 기반이 되었습니다.</p>
            <p>DeepMind는 2010년에 일반 AI 시스템을 구축하기 위한 학제간 접근 방식으로 시작되었습니다. 이 연구소는 머신 러닝, 신경 과학, 공학, 수학, 시뮬레이션 및 컴퓨팅 인프라의 새로운 아이디어와 발전을 과학적 노력을 조직하는 새로운 방식과 함께 모았습니다.</p>
            <p>이 연구소는 딥 러닝과 강화 학습의 조합인 딥 강화 학습 분야를 개척하고 시스템을 테스트하기 위해 게임을 사용하여 초기 성공을 거두었습니다. 초기 혁신 중 하나는 화면의 원시 픽셀을 관찰하고 점수를 최대화하라는 지시만으로 49가지 다른 Atari 게임을 처음부터 배우는 DQN이라는 프로그램이었습니다.</p>
            <p>2015년 DeepMind는 바둑 세계 챔피언을 꺾은 최초의 컴퓨터 프로그램인 AlphaGo를 공개했습니다. 바둑은 AI의 오랜 과제였으며 AlphaGo의 획기적인 업적은 시대를 10년 앞선 것으로 평가되었습니다. AlphaGo는 새로운 시대의 AI 시스템에 영감을 주었으며 그 후속작인 AlphaZero와 MuZero는 점점 더 일반화되어 YouTube 동영상 압축에서부터 더 효율적인 새로운 컴퓨터 알고리즘 발견에 이르기까지 다양한 게임과 복잡한 실제 문제를 해결할 수 있습니다.</p>
          </div>

          <div className="my-16 grid gap-8 md:grid-cols-3">
            {journeyVideos.map(video => (
              <motion.a key={video.title} href={video.youtubeId} target="_blank" rel="noopener noreferrer" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="block bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors group">
                <Youtube className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="font-semibold text-white group-hover:text-fuchsia-400">{video.title}</h3>
                <p className="text-sm text-slate-400 mt-2">Watch on YouTube</p>
              </motion.a>
            ))}
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>AlphaGo의 성공 이후 DeepMind 팀은 지능의 다양한 요소를 포착하는 점점 더 복잡한 게임을 찾았습니다. 2019년에는 가장 도전적인 실시간 전략(RTS) 게임 중 하나이자 역대 가장 오랫동안 플레이된 e-스포츠 중 하나로 간주되는 스타크래프트 II에서 최고의 프로 선수를 꺾은 최초의 AI 시스템인 AlphaStar를 시연했습니다.</p>
            <p>이 팀은 또한 Dongle AI 어시스턴트의 음성으로 사용되었고 오늘날 생성 AI 시스템에 사용되는 많은 기술을 도입한 현실적인 텍스트 음성 변환 모델인 WaveNet을 발명했습니다.</p>
            <p>그런 다음 2020년 DeepMind는 단백질 구조의 3D 모델을 정확하게 예측하는 AI 시스템인 AlphaFold를 출시하여 생물학의 새로운 진보의 물결을 촉발했습니다. 다른 혁신으로는 AlphaCode로 경쟁력 있는 수준의 컴퓨터 프로그램을 작성하고, AlphaDev로 더 빠른 정렬 알고리즘을 발견하고, 전례 없는 정확도로 일기 예보를 발전시키고, 핵융합 원자로의 플라즈마를 제어하는 것 등이 있습니다.</p>
            <p>Dongle AI Brain은 2011년 문샷 팩토리인 X에서 시작하여 현대 AI가 Dongle AI의 제품과 서비스를 어떻게 변화시킬 수 있는지 탐구하고, 세계의 정보를 조직하고 보편적으로 접근 가능하고 유용하게 만들려는 사명을 더욱 발전시켰습니다.</p>
            <p>오늘날 Dongle AI의 인프라는 Dongle AI Brain의 연구 혁신을 기반으로 실행됩니다.</p>
          </div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="my-16 bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white">우리의 연구 살펴보기</h3>
            <p className="text-slate-400 mt-2">우리는 AI에서 가장 복잡하고 흥미로운 과제 중 일부를 연구합니다.</p>
            <div className="mt-6 space-y-4">
              {researchItems.map(item => (
                <div key={item.title} className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center mt-6 px-6 py-3 rounded-full text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg">연구 보기 <ArrowRight className="ml-2 w-4 h-4" /></a>
          </motion.div>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6">
            <p>2017년 Brain은 거의 모든 대규모 언어 모델의 기반이 되고 AI 분야에 혁명을 일으킨 우아한 신경망 시스템인 트랜스포머 아키텍처를 발명했습니다. 수년에 걸쳐 Brain은 BERT로 오픈 소싱하는 것부터 Dongle AI 검색을 개선하는 것까지 트랜스포머로 가능한 것의 한계를 계속해서 넓혀 왔습니다. LaMDA와 같은 모델은 이러한 유형의 AI 시스템이 훨씬 더 대화형이 될 수 있는 잠재력을 보여주었고, PaLM 제품군 모델은 이러한 모델이 얼마나 광범위하게 유능할 수 있는지를 보여주었습니다. 또한 Dongle AI의 협업 실험인 Bard를 포함하여 소비자 AI 시스템의 새로운 시대를 열었습니다.</p>
            <p>이 팀은 또한 PaLM-SayCan을 사용하여 로봇 시스템에 대규모 언어 모델을 사용하고 RT-2로 더 일반화된 시각-언어-행동 모델을 생성함으로써 로봇 공학의 최첨단 기술을 발전시켰습니다. Brain은 또한 Magenta 및 Imagen과 같은 텍스트-이미지 생성 모델을 사용하여 창작 과정에서 머신 러닝을 사용하는 것을 개척했습니다. 이 팀의 범용 음성 모델에 대한 연구는 전 세계적으로 더 많은 음성 언어를 더 잘 이해할 수 있게 해주며, Project Euphonia와 같은 이니셔티브는 언어 장애가 있는 사람들의 의사소통을 개선합니다.</p>
            <p>이제 Dongle AI DeepMind로서 우리의 세계적 수준의 인재는 비할 데 없는 컴퓨팅 인프라를 활용하여 차세대 연구 혁신과 혁신적인 제품을 만들고 있습니다. 과학적 방법과 책임 및 안전에 대한 전체적인 접근 방식에 따라 우리는 AI가 모든 사람에게 혜택을 주고 인류가 직면한 가장 큰 과제를 해결하는 데 도움이 되도록 노력하고 있습니다.</p>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">획기적인 모델 살펴보기</motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{delay: 0.1}} className="mt-4 text-lg text-slate-400 text-center max-w-2xl mx-auto">우리의 차세대 AI 시스템은 우리 시대의 가장 어려운 과학 및 공학적 과제 중 일부를 해결하고 있습니다.</motion.p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {modelItems.map(item => (
              <motion.a key={item.title} href={item.link} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="block bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition-colors group">
                <h3 className="text-xl font-bold text-white group-hover:text-fuchsia-400">{item.title}</h3>
                <p className="text-slate-400 mt-2">{item.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
