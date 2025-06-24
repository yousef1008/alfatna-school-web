import React from "react";

const students = [
  "آدم محمد علي", "أحمد جمال حسن", "إياد سامي خالد", "تميم هشام زيد",
  "حسن نادر فهد", "خالد عبد الله عمر", "رامي يوسف مازن", "زيد عدنان إيهاب",
  "سيف نبيل فراس", "شادي طارق جهاد", "طارق عبد الرحمن", "عادل سامر رائد",
  "فارس ناصر مجد", "قيس وليد سعد", "كريم إيهاب سمير", "مازن أنس حسام",
  "نادر سليم أمجد", "هاشم عامر خليل", "يزن رائد زكريا"
];

export default function StudentsTable() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">قائمة الطلاب</h1>
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">الاسم الكامل</th>
          </tr>
        </thead>
        <tbody>
          {students.map((name, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2 text-right">{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
