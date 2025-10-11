// src/components/Layout.jsx

import Header from './Header'; 
import Footer from './Footer';
// 🚨 수정: Outlet을 임포트합니다.
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Sparkles, Dna, Fingerprint, Wind, ChevronRight } from 'lucide-react';

// 모든 페이지 콘텐츠를 감싸는 레이아웃 컴포넌트
function Layout() {
  const location = useLocation();
  const hlParam = new URLSearchParams(location.search).get('lang');

  const isKorean = hlParam === 'ko';

  const headerProps = isKorean ? {
    navLinks: [
      { key: 'header.models', path: '/models', label: "모델" },
      { key: 'header.science', path: '/science', label: "과학" },
      { key: 'header.research', path: '/research', label: "연구" },
      { key: 'header.about', path: '/about', label: "정보" },
    ],
    ctaChat: "채팅 시작",
    ctaBuildApi: "API 구축",
    modelsMenu: {
      type: 'models',
      title: "차세대 AI 시스템으로 빌드하세요",
      exploreLink: "모델 살펴보기",
      columns: [
        {
          title: "Gemini",
          subtitle: "가장 지능적인 AI 모델",
          items: [
            { key: "2.5 Pro", path: "#" },
            { key: "2.5 Flash", path: "#" },
            { key: "2.5 Flash Image", path: "#" },
            { key: "2.5 Flash-Lite", path: "#" },
          ],
          learnMore: { key: "더 알아보기", path: "#" },
        },
        {
          title: "Gemma",
          subtitle: "경량, 최첨단 개방형 모델",
          items: [
            { key: "Gemma 3", path: "#" },
            { key: "Gemma 3n", path: "#" },
            { key: "ShieldGemma 2", path: "#" },
          ],
          learnMore: { key: "더 알아보기", path: "#" },
        },
        {
          title: "생성 모델",
          subtitle: "이미지, 음악 및 비디오 생성 모델",
          items: [
            { key: "Imagen", path: "#" },
            { key: "Lyria", path: "#" },
            { key: "Veo", path: "#" },
          ],
        },
        {
          title: "Gemini 모델 생태계",
          subtitle: "Gemini로 구축된 모델 및 실험",
          items: [
            { key: "Gemini Robotics", path: "#" },
            { key: "Project Astra", path: "#" },
            { key: "Project Mariner", path: "#" },
            { key: "Gemini Diffusion", path: "#" },
          ],
        },
      ],
    },
    scienceMenu: {
      type: 'science',
      title: "AI로 새로운 발견의 시대를 열다",
      exploreLink: "과학 살펴보기",
      columns: [
        {
          title: "생물학을 위한 AI",
          items: [
            { key: "AlphaFold", path: "#" },
            { key: "AlphaGenome", path: "#" },
            { key: "AlphaMissense", path: "#" },
            { key: "AlphaProteo", path: "#" },
          ],
        },
        {
          title: "기후 및 지속 가능성을 위한 AI",
          items: [
            { key: "WeatherNext", path: "#" },
            { key: "Weather Lab", path: "#" },
          ],
        },
        {
          title: "수학 및 컴퓨터 과학을 위한 AI",
          items: [
            { key: "AlphaEvolve", path: "#" },
            { key: "AlphaProof", path: "#" },
            { key: "AlphaGeometry", path: "#" },
          ],
        },
        {
          title: "물리학 및 화학을 위한 AI",
          items: [
            { key: "GNoME", path: "#" },
            { key: "Fusion", path: "#" },
            { key: "AlphaQubit", path: "#" },
          ],
        },
      ],
      sidebar: {
        title: "AI 투명성",
        items: [
          { key: "SynthID", path: "#" },
        ],
      },
    },
    researchMenu: {
      type: 'research',
      title: "연구실의 최신 AI 혁신 및 업데이트",
      exploreLink: "연구 살펴보기",
      columns: [
        {
          title: "프로젝트",
          description: "가장 큰 AI 혁신 살펴보기",
          learnMore: { key: "더 알아보기", path: "#" },
        },
        {
          title: "출판물",
          description: "최근 논문 모음 읽기",
          learnMore: { key: "더 알아보기", path: "#" },
        },
        {
          title: "뉴스",
          description: "연구실의 최신 업데이트 살펴보기",
          learnMore: { key: "더 알아보기", path: "#" },
        },
      ],
    },
    aboutMenu: {
      type: 'about',
      title: "우리의 미션은 인류에게 이익이 되도록 책임감 있게 AI를 구축하는 것입니다",
      columns: [
        {
          title: "Dongle AI DeepMind 소개",
          learnMore: { key: "더 알아보기", path: "/about" },
        },
        {
          title: "뉴스",
          description: "최신 AI 혁신, 프로젝트 및 업데이트 살펴보기",
          learnMore: { key: "더 알아보기", path: "#" },
        },
        {
          title: "채용",
          description: "세상에 실질적이고 긍정적인 영향을 미치고 싶은 사람들을 찾고 있습니다",
          learnMore: { key: "더 알아보기", path: "/careers" },
        },
        {
          title: "마일스톤",
          description: "20년 이상 Google은 AI가 모든 사람에게 도움이 되도록 노력해 왔습니다",
          learnMore: { key: "더 알아보기", path: "#" },
        },
        {
          title: "교육",
          description: "우리는 AI가 다음 세대에게 더 쉽게 접근할 수 있도록 노력합니다",
          learnMore: { key: "더 알아보기", path: "#" },
        },
        {
          title: "책임",
          description: "진화하는 위협에 대해서도 사전 예방적 보안을 통해 AI 안전 보장",
          learnMore: { key: "더 알아보기", path: "/safety" },
        },
        {
          title: "팟캐스트",
          description: "AI가 우리 세상을 변화시키는 특별한 방법 발견",
          learnMore: { key: "더 알아보기", path: "#" },
        },
      ],
    },
  } : {
    navLinks: [
      { key: 'header.models', path: '/models', label: "Models" },
      { key: 'header.science', path: '/science', label: "Science" },
      { key: 'header.research', path: '/research', label: "Research" },
      { key: 'header.about', path: '/about', label: "About" },
    ],
    ctaChat: "Chat with Dongle",
    ctaBuildApi: "Build with Dongle",
    modelsMenu: {
      type: 'models',
      title: "Build with our next generation AI systems",
      exploreLink: "Explore models",
      columns: [
        {
          title: "Gemini",
          subtitle: "Our most intelligent AI models",
          items: [
            { key: "2.5 Pro", path: "#" },
            { key: "2.5 Flash", path: "#" },
            { key: "2.5 Flash Image", path: "#" },
            { key: "2.5 Flash-Lite", path: "#" },
          ],
          learnMore: { key: "Learn more", path: "#" },
        },
        {
          title: "Gemma",
          subtitle: "Lightweight, state-of-the-art open models",
          items: [
            { key: "Gemma 3", path: "#" },
            { key: "Gemma 3n", path: "#" },
            { key: "ShieldGemma 2", path: "#" },
          ],
          learnMore: { key: "Learn more", path: "#" },
        },
        {
          title: "Generative models",
          subtitle: "Image, music and video generation models",
          items: [
            { key: "Imagen", path: "#" },
            { key: "Lyria", path: "#" },
            { key: "Veo", path: "#" },
          ],
        },
        {
          title: "Gemini model ecosystem",
          subtitle: "Models and experiments built with Gemini",
          items: [
            { key: "Gemini Robotics", path: "#" },
            { key: "Project Astra", path: "#" },
            { key: "Project Mariner", path: "#" },
            { key: "Gemini Diffusion", path: "#" },
          ],
        },
      ],
    },
    scienceMenu: {
      type: 'science',
      title: "Unlocking a new era of discovery with AI",
      exploreLink: "Explore science",
      columns: [
        {
          title: "AI for biology",
          items: [
            { key: "AlphaFold", path: "#" },
            { key: "AlphaGenome", path: "#" },
            { key: "AlphaMissense", path: "#" },
            { key: "AlphaProteo", path: "#" },
          ],
        },
        {
          title: "AI for climate and sustainability",
          items: [
            { key: "WeatherNext", path: "#" },
            { key: "Weather Lab", path: "#" },
          ],
        },
        {
          title: "AI for mathematics and computer science",
          items: [
            { key: "AlphaEvolve", path: "#" },
            { key: "AlphaProof", path: "#" },
            { key: "AlphaGeometry", path: "#" },
          ],
        },
        {
          title: "AI for physics and chemistry",
          items: [
            { key: "GNoME", path: "#" },
            { key: "Fusion", path: "#" },
            { key: "AlphaQubit", path: "#" },
          ],
        },
      ],
      sidebar: {
        title: "AI transparency",
        items: [
          { key: "SynthID", path: "#" },
        ],
      },
    },
    researchMenu: {
      type: 'research',
      title: "Our latest AI breakthroughs and updates from the lab",
      exploreLink: "Explore research",
      columns: [
        {
          title: "Projects",
          description: "Explore some of the biggest AI innovations",
          learnMore: { key: "Learn more", path: "#" },
        },
        {
          title: "Publications",
          description: "Read a selection of our recent papers",
          learnMore: { key: "Learn more", path: "#" },
        },
        {
          title: "News",
          description: "Discover the latest updates from our lab",
          learnMore: { key: "Learn more", path: "#" },
        },
      ],
    },
    aboutMenu: {
      type: 'about',
      title: "Our mission is to build AI responsibly to benefit humanity",
      columns: [
        {
          title: "About Dongle AI DeepMind",
          learnMore: { key: "Learn more", path: "/about" },
        },
        {
          title: "News",
          description: "Discover our latest AI breakthroughs, projects, and updates",
          learnMore: { key: "Learn more", path: "#" },
        },
        {
          title: "Careers",
          description: "We’re looking for people who want to make a real, positive impact on the world",
          learnMore: { key: "Learn more", path: "/careers" },
        },
        {
          title: "Milestones",
          description: "For over 20 years, Google has worked to make AI helpful for everyone",
          learnMore: { key: "Learn more", path: "#" },
        },
        {
          title: "Education",
          description: "We work to make AI more accessible to the next generation",
          learnMore: { key: "Learn more", path: "#" },
        },
        {
          title: "Responsibility",
          description: "Ensuring AI safety through proactive security, even against evolving threats",
          learnMore: { key: "Learn more", path: "/safety" },
        },
        {
          title: "The Podcast",
          description: "Uncover the extraordinary ways AI is transforming our world",
          learnMore: { key: "Learn more", path: "#" },
        },
      ],
    },
  };

  const footerProps = isKorean ? {
    slogan: "세상을 위하여 동그란 AI를!",
    modelsTitle: "모델",
    modelsDescription: "차세대 AI 시스템으로 구축",
    modelLinks: [
      { icon: <Sparkles />, href: "/models/dongle", label: "Dongle" },
      { icon: <Sparkles />, href: "/models/round", label: "Round" },
      { icon: <Sparkles />, href: "/models/abyss", label: "Abyss" },
      { icon: <Sparkles />, href: "/models/submarine", label: "Submarine" },
      { icon: <Sparkles />, href: "/models/universe", label: "Universe" },
    ],
    scienceTitle: "과학",
    scienceDescription: "AI로 새로운 발견의 시대를 열다",
    scienceLinks: [
      { icon: <Dna />, href: "/science/alphasigma", label: "AlphaSigma" },
      { icon: <Fingerprint />, href: "/science/icyid", label: "IcyID" },
      { icon: <Wind />, href: "/science/notalone", label: "NotAlone" },
    ],
    learnMoreTitle: "더 알아보기",
    learnMoreLinks: [
      { href: "/about", label: "정보" },
      { href: "/safety", label: "안전" },
      { href: "/careers", label: "채용" },
    ],
    signupTitle: "최신 혁신에 대한 업데이트 가입",
    signupEmailPlaceholder: "이메일 주소",
    signupDisclaimer: "Dongle AI의 이용약관에 동의하며 제 정보가 Dongle AI의 개인정보처리방침에 따라 사용됨을 인정합니다.",
    copyrightText: "모든 권리 보유.",
    privacyText: "개인정보 보호",
    termsText: "이용 약관",
  } : {
    slogan: "Dongle AI for all humanity!",
    modelsTitle: "Models",
    modelsDescription: "Build with our next generation AI systems",
    modelLinks: [
      { icon: <Sparkles />, href: "/models/dongle", label: "Dongle" },
      { icon: <Sparkles />, href: "/models/round", label: "Round" },
      { icon: <Sparkles />, href: "/models/abyss", label: "Abyss" },
      { icon: <Sparkles />, href: "/models/submarine", label: "Submarine" },
      { icon: <Sparkles />, href: "/models/universe", label: "Universe" },
    ],
    scienceTitle: "Science",
    scienceDescription: "Unlocking a new era of discovery with AI",
    scienceLinks: [
      { icon: <Dna />, href: "/science/alphasigma", label: "AlphaSigma" },
      { icon: <Fingerprint />, href: "/science/icyid", label: "IcyID" },
      { icon: <Wind />, href: "/science/notalone", label: "NotAlone" },
    ],
    learnMoreTitle: "Learn more",
    learnMoreLinks: [
      { href: "/about", label: "About" },
      { href: "/safety", label: "Safety" },
      { href: "/careers", label: "Careers" },
    ],
    signupTitle: "Sign up for updates on our latest innovations",
    signupEmailPlaceholder: "Email address",
    signupDisclaimer: "I accept Dongle AI's Terms and Conditions and acknowledge that my information will be used in accordance with Dongle AI's Privacy Policy.",
    copyrightText: "All rights reserved.",
    privacyText: "Privacy",
    termsText: "Terms",
  };

  // 🚨 children prop은 필요 없습니다.
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. 고정 헤더 영역 */}
      <Header {...headerProps} />
      
      {/* 2. 메인 콘텐츠 영역: Outlet으로 변경 */}
      <main className="flex-grow">
        {/* 🚨 수정: 자식 라우트의 내용이 이 자리에 렌더링됩니다. */}
        <Outlet /> 
      </main>
      
      {/* 3. 고정 푸터 영역 */}
      <Footer {...footerProps} />
      
    </div>
  );
}

export default Layout;