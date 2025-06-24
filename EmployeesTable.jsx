import React from "react";

const employees = [
  "سهاد محمد حسين الطويل", "الاء كامل احمد بني ياسين", "بدور محي الدين عبدالكريم بني ياسين",
  "غاده محمود موسى بني عيسى", "حلى حيدر حسين حرب", "ملاك نعيم عبدالله الشقيرات",
  "شروق محمود غانم الياسين", "امل احمد حسن بني ياسين", "وعد احمد حسن بني ياسين",
  "رحمه جعفر منصور السباعي", "هديل ساطع حسين الصالح", "سماح لطفي عبدالرحمن قرقز",
  "إحسان احمد بني ياسين", "اسلام سليمان احمد بني ياسين", "ميساء سميح فرحان مهاوش",
  "نسيبة هاني احمد بني ياسين", "هداية نايف هلال بني ياسين"
];

const salaryHistory = [
  { month: "9/2024", amount: 260 },
  { month: "10/2024", amount: 260 },
  { month: "11/2024", amount: 260 },
  { month: "12/2024", amount: 260 },
  { month: "1/2025", amount: 290 },
  { month: "2/2025", amount: 290 },
  { month: "3/2025", amount: 290 },
  { month: "4/2025", amount: 290 },
  { month: "5/2025", amount: 290 }
];

export default function EmployeesTable() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">قائمة المعلمات والرواتب</h1>
      {employees.map((name, index) => (
        <div key={index} className="mb-6 border rounded shadow p-4 bg-white">
          <h2 className="text-lg font-semibold mb-2">{index + 1}. {name}</h2>
          <table className="table-auto w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1">الشهر</th>
                <th className="border px-2 py-1">الراتب (دينار)</th>
              </tr>
            </thead>
            <tbody>
              {salaryHistory.map((s, i) => (
                <tr key={i}>
                  <td className="border px-2 py-1 text-center">{s.month}</td>
                  <td className="border px-2 py-1 text-center">{s.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
