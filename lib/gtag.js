export const GA_TRACKING_ID = 'G-8K0VMQG60F'
//https://developers.google.com/analytics/devguides/collection/gtag/s/pages export const pageview (url) {
export const pageview = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    })
}



// https://developers.google.com/analytics/devguides/collection/gtagjs/events

export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}