'use client'
import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically load Ant Design Modal to avoid issues with SSR
const DynamicModal = dynamic(() => import("antd").then((mod) => mod.Modal), { ssr: false });

const Hamburger: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Toggle modal open/close
    const toggleModal = () => setIsModalOpen((prev) => !prev);

    return (
        <>
            {/* Hamburger Button */}
            <button
                className="h-6 w-6 text-black lg:hidden"
                onClick={toggleModal} // Toggle modal
            >
                <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {/* Modal Component */}
            <DynamicModal
                title="Menu"
                open={isModalOpen}
                onCancel={toggleModal} // Toggle modal on cancel
                footer={null}
                destroyOnClose
                className="p-0"
            >
                <ul className="flex flex-col gap-4 font-[system-ui] text-black">
                    <li className="p-1">
                        <a
                            href="#"
                            className="flex items-center transition-colors hover:text-[#0D6CC1]"
                        >
                            Home
                        </a>
                    </li>
                    <li className="p-1">
                        <a
                            href="#about"
                            className="flex items-center transition-colors hover:text-[#0D6CC1]"
                        >
                            About
                        </a>
                    </li>
                    <li className="p-1">
                        <a
                            href="#products"
                            className="flex items-center transition-colors hover:text-[#0D6CC1]"
                        >
                            Products
                        </a>
                    </li>
                    <li className="p-1">
                        <a
                            href="#awards"
                            className="flex items-center transition-colors hover:text-[#0D6CC1]"
                        >
                            Awards & Partner
                        </a>
                    </li>
                    <li className="p-1">
                        <a
                            href="#services"
                            className="flex items-center transition-colors hover:text-[#0D6CC1]"
                        >
                            Services
                        </a>
                    </li>
                    <li className="p-1">
                        <a
                            href="#contactus"
                            className="flex items-center transition-colors hover:text-[#0D6CC1]"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </DynamicModal>
        </>
    );
};

export default Hamburger;
