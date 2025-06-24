import React from "react";

const students = [
  { name: "آدم محمد علي", total: 170, paid: 70, phone: "962790000001" },
  { name: "أحمد جمال حسن", total: 170, paid: 170, phone: "962790000002" },
  { name: "إياد سامي خالد", total: 170, paid: 50, phone: "962790000003" },
];

export default function WhatsAppButton() {
  const getMessage = (s) =>
    `مرحباً، نذكركم بوجود قسط مستحق لطفلكم ${s.name}. المتبقي: ${s.total - s.paid} دينار. يرجى السداد.`;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">إرسال رسائل واتساب</h1>
      <ul className="space-y-3">
        {students.filter(s => s.total > s.paid).map((s, i) => (
          <li key={i} className="flex justify-between items-center border p-3 rounded bg-yellow-50">
            <div>
              <div className="font-bold">{s.name}</div>
              <div className="text-sm text-gray-700">المتبقي: {s.total - s.paid} د.ك</div>
            </div>
            <a
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
              href={`https://wa.me/${s.phone}?text=${encodeURIComponent(getMessage(s))}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              إرسال واتساب
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
