import { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        if (window.gtag) return;

        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=G-8K0VMQG60F`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'YOUR_TRACKING_ID');
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        const handleRouteChange = (url) => {
            if (window.gtag) {
                window.gtag('config', 'G-8K0VMQG60F', {
                    page_path: url,
                });
            }
        };

        Router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    return (
        <>
            <Head>
                {/* Additional meta tags or scripts */}
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;





// import { useEffect } from 'react';
// import Router from 'next/router';
// import Head from 'next/head';

// const MyApp = ({ Component, pageProps }) => {
//     useEffect(() => {
//         if (window.gtag) return;

//         const script = document.createElement('script');
//         script.src = `https://www.googletagmanager.com/gtag/js?id=G-8K0VMQG60F`;
//         script.async = true;
//         document.head.appendChild(script);

//         script.onload = () => {
//             window.dataLayer = window.dataLayer || [];
//             function gtag() {
//                 window.dataLayer.push(arguments);
//             }
//             window.gtag = gtag;
//             gtag('js', new Date());
//             gtag('config', 'G-8K0VMQG60F');
//         };

//         return () => {
//             document.head.removeChild(script);
//         };
//     }, []);

//     useEffect(() => {
//         const handleRouteChange = (url) => {
//             if (window.gtag) {
//                 window.gtag('config', 'G-8K0VMQG60F', {
//                     page_path: url,
//                 });
//             }
//         };

//         Router.events.on('routeChangeComplete', handleRouteChange);

//         return () => {
//             Router.events.off('routeChangeComplete', handleRouteChange);
//         };
//     }, []);

//     return (
//         <>
//             <Head>
//                 {/* Additional meta tags or scripts */}
//             </Head>
//             <Component {...pageProps} />
//         </>
//     );
// };

// export default MyApp;