import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import StudentsTable from "./StudentsTable";
import EmployeesTable from "./EmployeesTable";
import InstallmentsTable from "./InstallmentsTable";
import WhatsAppButton from "./WhatsAppButton";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<div className="text-xl">أهلاً بكم في نظام إدارة المدرسة</div>} />
            <Route path="/students" element={<StudentsTable />} />
            <Route path="/employees" element={<EmployeesTable />} />
            <Route path="/installments" element={<InstallmentsTable />} />
            <Route path="/whatsapp" element={<WhatsAppButton />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
