// src/main.jsx 또는 src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. 여기서 Suspense를 import 해야 합니다.
import { Suspense } from 'react'; 
import App from './App.jsx';
import './index.css';

// i18n 설정 파일 import (이것이 누락되면 번역 자체가 작동하지 않습니다.)
import './i18n.js'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. <Suspense>를 올바르게 사용합니다. */}
    <Suspense fallback={<div>Loading app...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
);