import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow">
      <ul className="flex justify-center space-x-4 rtl:space-x-reverse">
        <li><Link className="hover:underline" to="/">الصفحة الرئيسية</Link></li>
        <li><Link className="hover:underline" to="/students">الطلاب</Link></li>
        <li><Link className="hover:underline" to="/employees">الموظفون</Link></li>
        <li><Link className="hover:underline" to="/installments">الأقساط</Link></li>
        <li><Link className="hover:underline" to="/whatsapp">الواتساب</Link></li>
      </ul>
    </nav>
  );
}
