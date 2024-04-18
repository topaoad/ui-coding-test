import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href={`/gallery`}>
        絵画一覧ページへ
      </Link>
    </div>
  );
}
