import React, { useState } from 'react';
import { students as initialStudents } from '../data/students';

export default function Students() {
  const [students, setStudents] = useState(initialStudents);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [total, setTotal] = useState("");

  const addStudent = () => {
    if (name && grade && total) {
      setStudents([...students, { name, grade, total: parseFloat(total) }]);
      setName(""); setGrade(""); setTotal("");
    }
  };

  const deleteStudent = (index) => {
    const updated = [...students];
    updated.splice(index, 1);
    setStudents(updated);
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">👨‍🎓 إدارة الطلاب</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        <input type="text" placeholder="اسم الطالب" className="p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="الصف" className="p-2 border rounded" value={grade} onChange={(e) => setGrade(e.target.value)} />
        <input type="number" placeholder="المبلغ الكلي" className="p-2 border rounded" value={total} onChange={(e) => setTotal(e.target.value)} />
        <button onClick={addStudent} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">إضافة الطالب</button>
      </div>
      <ul className="space-y-2">
        {students.map((s, idx) => (
          <li key={idx} className="flex justify-between items-center border rounded p-3 bg-gray-50 shadow-sm">
            <div>
              <div className="font-bold">{s.name}</div>
              <div className="text-sm text-gray-600">{s.grade} - {s.total} د.ك</div>
            </div>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => deleteStudent(idx)}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  );
}