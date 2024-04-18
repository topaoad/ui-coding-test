import Image from "next/image"
import Link from "next/link";


type CardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ id, title, description, image }) => {
  // 説明文を50文字でカットし、それ以上の場合は...を追加
  const shortDescription = description.length > 30 ? description.substring(0, 30) + "..." : description;

  return (
    <Link href={`/gallery/${id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="relative ">
          <Image className="w-full object-cover" src={image} alt={title}
            width={200}
            height={200}
          />
        </div>
        <div className="px-6 py-4 min-h-[140px]">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{shortDescription}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
