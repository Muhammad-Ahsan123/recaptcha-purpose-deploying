// import React, { useState } from 'react';
// import { Button } from 'antd';
// import Image from 'next/image';
// import contactUsBannerImage from '../../../public/contactUsBannerImage.png';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import styles from '../styles/contactus.module.css';

//     const ContactUs:React.FC= () => {
//         const [formData, setFormData] = useState({
//             name: '',
//             email: '',
//             message: '',
//         });
//         const [statusMessage, setStatusMessage] = useState('');
//         const [isSubmitting, setIsSubmitting] = useState(false);

//         const handleChange = (
//             e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//         ) => {
//             const { name, value } = e.target;
//             setFormData((prevData) => ({
//                 ...prevData,
//                 [name]: value,
//             }));
//         };

//         const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//             e.preventDefault();
//             setIsSubmitting(true);
//             setStatusMessage('');

//             // Show toast immediately that submission has started
//             const toastId = toast.info('Sending your message...', { autoClose: 1320 });

//             try {
//                 const response = await fetch('/api/send-message', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(formData),
//                 });

//                 const result = await response.json();

//                 if (response.ok) {
//                     toast.dismiss(toastId);
//                     setStatusMessage('Message sent successfully!');
//                     setFormData({ name: '', email: '', message: '' });
//                     toast.success(result.message); // Shows a success toast
//                 } else {
//                     toast.dismiss(toastId);
//                     setStatusMessage(result.error || 'Failed to send message.');
//                     toast.error(result.error || 'Failed to send message'); // Shows an error toast
//                 }
//             } catch (error) {
//                 toast.dismiss(toastId);
//                 console.error('Error sending message:', error);
//                 setStatusMessage('Error sending message. Please try again.');
//                 toast.error('Error sending message. Please try again.');
//             } finally {
//                 setIsSubmitting(false);
//             }
//         };

//         return (
//             <div id="contactus" className="text-black p-1 min-h-fit relative sm:px-8 px-8">
//                 <div className={`container mx-auto z-10 flex flex-wrap items-center justify-center max-w-7xl my-10 ${styles.borderShadow}`}>

//                     {/* Left Side: Image */}
//                 <div className="w-full md:w-1/2 mb-8 md:mb-0 hidden md:hidden lg:block">
//                     <Image
//                         src={contactUsBannerImage}
//                         alt="Contact Us"
//                         className="rounded-lg mix-blend-difference"
//                     />
//                 </div>

//                 {/* Right Side: Form */}
//                 <div className="w-full lg:w-1/2 bg-white rounded-lg p-8">
//                     <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
//                     <p className="mb-6 text-gray-600">Have questions? We&#39;d love to hear from you!</p>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         {/* Name */}
//                         <div>
//                             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                                 Name
//                             </label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 required
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                 placeholder="Your Name"
//                             />
//                         </div>

//                         {/* Email */}
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 required
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                 placeholder="Your Email"
//                             />
//                         </div>

//                         {/* Message */}
//                         <div>
//                             <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                                 Message
//                             </label>
//                             <textarea
//                                 id="message"
//                                 name="message"
//                                 required
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                 placeholder="Your Message"
//                             ></textarea>
//                         </div>

//                         {/* Submit Button */}
//                         <Button
//                             htmlType="submit"
//                             loading={isSubmitting}
//                             className="w-full bg-[#232428] text-white py-2 px-4 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-0"
//                         >
//                             {isSubmitting ? 'Sending...' : 'Send Message'}
//                         </Button>
//                     </form>

//                     {statusMessage && <p className="mt-4 text-center text-gray-700">{statusMessage}</p>}
//                 </div>
//             </div>
//         </div >
//     );
//     };

// export default ContactUs;


// import React, { useState } from 'react';
// import { Button } from 'antd';
// import Image from 'next/image';
// import ReCAPTCHA from "react-google-recaptcha";
// import contactUsBannerImage from '../../../public/contactUsBannerImage.png';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import styles from '../styles/contactus.module.css';

// const ContactUs: React.FC = () => {
//     const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
//     if (!siteKey) {
//         console.error("RECAPTCHA site key is not defined!");
//     }
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [captchaToken, setCaptchaToken] = useState('');

//     const handleChange = (
//         e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleCaptchaChange = (token: string | null) => {
//         if (token) {
//             setCaptchaToken(token);
//         }
//     };

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (!captchaToken) {
//             toast.error("Please verify you are not a robot.");
//             return;
//         }

//         setIsSubmitting(true);

//         const toastId = toast.info('Sending your message...', { autoClose: 1320 });

//         try {
//             const response = await fetch('/api/send-message', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ ...formData, captchaToken }),
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 toast.dismiss(toastId);
//                 toast.success(result.message);
//                 setFormData({ name: '', email: '', message: '' });
//             } else {
//                 toast.dismiss(toastId);
//                 toast.error(result.error || 'Failed to send message.');
//             }
//         } catch (error) {
//             toast.dismiss(toastId);
//             console.error('Error:', error);
//             toast.error('Something went wrong. Please try again.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div id="contactus" className="text-black p-1 min-h-fit relative sm:px-8 px-8">
//             <div className={`container mx-auto z-10 flex flex-wrap items-center justify-center max-w-7xl my-10 ${styles.borderShadow}`}>
//                 <div className="w-full md:w-1/2 mb-8 md:mb-0 hidden md:hidden lg:block">
//                     <Image
//                         src={contactUsBannerImage}
//                         alt="Contact Us"
//                         className="rounded-lg mix-blend-difference"
//                     />
//                 </div>
//                 <div className="w-full lg:w-1/2 bg-white rounded-lg p-8">
//                     <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
//                     <p className="mb-6 text-gray-600">Have questions? We&#39;d love to hear from you!</p>
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div>
//                             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                                 Name
//                             </label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 required
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                 placeholder="Your Name"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 required
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                 placeholder="Your Email"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                                 Message
//                             </label>
//                             <textarea
//                                 id="message"
//                                 name="message"
//                                 required
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                 placeholder="Your Message"
//                             ></textarea>
//                         </div>
//                         <ReCAPTCHA
//                             sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
//                             onChange={handleCaptchaChange}
//                         />
//                         <Button
//                             htmlType="submit"
//                             loading={isSubmitting}
//                             className="w-full bg-[#232428] text-white py-2 px-4 rounded-md hover:bg-gray-700 hover:text-white"
//                         >
//                             {isSubmitting ? 'Sending...' : 'Send Message'}
//                         </Button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactUs;



import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import contactUsBannerImage from '../../../public/contactUsBannerImage.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/contactus.module.css';

const ContactUs: React.FC = () => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
        console.error('RECAPTCHA site key is not defined!');
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaToken, setCaptchaToken] = useState('');

    // Create a ref for the reCAPTCHA component
    const recaptchaRef = useRef<any>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCaptchaChange = (token: string | null) => {
        if (token) {
            setCaptchaToken(token);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!captchaToken) {
            toast.error("Please verify you are not a robot.");
            return;
        }

        setIsSubmitting(true);

        const toastId = toast.info('Sending your message...', { autoClose: 1320 });

        try {
            const response = await fetch('/api/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, captchaToken }),
            });

            const result = await response.json();

            if (response.ok) {
                toast.dismiss(toastId);
                toast.success(result.message);
                setFormData({ name: '', email: '', message: '' });

                // Reset the captcha after form submission (only reset the token)
                setCaptchaToken('');  // This will effectively uncheck the captcha without re-rendering
                recaptchaRef.current?.reset(); // Reset reCAPTCHA manually
            } else {
                toast.dismiss(toastId);
                toast.error(result.error || 'Failed to send message.');
                setCaptchaToken('');  // Reset the token in case of failure
                recaptchaRef.current?.reset(); // Reset reCAPTCHA manually
            }
        } catch (error) {
            toast.dismiss(toastId);
            console.error('Error:', error);
            toast.error('Something went wrong. Please try again.');
            setCaptchaToken('');  // Reset the token in case of error
            recaptchaRef.current?.reset(); // Reset reCAPTCHA manually
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contactus" className="text-black p-1 min-h-fit relative sm:px-8 px-8">
            <div className={`container mx-auto z-10 flex flex-wrap items-center justify-center max-w-7xl my-10 ${styles.borderShadow}`}>
                <div className="w-full md:w-1/2 mb-8 md:mb-0 hidden md:hidden lg:block">
                    <Image
                        src={contactUsBannerImage}
                        alt="Contact Us"
                        className="rounded-lg mix-blend-difference"
                    />
                </div>
                <div className="w-full lg:w-1/2 bg-white rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
                    <p className="mb-6 text-gray-600">Have questions? We&#39;d love to hear from you!</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        {/* reCAPTCHA */}
                        <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                            onChange={handleCaptchaChange}
                            ref={recaptchaRef} // Attach ref to reCAPTCHA
                        />
                        <Button
                            htmlType="submit"
                            loading={isSubmitting}
                            className="w-full bg-[#232428] text-white py-2 px-4 rounded-md hover:bg-gray-700 hover:text-white"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
