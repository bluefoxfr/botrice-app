import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstComing from './pages/FirstComing/FirstComing';
import Markdown from './pages/Markdown';
import Welcome from './pages/Welcome';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="config" element={<FirstComing />} />
        <Route path="markdown" element={<Markdown />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

postMessage({ payload: 'removeLoading' }, '*');
