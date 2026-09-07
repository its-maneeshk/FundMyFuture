import React from 'react';
import MainLayout from './components/layout/MainLayout';
import DashboardPage from './features/dashboard/pages/DashboardPage';

export default function App() {
  return (
    <MainLayout>
      <DashboardPage />
    </MainLayout>
  );
}