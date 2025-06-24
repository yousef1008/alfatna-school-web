import React, { useState } from 'react';
import { students as initialStudents } from '../data/students';

export default function Installments() {
  const [installments, setInstallments] = useState(initialStudents.map((s) => ({ name: s.name, total: s.total, paid: 0 })));
  const [name, setName] = useState("");
  const [paid, setPaid] = useState("");

  const handlePayment = () => {
    const idx = installments.findIndex((i) => i.name === name);
    if (idx >= 0 && paid) {
      const updated = [...installments];
      updated[idx].paid += parseFloat(paid);
      setInstallments(updated);
      setName(""); setPaid("");
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">💰 إدارة الأقساط</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <input type="text" placeholder="اسم الطالب" className="p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="المبلغ المدفوع" className="p-2 border rounded" value={paid} onChange={(e) => setPaid(e.target.value)} />
        <button onClick={handlePayment} className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700">تسجيل الدفع</button>
      </div>
      <ul className="space-y-2">
        {installments.map((s, i) => (
          <li key={i} className={`border rounded p-3 shadow-sm ${s.total - s.paid > 0 ? 'bg-red-50' : 'bg-green-50'}`}>
            <div className="font-bold">{s.name}</div>
            <div className="text-sm">المدفوع: {s.paid} د. — المتبقي: {Math.max(s.total - s.paid, 0)} د.</div>
          </li>
        ))}
      </ul>
    </div>
  );
}