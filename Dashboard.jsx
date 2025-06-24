import React from 'react';
import { students } from '../data/students';
import { employees } from '../data/employees';

const months_260 = ["9/2024", "10/2024", "11/2024", "12/2024"];
const months_290 = ["1/2025", "2/2025", "3/2025", "4/2025", "5/2025"];

export default function Dashboard() {
  const totalStudents = students.length;
  const totalPaid = 0;
  const totalDue = students.reduce((acc, s) => acc + s.total, 0);
  const totalEmployees = employees.length;
  const totalPayroll = totalEmployees * (260 * months_260.length + 290 * months_290.length);

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">📊 التقارير العامة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded">
          <h3 className="font-bold text-lg mb-2">الطلاب</h3>
          <p>عدد الطلاب: {totalStudents}</p>
          <p>المبلغ المطلوب الكلي: {totalDue} د.ك</p>
          <p>المدفوع (مبدئي): {totalPaid} د.ك</p>
        </div>
        <div className="bg-green-50 p-4 rounded">
          <h3 className="font-bold text-lg mb-2">الموظفون</h3>
          <p>عدد المعلمات: {totalEmployees}</p>
          <p>إجمالي الرواتب حتى 5/2025: {totalPayroll} د.ك</p>
        </div>
      </div>
    </div>
  );
}