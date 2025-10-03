// src/data/dongleLandingPageData.js
import imageA from '../assets/space-dongle-submarine.png'
import imageB from '../assets/dongle-submarine.png'
import videoA from '../assets/dongle-escape.mp4'
export const initialLandingData = {
    productName: "Dongle 1.5",
    heroTagline: "차세대 멀티모달 AI 모델, 무한한 가능성을 탐험하다.",
    
    models: [
      { name: "Dongle Pro", desc: "고성능 멀티모달 모델", href: "#" },
      { name: "Dongle Flash", desc: "저지연, 실시간 처리 모델", href: "#" },
      { name: "Dongle Lite", desc: "경량화된 엣지 최적 모델", href: "#" }
    ],
    
    handsOnDescription: "직관적인 인터페이스와 코드 예시를 통해 Dongle 1.5를 직접 체험할 수 있습니다.",
    handsOnMedia: [
      {
          type: 'image', // 타입: 이미지
          src: imageB,
          prompt: "Pig, corn, butterfly, and a ball riding a submarine runs in deep sea."
      },
      {
          type: 'video', // 타입: 비디오
          src: videoA,
          prompt: "Pig, corn smashes a butterfly and submarine. Ball riding a submarine escapes to space."
      },
      {
          type: 'image',
          src: imageA,
          prompt: "In space, ball runs to a mashmallow. Pig and corn chase ball."
      },
    ],

    
    performanceFeatures: [
      {
          title: "Adaptive Thinking",
          description: "복잡한 문제 해결을 위해 단계적 추론과 메모리 활용을 조합하는 적응형 사고 과정을 지원합니다.",
      },
      {
          title: "Deep Performance",
          description: "언어, 코드, 멀티모달 분야에서 세계 최고 수준의 벤치마크 결과를 달성했습니다.",
      }
    ],
  
    performanceTable: [
        { name: "MMLU (Reasoning)", currentValue: "91.2", isBest: true, previousValue: "2.15", competitorAValue: "90.5" , competitorBValue: "45.2" , competitorCValue: "21.5" },
        { name: "HumanEval (Code)", currentValue: "85.1", isBest: true, previousValue: "73.5", competitorAValue: "53.1" , competitorBValue: "34.2" , competitorCValue: "82.4"  },
      { name: "ImageNet (Vision)", currentValue: "87.3", isBest: true, previousValue: "27.8", competitorAValue: "23.7" , competitorBValue: "77.4" , competitorCValue: "66.4"  },
    ],
    
    safetyDescription: "Dongle 1.5는 안전성과 윤리를 최우선으로 하며, 사용자 보호를 위해 철저한 검증 절차와 필터링을 적용합니다.",
  
    buildApiContent: {
      title: "개발자 친화적 API",
      description: "SDK, 문서, 예제 코드 등 다양한 리소스를 통해 Dongle 1.5를 쉽게 통합하고 확장할 수 있습니다.",
    },
    
    buildEcosystemContent: {
      title: "풍부한 에코시스템",
      description: "다양한 플랫폼과의 통합을 지원하며, 오픈소스 커뮤니티와 협력하여 빠른 혁신을 가능하게 합니다.",
    }
};