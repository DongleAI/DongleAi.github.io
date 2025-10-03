// src/App.jsx

import AiProductLandingTemplate from './components/AiProductLandingTemplate';
import { initialLandingData } from './data/dongleLandingPageData';

function App() {
  return (
    // 랜딩 페이지에 필요한 데이터를 props로 전달
    <AiProductLandingTemplate data={initialLandingData} />
  );
}

export default App;