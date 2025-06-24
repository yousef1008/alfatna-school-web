import React, { useState } from "react";

const students = [
  { name: "آدم محمد علي", total: 170 },
  { name: "أحمد جمال حسن", total: 170 },
  { name: "إياد سامي خالد", total: 170 },
  { name: "تميم هشام زيد", total: 170 },
  { name: "حسن نادر فهد", total: 170 },
];

export default function InstallmentsTable() {
  const [installments, setInstallments] = useState(
    students.map((s) => ({ ...s, paid: 0 }))
  );

  const handlePay = (index, amount) => {
    const updated = [...installments];
    updated[index].paid += parseFloat(amount);
    setInstallments(updated);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">الأقساط</h1>
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">اسم الطالب</th>
            <th className="border px-4 py-2">المبلغ الكلي</th>
            <th className="border px-4 py-2">المدفوع</th>
            <th className="border px-4 py-2">المتبقي</th>
            <th className="border px-4 py-2">دفع</th>
          </tr>
        </thead>
        <tbody>
          {installments.map((s, i) => (
            <tr key={i}>
              <td className="border px-4 py-2">{s.name}</td>
              <td className="border px-4 py-2">{s.total}</td>
              <td className="border px-4 py-2">{s.paid}</td>
              <td className="border px-4 py-2">{s.total - s.paid}</td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  placeholder="المبلغ"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handlePay(i, e.target.value);
                  }}
                  className="border px-2 py-1 w-20 text-sm"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
