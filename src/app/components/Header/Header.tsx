"use client"

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-white px-4 py-2 z-10 ">
      <Link href="/" className="text-xl font-bold">ロゴ</Link>
      <button className="md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
        <span>{isOpen ? "✕" : "☰"}</span>
      </button>
      {/* メニュー項目: PC表示 */}
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          <li><Link href="#">メニュー1</Link></li>
          <li><Link href="#">メニュー2</Link></li>
          <li><Link href="#">メニュー3</Link></li>
        </ul>
      </nav>
      {/* メニュー項目: モバイル表示 */}
      <nav className={`fixed top-0 right-0 h-full bg-white transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"} pr-7 pt-10 pl-4 pb-4 md:p-4 md:hidden`}>
        <ul>
          <li className="mb-4"><Link href="#">メニュー1</Link></li>
          <li className="mb-4"><Link href="#">メニュー2</Link></li>
          <li className="mb-4"><Link href="#">メニュー3</Link></li>
        </ul>
      </nav>
    </div>
  );
}
export default Header
