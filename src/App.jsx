// src/App.jsx


// Dummy comment to force re-transpilation

import { roundData } from './data/roundData';



















import Layout from './components/Layout'; // 🚨 새로 만든 Layout 컴포넌트 임포트
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LocalizedPage from './components/LocalizedPage';



function App() {
  return (
    <Router>
      <Routes>
        {/* 🚨 수정: 최상위 라우트에 Layout 컴포넌트를 적용하고, 
             하위 페이지들을 중첩 라우트(<Outlet>을 통해)로 처리합니다. */}
        <Route element={<Layout />}> 
          
          {/* Layout 안에 렌더링될 페이지들 */}
          <Route path="/" element={<LocalizedPage page="HomePage" />} />
          <Route path="/about" element={<LocalizedPage page="About" />} />
          <Route path="/privacy" element={<LocalizedPage page="Privacy" />} />
          <Route path="/careers" element={<LocalizedPage page="Careers" />} />
          <Route path="/safety" element={<LocalizedPage page="Safety" />} />
<Route path="/models/dongle" element={<LocalizedPage page="AiDongle" />} />
          <Route path="/models/round" element={<LocalizedPage page="AiRound" />} />
          <Route path="/models/abyss" element={<LocalizedPage page="AiAbyss" />} />
          <Route path="/models/submarine" element={<LocalizedPage page="AiSubmarine" />} />
          <Route path="/models/universe" element={<LocalizedPage page="AiUniverse" />} />
          <Route path="/science/alphasigma" element={<LocalizedPage page="AlphaSigma" />} />
          <Route path="/science/icyid" element={<LocalizedPage page="IcyID" />} />
          <Route path="/science/notalone" element={<LocalizedPage page="NotAlone" />} />
          <Route path="/terms" element={<LocalizedPage page="Terms" />} />
          <Route path="/models" element={<LocalizedPage page="ModelsPage" />} />
          <Route path="/research" element={<LocalizedPage page="ResearchPage" />} />
          <Route path="/science" element={<LocalizedPage page="SciencePage" />} />
          <Route path="*" element={<LocalizedPage page="NotFoundPage" />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;