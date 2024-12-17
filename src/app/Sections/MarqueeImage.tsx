import React from 'react';
import Image from 'next/image';

interface MarqueeImageProps {
    imageSrc: string; // Path relative to the public folder
}

function MarqueeImage({ imageSrc }: MarqueeImageProps) {
    return (
        <div className="px-0">
            <Image
                src={imageSrc}
                priority
                alt="Marquee Image"
                width={100}
                height={110}
                className="sm:h-16 sm:w-[80px] md:h-16 md:w-[90px]  lg:h-16 xl:h-20 h-[55px] w-[70px] px-1 mx-8 md:mx-8 lg:mx-12 xl:mx-[60px] z-[1999]"
            />
        </div>
    );
}

export default MarqueeImage;