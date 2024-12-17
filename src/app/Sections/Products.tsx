"use client";
import React from "react";
import Image from "next/image";
import proctorparhai from "../../../public/proctorparhai.jpeg";
import iparhai from "../../../public/iParhai.png";
import eyecon from "../../../public/eyecon.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TabsDemo() {
    const carouselItems = [
        {
            title: "ProctorParhai",
            image: proctorparhai,
            description:
                "This innovative app utilizes AI for online proctoring. ProctorParhai ensures exam integrity by confirming candidate identity, monitoring focus, detecting unauthorized materials, and preventing external assistance.",
            link: "#",
            buttonText: "Visit ProctorParhai",
        },
        {
            title: "iParhai",
            image: iparhai,
            description:
                "This product is developed to meet the growing needs of online education. It provides an adaptive and adaptable solution to deliver content according to the specific needs of a learner. It is being adopted by various schools.",
            link: "#",
            buttonText: "Visit iParhai",
        },
        {
            title: "Eyecon",
            image: eyecon,
            description:
                "This project uses computer vision to detect mixed critical events with a context-aware system. Leveraging Vision Transformers and Visual Language Models, it identifies criticalities in a smart city in real-time.",
            link: "#",
            buttonText: "Coming Soon",
        },
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <div id="products" className="w-full justify-center flex mt-16">
                <span className="px-10 inline-block -rotate-3 rounded-full py-2 border border-black ml-2 sm:text-5xl text-3xl font-bold"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-black font-bold" >
                        Products
                    </span>
                </span>
            </div>
            <div className="mb-16 mt-8 max-w-6xl xl:mx-auto px-0 mx-5 lg:mx-10  border rounded-lg shadow-lg">
                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={5000}
                    showDots
                    keyBoardControl
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                    className="overflow-hidden "
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col lg:flex-row items-center justify-between rounded-lg p-10 px-8 lg:px-28 bg-white text-black lg:h-[25rem] lg:mb-12 overflow-hidden"
                        >
                            <div className="lg:w-[50%] text-center lg:text-left">
                                <h2 className="text-3xl md:text-6xl font-bold mb-4">{item.title}</h2>
                                <p className="text-lg text-gray-500 font-medium mb-6">{item.description}</p>
                                <a
                                    href={item.link}
                                    className="px-6 py-3 bg-[#232428] text-blue-500 font-semibold rounded-full hover:bg-gray-200 transition duration-300"
                                >
                                    {item.buttonText}
                                </a>
                            </div>
                            <div className="lg:w-[40%] mt-6 lg:mt-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
}