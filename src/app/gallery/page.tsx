import Image from "next/image";
import Card from "../components/Card/Card";

// 本来はフックまたは当該ページで絵画一覧を取得することを想定
const items = [
  {
    id: 1,
    image: "/default-image.jpg",
    title: "サンプルタイトル1",
    description: "ここに説明文が入ります。詳細な内容が記載されており、場合によっては長くなることがあります。"
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center align-items-center">
        {items.map(item => (
          <Card key={item.id} id={item.id} image={item.image} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}
