// components/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/725714415588" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M20.52 3.48A11.94 11.94 0 0012.01 0C5.38 0 .02 5.37 0 12c0 2.11.55 4.17 1.61 6.01L0 24l6.19-1.62A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.21-3.48-8.52zM12 22.05c-1.82 0-3.62-.49-5.18-1.42l-.37-.22-3.68.96.98-3.58-.24-.37A9.9 9.9 0 012.05 12C2.05 6.5 6.5 2.05 12 2.05c2.64 0 5.11 1.03 6.98 2.9A9.88 9.88 0 0121.95 12c0 5.5-4.45 10.05-9.95 10.05zm5.16-7.61l-1.63-.47a1.14 1.14 0 00-1.13.29l-.37.37a9.18 9.18 0 01-4.3-4.3l.37-.37a1.14 1.14 0 00.29-1.13l-.47-1.63A1.14 1.14 0 009.4 6H7.45c-.63 0-1.15.52-1.15 1.15 0 6.06 4.92 10.98 10.98 10.98.63 0 1.15-.52 1.15-1.15v-1.95a1.14 1.14 0 00-.27-.75z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
