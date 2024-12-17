import { useState, useEffect, useRef } from "react";
import analytic from '../../../public/analytic.png'
import shield from '../../../public/shield.png'
import analyzedata from '../../../public/analyzedata.png'
import Image from 'next/image';

export default function Services() {
    const [inView, setInView] = useState(false); 
    const ref = useRef(null); 

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true); 
            }
        }, { threshold: 0.4 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div id='services' ref={ref} className="h-auto md:h-[40rem] flex justify-center flex-col items-center py-12 bg-[#232428] md:px-12">
            <span className={`px-10 inline-block -rotate-3 rounded-full py-2 border ml-2 sm:text-5xl text-3xl font-bold ${inView ? "animate-serviceSlideFromTop" : "opacity-0"}`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 font-bold">
                    All Services
                </span>
            </span>

            <h1 className={`text-gray-400 sm:text-2xl text-xl font-bold mt-2 font-sans ${inView ? "animate-serviceSlideFromLeft" : "opacity-0"}`}>
                See our all service
            </h1>

            <p className={`text-gray-300 text-center mt-4 max-w-2xl md:px-0 px-12 font-semibold ${inView ? "animate-serviceSlideFromBottom" : "opacity-0"}`}>
                We are self-service data analytics software that lets you create visually appearing data visualizations and insightful dashboards in minutes.
            </p>

            <div className={`grid md:grid-cols-3 gap-6 mt-12 max-w-5xl md:px-0 px-12 ${inView ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
                {/* Analyze Your Data */}
                <div className={`bg-white rounded-lg shadow-sm p-6 hover:scale-105 hover:transition-all hover:shadow-lg hover:cursor-pointer duration-75 border md:border-none ${inView ? "animate-serviceWaveEffect" : ""}`}>
                    <div className="flex justify-center">
                        <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                            <Image
                                src={analyzedata}
                                alt="Analyze Your Data"
                                className="w-6 h-6"
                            />
                        </div>
                    </div>
                    <h3 className="text-gray-900 text-lg font-semibold mt-4 text-center group-hover:text-white">
                        Analyze Your Data
                    </h3>
                    <p className="text-gray-600 text-center mt-2">
                        Create reports with an easy-to-use drag-and-drop designer and analyze your data set.
                    </p>
                </div>

                {/* Collaborate Securely */}
                <div className={`bg-white rounded-lg shadow-sm p-6 hover:scale-105 hover:transition-all hover:shadow-lg hover:cursor-pointer duration-75 ${inView ? "animate-serviceWaveEffect" : ""}`}>
                    <div className="flex justify-center">
                        <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                            <Image
                                src={shield}
                                alt="Collaborate Securely"
                                className="w-6 h-6"
                            />
                        </div>
                    </div>
                    <h3 className="text-gray-900 text-lg font-semibold mt-4 text-center">
                        Collaborate Securely
                    </h3>
                    <p className="text-gray-600 text-center mt-2">
                        Share/publish your reports with your colleagues and collaborate securely with more than 25 users.
                    </p>
                </div>

                {/* Embedded Analytics */}
                <div className={`bg-white rounded-lg shadow-sm p-6 hover:scale-105 hover:transition-all hover:shadow-lg hover:cursor-pointer duration-75 ${inView ? "animate-serviceWaveEffect" : ""}`}>
                    <div className="flex justify-center">
                        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                            <Image
                                src={analytic}
                                alt="Embedded Analytics"
                                className="w-6 h-6"
                            />
                        </div>
                    </div>
                    <h3 className="text-gray-900 text-lg font-semibold mt-4 text-center">
                        Embedded Analytics
                    </h3>
                    <p className="text-gray-600 text-center mt-2">
                        Get a powerful analytics tool in your own brand name and enhance the predictive behaviors mapping.
                    </p>
                </div>
            </div>
        </div>
    );
}