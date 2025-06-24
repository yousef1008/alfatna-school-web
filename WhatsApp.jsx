import React from 'react';
import { students } from '../data/students';

export default function WhatsApp() {
  const studentsWithPhones = students.map((s, idx) => ({
    ...s,
    paid: 0,
    phone: `96279${1000000 + idx}`
  }));

  const getMessage = (s) =>
    `السلام عليكم، نذكركم بوجود قسط مستحق لطفلكم ${s.name}. المبلغ المتبقي: ${s.total - s.paid} دينار. يرجى السداد.`;

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">📲 رسائل واتساب للمتأخرين</h2>
      <ul className="space-y-3">
        {studentsWithPhones.filter((s) => s.total - s.paid > 0).map((s, idx) => (
          <li key={idx} className="flex justify-between items-center border p-3 rounded bg-yellow-50">
            <div>
              <div className="font-bold">{s.name}</div>
              <div className="text-sm">المتبقي: {s.total - s.paid} د.ك</div>
            </div>
            <a
              href={`https://wa.me/${s.phone}?text=${encodeURIComponent(getMessage(s))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              إرسال واتساب
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}