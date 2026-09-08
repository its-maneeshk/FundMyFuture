import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import DashboardPage from './features/dashboard/pages/DashboardPage';
import DetailPage from './features/scholarship-detail/pages/DetailPage';
import AboutPage from './features/about/pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/scholarship/:id" element={<DetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}