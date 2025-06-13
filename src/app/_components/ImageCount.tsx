'use client';

import { useEffect } from 'react';
import { useImagesStore } from '@/providers/images-store-provider';

// i am only breaking this out in this way to demonstrate a global state implementation

const ImageCount = ({ countToSet }: { countToSet: number }) => {
    const { count, setCount } = useImagesStore((state) => state);

    useEffect(() => {
        if (countToSet) { 
            setCount(countToSet)
        } else {
            setCount(0)
        }
    }, [countToSet]);

    return (
        <span className="text-black font-semibold text-shadow-company-purple text-2xl">
        {`${count || ""} images`}
      </span>
    )
};

export default ImageCount;
