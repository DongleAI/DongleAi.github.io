import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend'; // i18next-http-backend 관련 import 제거

// AiProductLandingTemplate.jsx에서 사용된 모든 키에 대한 번역 리소스 정의
// 일반적으로는 별도의 JSON 파일(public/locales/ko/translation.json 등)로 분리하는 것이 좋습니다.
const resources = {
  en: {
    translation: {
      // Product Name
      productName: "Dongle",

      // Navigation
      nav: {
        models: "Models",
        handson: "Hands-on",
        performance: "Performance",
        safety: "Safety",
        build: "Build",
        about: "About",
        research: "Research",
        science: "Science"
      },

      // Language Switch
      lang: {
        ko: "Korean",
        en: "English",
      },

      // Call-to-Action (CTA) Buttons
      cta: {
        chat: "Chat with Dongle",
        buildApi: "Build with Dongle",
        getStarted: "Get Started",
        viewDocs: "View Docs",
        tryDemo: "Try Demo",
        viewReport: "View Full Report",
        readReport: "Read Safety Report",
        learnMore: "Learn more",
        getApiKey: "Get API Key",
        explorePartners: "Explore Partners",
      },

      // Hero Section
      hero: {
        tagline: "Our best AI models",
        subtext: "Experience unprecedented power, speed, and reliability in a single, unified platform.",
      },

      // Section Titles (SectionTitle Component)
      section: {
        coreModels: {
          title: "Our Core Models",
          subtitle: "Explore our lineup of models optimized for various purposes.",
        },
        handsOn: {
          title: "Experience It Live",
          subtitle: "See the powerful performance and flexibility of our product through real-world examples.",
        },
        performance: {
          title: "Performance Benchmarks",
          subtitle: "Experience superior benchmark performance compared to competitors.",
        },
        safety: {
          title: "Safety and Responsibility",
          subtitle: "We are committed to responsible AI development, prioritizing safety and reliability.",
        },
        build: {
          title: "Build with Dongle", // productName을 포함하는 경우 interpolation 사용 가능
          subtitle: "Leverage our powerful API and broad ecosystem to build next-generation applications.",
        },
      },

      // Models Section (Dongle data에 맞추어 키를 추가하거나, Dongle 키를 Dongle로 변경해야 정확하나,
      // 현재는 키가 없는 경우 data를 폴백으로 사용하도록 JSX를 수정합니다.)
      model: {
        viewSpecs: "View Specs",
        // 기존: "Dongle Ultra"
        "Dongle Pro": {
            name: "Dongle Plus", // name 키는 제거해도 되지만, i18next의 구조를 유지
            desc: "The high-performance multimodal model.",
        },
        // 기존: "Dongle Pro"
        "Dongle Flash": {
            name: "Dongle 1.5",
            desc: "The low-latency, real-time processing model.",
        },
        "Dongle Lite": {
            name: "Dongle 1.5 Lite",
            desc: "The lightweight model optimized for edge devices.",
        }
      },

      // Hands-on Section
      handsOn: {
        promptLabel: "Prompt: ",
        dialogTitle: "Interact with the AI Model",
        description: "The platform provides a seamless conversation experience. Try asking a complex, multi-step question.",
      },

      // Performance Section
      performance: {
        feature: {
          0: { title: "Next-Level Reasoning", description: "Achieve state-of-the-art results across major industry benchmarks." },
          1: { title: "Unmatched Speed", description: "Deliver results faster than ever, minimizing latency for real-time applications." },
        },
      },

      // Table (Benchmarking)
      table: {
        benchmark: "Benchmark",
        current: "Current",
        previousModel: "Previous Model",
        previous: "Previous",
        
        // --- 새로 추가된 키 ---
        competitorA: "???",
        competitorA_version: "5",
        competitorB: "???",
        competitorB_version: "2.5 Pro",
        competitorC: "DeepSea",
        competitorC_version: "r3",
        // -------------------
        
        row: { // 테이블 행 이름
          0: { name: "MMLU (Reasoning)" },
          1: { name: "HumanEval (Code)" },
          2: { name: "ImageNet (Vision)" },
        },
      },

      // Safety Section
      safety: {
        transparencyTitle: "Transparent and Trustworthy AI",
        description: "Safety is integrated into every step of development, from model training to deployment, ensuring responsible usage.",
        quote: "Our models are designed with ethical guidelines at their core, ensuring fair and reliable outcomes.",
        quoteAuthor: "Dr. Alpha Sigma, Head of Universe Research",
      },

      // Responsibility Callout
      responsibility: {
        calloutTitle: "Building responsibly in the agentic era",
        calloutDescription: "As we develop these new technologies, we recognize the responsibility it entails, and aim to prioritize safety and security in all our efforts.",
      },

      // Build Section
      build: {
        apiTitle: "API & SDKs",
        apiDescription: "Access our models through intuitive APIs and SDKs for Python, Node.js, and more. Deploy globally with low latency.",
        ecosystemTitle: "Developer Ecosystem",
        ecosystemDescription: "Join a thriving community and leverage integrations with popular frameworks and cloud services.",
      },

      // Footer
      footer: {
        slogan: "Dongle AI for all humanity!",
        followUs: "Follow us",
        privacy: "Privacy",
        terms: "Terms",
        manageCookies: "Manage cookies",
        copyright: "All rights reserved.",
        col1: { title: "Models", link1: "Dongle", link2: "Universe", link3: "Submarine" },
        col2: { title: "Resources", link1: "Documentation", link2: "Research", link3: "Case Studies" },
        col3: { title: "Company", link1: "About Us", link2: "Careers", link3: "Blog" },
        col4: { title: "Support", link1: "Contact", link2: "Help Center", link3: "Security" },
        col5: { title: "Legal", link1: "Terms of Service", link2: "Privacy Policy", link3: "Safety Principles" },
      },
    },
  },
  ko: {
    translation: {
      // Product Name
      productName: "Dongle",

      // Navigation
      nav: {
        models: "모델",
        handson: "예시",
        performance: "성능",
        safety: "안전성",
        build: "개발",
        about: "설명",
        research: "연구",
        science: "과학"
      },

      // Language Switch
      lang: {
        ko: "한국어",
        en: "영어",
      },

      // Call-to-Action (CTA) Buttons
      cta: {
        chat: "채팅 시작",
        buildApi: "API 구축",
        getStarted: "시작하기",
        viewDocs: "문서 보기",
        tryDemo: "체험",
        viewReport: "상세 리포트 보기",
        readReport: "안전 보고서 읽기",
        learnMore: "더 알아보기",
        getApiKey: "API 키 받기",
        explorePartners: "파트너 살펴보기",
      },

      // Hero Section
      hero: {
        tagline: "저희의 가장 뛰어난 AI 모델",
        subtext: "타의 추종을 불허하는 성능, 속도, 안정성을 하나의 통합된 플랫폼에서 경험하세요.",
      },

      // Section Titles
      section: {
        coreModels: {
          title: "핵심 모델 라인업",
          subtitle: "다양한 목적에 맞춰 최적화된 모델 라인업을 경험하세요.",
        },
        handsOn: {
          title: "직접 경험해 보세요",
          subtitle: "실제 사용 사례를 통해 제품의 강력한 성능과 유연성을 확인해 보세요.",
        },
        performance: {
          title: "성능 비교",
          subtitle: "타사 대비 압도적인 벤치마크 성능을 경험하세요.",
        },
        safety: {
          title: "안전성 및 책임감",
          subtitle: "안전성과 신뢰성을 최우선으로, 책임감 있는 AI 개발에 전념합니다.",
        },
        build: {
          title: "Dongle로 구축",
          subtitle: "강력한 API와 폭넓은 생태계를 활용하여 차세대 애플리케이션을 구축하세요.",
        },
      },

      // Models Section
       model: {
        viewSpecs: "모델 스펙 보기",
        "Dongle Pro": {
            name: "Dongle 1.5 Plus",
            desc: "고성능 멀티모달 모델.",
        },
        "Dongle Flash": {
            name: "Dongle 1.5",
            desc: "저지연, 실시간 처리 모델.",
        },
        "Dongle Lite": {
            name: "Dongle 1.5 Lite",
            desc: "경량화된 최적 모델.",
        }
      },

      // Hands-on Section
      handsOn: {
        promptLabel: "프롬프트: ",
        dialogTitle: "AI 모델과 대화하기",
        description: "이 플랫폼은 원활한 대화 경험을 제공합니다. 복잡하고 다단계적인 질문을 시도해 보세요.",
      },

      // Performance Section
      performance: {
        feature: {
          0: { title: "차원이 다른 추론 능력", description: "주요 산업 벤치마크 전반에서 최고 수준의 결과를 달성합니다." },
          1: { title: "타의 추종을 불허하는 속도", description: "실시간 애플리케이션의 지연 시간을 최소화하며, 그 어느 때보다 빠르게 결과를 제공합니다." },
        },
      },
      
      // Table (Benchmarking)
     table: {
        benchmark: "벤치마크",
        current: "현재 버전",
        previousModel: "Dongle",
        previous: "1.0",
        
        // --- 새로 추가된 키 ---
        competitorA: "???",
        competitorA_version: "5",
        competitorB: "???",
        competitorB_version: "2.5 Pro",
        competitorC: "DeepSea",
        competitorC_version: "r3",
        // -------------------
        
        row: { // 테이블 행 이름
          0: { name: "MMLU (추론)" },
          1: { name: "HumanEval (코드)" },
          2: { name: "ImageNet (시각)" },
        },
      },


      // Safety Section
      safety: {
        transparencyTitle: "투명하고 신뢰할 수 있는 AI",
        description: "모델 훈련부터 배포까지 개발의 모든 단계에 안전성이 통합되어, 책임감 있는 사용을 보장합니다.",
        quote: "저희 모델은 윤리적 가이드라인을 핵심에 두고 설계되어, 공정하고 신뢰할 수 있는 결과를 보장합니다.",
        quoteAuthor: "알파 시그마 박사, 우주 연구 총괄",
      },

      // Responsibility Callout
      responsibility: {
        calloutTitle: "에이전트 시대에 책임감 있게 구축하기",
        calloutDescription: "우리는 이러한 새로운 기술을 개발하면서 따르는 책임을 인지하고 있으며, 모든 노력에서 안전성과 보안을 최우선으로 합니다.",
      },

      // Build Section
      build: {
        apiTitle: "API 및 SDK",
        apiDescription: "Python, Node.js 등을 위한 직관적인 API 및 SDK를 통해 모델에 액세스하세요. 낮은 지연 시간으로 전 세계에 배포하세요.",
        ecosystemTitle: "개발자 생태계",
        ecosystemDescription: "활발한 커뮤니티에 참여하고 인기 프레임워크 및 클라우드 서비스와의 통합을 활용하세요.",
      },

      // Footer
      footer: {
        slogan: "세상을 위하여 동그란 AI를!",
        followUs: "소셜 미디어",
        privacy: "개인정보 보호",
        terms: "이용 약관",
        manageCookies: "쿠키 관리",
        copyright: "모든 권리 보유.",
        col1: { title: "모델", link1: "Dongle", link2: "Universe", link3: "Submarine" },
        col2: { title: "자료", link1: "문서", link2: "연구", link3: "사례 연구" },
        col3: { title: "회사", link1: "회사 소개", link2: "채용", link3: "블로그" },
        col4: { title: "지원", link1: "문의", link2: "고객 센터", link3: "보안" },
        col5: { title: "법률", link1: "서비스 약관", link2: "개인정보 보호 정책", link3: "안전 원칙" },
      },
    },
  },
};

i18n
  // i18next-http-backend import를 제거했으므로, .use(Backend)도 필요 없습니다.
  
  // 브라우저 언어, 로컬 스토리지 등에 기반한 언어 감지
  .use(LanguageDetector) 
  
  // React와 통합
  .use(initReactI18next) 
  
  // i18next 초기화
  .init({
    resources, // 여기에 번역 리소스를 직접 제공
    defaultNS: 'translation', 
    fallbackLng: 'en', 
    debug: false, 
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      lookupQuerystring: 'hl',
    },
  });

export default i18n;