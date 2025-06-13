'use client';

import { useEffect } from 'react';
import { useImagesStore } from "@/providers/images-store-provider";
import type { Photo } from './ImageContainer';
import Link from 'next/link';
import ImageCard from './ImageCard';

const ImagesList = ({ images }: { images: Array<Photo> }) => {
    const { imagesList, setImagesList } = useImagesStore((state) => state);

    useEffect(() => {
        if (images) {
            setImagesList(images)
        } else {
            setImagesList([])
        }
    }, [imagesList]);

    return (
        <ul className="flex flex-row flex-wrap gap-8 items-center">

        {/* iterate over the map and return an array of JSX elements containing the link to the card page and the image card information */}
        {(images || []).map((img) => (
          <li key={img.id} className="flex-1/3">
            <Link href={`/image/${img?.id}`} className="hover:opacity-75 cursor-pointer">
              <ImageCard data={img} height={200} width={200} />
            </Link>
          </li>
        ))}
    
      </ul>)

};

export default ImagesList;
