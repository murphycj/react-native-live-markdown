const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
const isChromium = 'chrome' in window;
const isChromium = typeof window !== 'undefined' ? 'chrome' in window : false;

export {isFirefox, isChromium};
