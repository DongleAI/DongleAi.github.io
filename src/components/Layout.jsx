// src/components/Layout.jsx

import Header from './Header'; 
import Footer from './Footer';
// 🚨 수정: Outlet을 임포트합니다.
import { Outlet } from 'react-router-dom';

// 모든 페이지 콘텐츠를 감싸는 레이아웃 컴포넌트
function Layout() {
  // 🚨 children prop은 필요 없습니다.
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. 고정 헤더 영역 */}
      <Header />
      
      {/* 2. 메인 콘텐츠 영역: Outlet으로 변경 */}
      <main className="flex-grow">
        {/* 🚨 수정: 자식 라우트의 내용이 이 자리에 렌더링됩니다. */}
        <Outlet /> 
      </main>
      
      {/* 3. 고정 푸터 영역 */}
      <Footer />
      
    </div>
  );
}

export default Layout;