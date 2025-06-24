import React from 'react';
import Students from './pages/Students';
import Employees from './pages/Employees';
import Installments from './pages/Installments';
import WhatsApp from './pages/WhatsApp';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        مدرسة الفطنة النموذجية
      </h1>
      <div className="grid gap-8">
        <Dashboard />
        <Students />
        <Employees />
        <Installments />
        <WhatsApp />
      </div>
    </div>
  );
}