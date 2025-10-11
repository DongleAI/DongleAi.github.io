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
      <p className="text-2xl font-semibold text-white mt-4">Page Not Found</p>
      <p className="text-lg text-slate-400 mt-2 text-center">
        The page you're looking for doesn't exist or an other error occurred.
      </p>
      <Link 
        to={appendHl('/')}
        className="mt-8 px-6 py-3 rounded-full text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg shadow-fuchsia-500/30 text-lg font-semibold"
      >
        Go to Home
      </Link>
    </div>
  );
}
