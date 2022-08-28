import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FirstComing } from './pages/FirstComing/FirstComing';
import Welcome from './pages/Welcome';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="config" element={<FirstComing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

postMessage({ payload: 'removeLoading' }, '*');
