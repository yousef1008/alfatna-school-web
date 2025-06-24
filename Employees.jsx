import React from 'react';
import { salaries } from '../data/salaries';

export default function Employees() {
  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">👩‍🏫 إدارة الموظفين</h2>
      <ul className="space-y-6">
        {salaries.map((emp, idx) => (
          <li key={idx} className="border rounded p-4 bg-gray-50 shadow-sm">
            <div className="font-bold text-lg mb-2">{emp.name}</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              {emp.salaryHistory.map((s, i) => (
                <div key={i} className="bg-white border p-2 rounded text-center">
                  {s.month}: {s.amount} د.
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}