// src/App.jsx

import AiDongle from './pages/AiDongle.jsx';
// Dummy comment to force re-transpilation
import AiRound from './pages/AiRound.jsx';
import { roundData } from './data/roundData';
import AiAbyss from './pages/AiAbyss.jsx';
import AiSubmarine from './pages/AiSubmarine.jsx';
import AiUniverse from './pages/AiUniverse.jsx';
import AboutPage from './pages/About.jsx';
import PrivacyPage from './pages/Privacy.jsx';
import CareersPage from './pages/Careers.jsx';
import SafetyPage from './pages/Safety.jsx';
import AlphaSigmaPage from './pages/AlphaSigma.jsx';
import IcyIDPage from './pages/IcyID.jsx';
import NotAlonePage from './pages/NotAlone.jsx';
import TermsPage from './pages/Terms.jsx';
import ModelsPage from './pages/ModelsPage.jsx';
import ResearchPage from './pages/ResearchPage.jsx';
import SciencePage from './pages/SciencePage.jsx';





import Layout from './components/Layout'; // 🚨 새로 만든 Layout 컴포넌트 임포트
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage.jsx';

import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* 🚨 수정: 최상위 라우트에 Layout 컴포넌트를 적용하고, 
             하위 페이지들을 중첩 라우트(<Outlet>을 통해)로 처리합니다. */}
        <Route element={<Layout />}> 
          
          {/* Layout 안에 렌더링될 페이지들 */}
          <Route path="/" element={<HomePage ns="home" />} />
          <Route path="/about" element={<AboutPage ns="about" />} />
          <Route path="/privacy" element={<PrivacyPage ns="privacy" />} />
          <Route path="/careers" element={<CareersPage ns="careers" />} />
          <Route path="/safety" element={<SafetyPage ns="safety" />} />
          <Route 
            path="/models/dongle" 
            element={<AiDongle ns="aidongle" />}
          /> 
          <Route path="/models/round" element={<AiRound data={roundData} />} />
          <Route path="/models/abyss" element={<AiAbyss ns="aiabyss" />} />
          <Route path="/models/submarine" element={<AiSubmarine ns="aisubmarine" />} />
          <Route path="/models/universe" element={<AiUniverse ns="aiuniverse" />} />
          <Route path="/science/alphasigma" element={<AlphaSigmaPage ns="alphasigma" />} />
          <Route path="/science/icyid" element={<IcyIDPage ns="icyid" />} />
          <Route path="/science/notalone" element={<NotAlonePage ns="notalone" />} />
          <Route path="/terms" element={<TermsPage ns="terms" />} />
          <Route path="/models" element={<ModelsPage ns="models_page" />} />
          <Route path="/research" element={<ResearchPage ns="research_page" />} />
          <Route path="/science" element={<SciencePage ns="science_page" />} />
          <Route path="*" element={<NotFoundPage ns="notfoundpage" />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;