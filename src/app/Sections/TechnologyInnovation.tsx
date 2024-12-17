import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import innovativeImage from '../../../public/section2.png';

function TechnologyInnovation() {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    // Intersection Observer to detect when the component enters the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true); // Trigger the animation when in view
                }
            },
            { threshold: 0.3 } // Trigger when 90% of the component is in view
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            id="about"
            ref={ref}
            className="relative h-[40rem] sm:h-[35rem] overflow-hidden"
        >
            {/* Background Overlay */}
            <div className="absolute w-full h-[40rem] sm:h-[35rem] bg-[#04060A] opacity-[0.88] px-12 sm:px-40 md:px-0" />

            <div className="absolute flex flex-col sm:flex-row items-center justify-evenly sm:justify-between px-6 sm:px-8 lg:px-40 md:px-16 h-[40rem] sm:h-[35rem] text-white text-center sm:text-left">
                {/* Left Content */}
                <div className="sm:w-[70%] md:w-[50%] w-full mt-4 sm:mt-0">
                    {/* H2 animation */}
                    <motion.h2
                        className="text-3xl font-bold mb-6"
                        initial={{ opacity: 0, x: '-70vw' }} // Start position off-screen
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-70vw' }} // Animate when in view
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        Technology Meets
                        <span className="md:mt-2 mt-2 px-10 inline-block -rotate-3 rounded-full py-2 border ml-2">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 font-bold">
                                Innovation
                            </span>
                        </span>
                    </motion.h2>

                    {/* The p tag will animate after h2 finishes */}
                    <motion.p
                        initial={{ opacity: 0, y: '4vh' }} // Start position below
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: '7vh' } // Animate when in view
                        }
                        transition={{
                            delay: 1, // Delay for the p element to animate after h2
                            duration: 0.4,
                            ease: 'easeOut',
                        }}
                    >
                        Our team is dedicated to advancing innovation through groundbreaking research and development across a variety of emerging technologies. From artificial intelligence to sustainable solutions, we are constantly pushing the boundaries of discovery. Highlighted here are some of our leading research publications, showcasing the impact and depth of our work in shaping the future.
                    </motion.p>
                </div>

                {/* Right Content */}
                <div className="sm:w-[40%] w-[220px] mb-3 sm:mb-0">
                    <Image alt="Innovative Image" src={innovativeImage} />
                </div>
            </div>
        </div>
    );
}

export default TechnologyInnovation;