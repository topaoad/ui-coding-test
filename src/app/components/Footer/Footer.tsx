"use client"

import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-200 p-2 text-center">
      <div className="flex justify-between items-center">
        <Link href="#">メニュー1</Link>
        <Link href="#">メニュー2</Link>
        <Link href="#">メニュー3</Link>
      </div>
    </div>
  );
}

export default Footer