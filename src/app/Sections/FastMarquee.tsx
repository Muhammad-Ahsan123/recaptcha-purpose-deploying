// import React from "react";
// import MarqueeImage from "../Sections/MarqueeImage";
// import Marquee from "react-fast-marquee";

// const FastMarquee = () => {
//     const images = [
//         "/fastone.png",
//         "/googlecloudplatform_.png",
//         "/hec2.jpg",
//         "/ncai2.png",
//         "/nic4.png",
//         "/nividia.png",
//         "/pasha7.png",
//         "/pif-logo.png",
//         "/shamsipng5.png",
//     ];

//     return (
//         <Marquee
//             gradient={true}
//             gradientWidth={85}
//             className="bg-gray-200 mb-12 xl:mb-16 h-[150px]">
//             {images.map((src, index) => (
//                 <MarqueeImage key={index} imageSrc={src} />
//             ))}
//         </Marquee>
//     );
// };

// export default FastMarquee;


import React from "react";
import MarqueeImage from "../Sections/MarqueeImage";
import Marquee from "react-fast-marquee";
// import Head from "next/head";

const FastMarquee = () => {
    const images = [
        "/fastone.png",
        "/googlecloudplatform_.png",
        "/hec2.jpg",
        "/ncai2.png",
        "/nic4.png",
        "/nividia.png",
        "/pasha7.png",
        "/pif-logo.png",
        "/shamsipng5.png",
    ];

    return (
        <>
            <Marquee
                gradient={true}
                gradientWidth={85}
                className="bg-gray-200 mb-12 xl:mb-16 h-[150px]">
                {images.map((src, index) => (
                    <MarqueeImage key={index} imageSrc={src} />
                ))}
            </Marquee>
        </>
    );
};

export default FastMarquee;
