import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import DashboardPage from './features/dashboard/pages/DashboardPage';
import DetailPage from './features/scholarship-detail/pages/DetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/scholarship/:id" element={<DetailPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}