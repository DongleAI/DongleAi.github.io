import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NotFoundPage() {
  const location = useLocation();
  const hlParam = new URLSearchParams(location.search).get('hl');

  const appendHl = (path) => {
      if (!hlParam) return path;
      const separator = path.includes('?') ? '&' : '?';
      return `${path}${separator}hl=${hlParam}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-100 px-4">
      <h1 className="text-6xl font-extrabold text-fuchsia-400">404</h1>
      <p className="text-2xl font-semibold text-white mt-4">페이지를 찾을 수 없습니다</p>
      <p className="text-lg text-slate-400 mt-2 text-center">
        찾고 있는 페이지가 존재하지 않거나 다른 오류가 발생했습니다.
      </p>
      <Link 
        to={appendHl('/')}
        className="mt-8 px-6 py-3 rounded-full text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg shadow-fuchsia-500/30 text-lg font-semibold"
      >
        홈으로 가기
      </Link>
    </div>
  );
}
