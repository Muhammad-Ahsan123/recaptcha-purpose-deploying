'use client'
import Image from 'next/image'
import React from 'react'
import sysLogo from '../../../public/logosyslab.svg'
import styles from '../styles/footer.module.css'

function Footer() {
    return (
        <footer className="p-1 min-h-fit relative py-10 bg-gray-700 text-[#efefef] sm:px-8 px-8">
            <div
                className={`bg-gray-600 opacity-70 container mx-auto px-6 py-10 z-10 max-w-7xl text-center sm:text-start ${styles.footerwrapper}`}
            >

                {/* Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {/* About Section */}
                    <div className='flex sm:block flex-col justify-center items-center'>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <Image src={sysLogo} alt='Syslab.ai Logo' className='mb-3' />
                        <p className="text-sm">
                            SYSLAB.AI (Private) Limited focuses on providing and developing innovative Artificially Intelligent (AI) solutions.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm hover:text-blue-700">Home</a></li>
                            <li><a href="#" className="text-sm hover:text-blue-700">About Us</a></li>
                            <li><a href="#" className="text-sm hover:text-blue-700">Services</a></li>
                            <li><a href="#" className="text-sm hover:text-blue-700">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-sm">Room 1, Academic Block 3 FAST- National University of Computer Emerging Sciences ST-4, Sector 17-D, Shah Latif Town On
                            </li>
                            <li className="text-sm">National Highway Karachi</li>
                            <li className="text-sm">info@syslab.ai</li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-lg hover:text-gray-400"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-lg hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-lg hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="text-lg hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-white pt-4 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Syslab.ai. All rights reserved.
                    </p>
                    <p className="text-sm">
                        Syslab.ai (Private) Limited
                    </p>
                    <p className="text-sm">
                        Room 1, Academic Block 3 FAST- National University of Computer Emerging Sciences ST-4, Sector 17-D, Shah Latif Town On National Highway Karachi
                    </p>
                </div>
            </div>
        </footer >
    )
}

export default Footer
