import Image from "next/image"
import Link from "next/link";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

type CardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
}

const CardDetail: React.FC<CardProps> = ({ id, title, description, image }) => {

  return (
    <div className="h-full rounded overflow-hidden shadow-lg">
      <div className="">
        <TransformWrapper
          initialScale={1}
          initialPositionX={0}
          initialPositionY={0}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <div className="flex items-center justify-center">
              {/* ボタンは一旦表示しない */}
              {/* <div className="opacity-0">
                <button onClick={() => zoomIn()}></button>
                <button onClick={() => zoomOut()}></button>
                <button onClick={() => resetTransform()}></button>
              </div> */}
              <TransformComponent>
                <div className="w-full h-full">
                  <div className="relative">
                    <Image className="w-full object-cover " src={image} alt={title}
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </TransformComponent>
            </div>
          )}
        </TransformWrapper>
      </div>
      <div className="px-6 py-4 min-h-[140px]">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-base max-h-48 overflow-y-auto">{description}</p>
      </div>
    </div>
  );
}

export default CardDetail;
