import React from "react";
import FastMarquee from "./FastMarquee";
export default function MarqueTab() {
    return (
        <div id="awards" className="flex flex-col items-center justify-center bg-white text-gray-800 pt-12 xl:pt-24">
            {/* Section: Translating Technology */}
            <section className="text-center py-0 px-6">
                <h1 className="text-4xl font-bold mb-6">
                    Translating technology <br /> into a positive impact
                </h1>
                <p className="text-lg max-w-3xl mx-auto mb-8">
                    Our approach allows us to deliver exceptional experiences that drive
                    growth and success for all stakeholders. Let’s rise to new heights
                    with the power of digital transformation.
                </p>
                <a
                    href="#"
                    className="text-orange-500 text-lg font-semibold hover:underline"
                >
                    LEARN MORE →
                </a>
            </section>

            {/* Metrics Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:px-12 sm:px-12 gap-8 text-center py-10">
                <div className="border rounded-lg shadow-md py-16 px-4">
                    <h2 className="text-3xl font-bold">47+</h2>
                    <p className="text-gray-600">Years of continual excellence</p>
                </div>
                <div className="border rounded-lg shadow-md py-16 px-4">
                    <h2 className="text-3xl font-bold">7000+</h2>
                    <p className="text-gray-600">Change makers driving revolution</p>
                </div>
                <div className="border rounded-lg shadow-md py-16 px-4">
                    <h2 className="text-3xl font-bold">16+</h2>
                    <p className="text-gray-600">
                        Countries with our presence and clientele
                    </p>
                </div>
                <div className="border rounded-lg shadow-md py-16 px-4">
                    <h2 className="text-3xl font-bold">618+</h2>
                    <p className="text-gray-600">Active clients across the globe</p>
                </div>
            </section>

            <FastMarquee />


        </div>
    );
}