import React from "react";
import mainBannerRigthImage from "../../../public/hexagon_hero-section_1-removebg-preview.png";
import Image from "next/image";
import Head from "next/head";

export function MainBanner() {
  return (
    <>
      <Head>
        {/* Preload the video */}
        <link rel="preload" as="video" href="/compressbannervideo.mp4" />
      </Head>
      <div
        id="home"
        className="relative overflow-hidden border-10 h-screen md:h-[100vh] flex justify-center sm:items-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-screen md:h-[100vh] bg-no-repeat opacity-[0.88] object-cover"
          src="/compressbannervideo.mp4"
        ></video>

        <div className="w-full rounded-md relative flex flex-col items-start sm:items-center justify-center antialiased overflow-hidden">
          <div className="flex flex-col gap-4 lg:flex-row items-center justify-between px-4 md:px-16 lg:px-20 xl:px-40 lg:h-screen z-10">
            {/* Left Side Div (Text) */}
            <div className="w-full lg:w-[55%] gap-6 text-center lg:text-left sm:mt-0 mt-4 font-sans animate-slideInLeft">
              <h2 className="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-t from-gray-400 to-neutral-100 font-bold h-[55px] md:h-[84px]">
                Syslab.ai
              </h2>
              <h2 className="text-xl sm:text-2xl font-semibold inline-block py-1 text-white">
                Expertise in Ai Solution, Cross Platform Mobile Apps, Data
                Engineering, Web Interfaces
              </h2>
              <p className="text-sm font-normal sm:font-semibold leading-5 sm:leading-6 tracking-wider text-gray-100 sm:text-sm md:text-base">
                SYSLAB.AI (Private) Limited focuses on providing and developing
                innovative Artificially Intelligent (AI) solutions. Our motto is
                that technology and innovation should be explored to develop
                efficient and effective solutions. With a team of dedicated and
                talented professionals, developers, and scientists, we strive to
                deliver efficient solutions to B2B as well as B2C market.
                Inspired by the emerging technologies such as Deep Learning,
                Natural Language Processing, Computer Vision, Generative AI,
                IoTs, and Blockchain, we are developing and enriching solutions
                that can be beneficial for the industry. For details, please
                feel free to send us a query at info at syslab.com
              </p>
            </div>

            {/* Right Side Div (Image) */}
            <div className="mt-8 lg:mt-0 justify-center lg:justify-end lg:block hidden animate-slideInRight">
              <Image
                src={mainBannerRigthImage}
                alt="Banner Image"
                className="max-w-full h-auto z-50"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
