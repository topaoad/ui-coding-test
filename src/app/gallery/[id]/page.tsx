"use client"

import CardDetail from "@/app/components/Card/CardDetail";
import { useParams } from 'next/navigation'
import useSWR from "swr";

// 本来はURLのidを元に、サーバーのエンドポイントから絵画情報を取得することを想定
const items = [
  {
    id: 1,
    image: "/default-image.jpg",
    title: "サンプルタイトル1",
    description: "ここに説明文が入ります。詳細な内容が記載されており、場合によっては長くなることがあります。ここに説明文が入ります。詳細な内容が記載されており、場合によっては長くなることがありますここに説明文が入ります。詳細な内容が記載されており、場合によっては長くなることがありますここに説明文が入ります。詳細な内容が記載されており、場合によっては長くなることがありますここに説明文が入ります。詳細な内容が記載されており、場合によっては長くなることがありますここに説明文が入ります。詳細な内容が記載されており、場合によっては長くなることがありますここに説明文が入ります。詳細な内容が記載されており、場合によっては長くなることがありますここに説明文が入ります。詳細な内容が記載されており、場合によっては長くなることがありますここに説明文が入ります。詳細な内容が記載されており、場合によっては長くなることがありますここに説明文が入ります。詳細な内容が記載されており、場合によっては長くなることがあります"
  },
  {
    id: 2,
    image: "/default-image2.jpg",
    title: "サンプルタイトル2",
    description: "短い説明文の例。この内容はすぐに完結します。"
  },
  {
    id: 3,
    image: "/default-image2.jpg",
    title: "サンプルタイトル3",
    description: "短い説明文の例。この内容はすぐに完結します。"
  },
];

function fetchItem(id: string) {
  return items.find(item => item.id === parseInt(id));
}

export default function Home() {
  const { id } = useParams()

  const { data: item, error } = useSWR(id, fetchItem);

  if (!item) {
    return <div>Loading...</div>;
  }
  if (error) return <div>Failed to load data.</div>;

  return (
    <div className="min-h-screen-68 max-w-[800px] mx-auto pb-[40px]">
      {item && <CardDetail key={item.id} id={item.id} image={item.image} title={item.title} description={item.description} />}
    </div>
  );
}