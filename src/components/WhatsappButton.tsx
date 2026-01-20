'use client';

import Link from 'next/link';

const WHATSAPP_NUMBER = '447446095099'; // UK number without + or spaces

export default function WhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M19.11 17.41c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.35-.79-.71-1.32-1.59-1.48-1.86-.16-.27-.02-.42.12-.56.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.69 4.13.66.28 1.17.45 1.57.57.66.21 1.26.18 1.74.11.53-.08 1.61-.66 1.84-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.18-.52-.32z" />
        <path d="M16 2.67C8.82 2.67 3 8.48 3 15.66c0 2.5.73 4.95 2.12 7.05L3 29.33l6.8-2.06c2.04 1.12 4.34 1.71 6.7 1.71 7.18 0 13-5.82 13-13.01S23.18 2.67 16 2.67zm0 23.46c-2.12 0-4.18-.57-5.97-1.66l-.43-.25-4.03 1.22 1.3-3.93-.28-.44a10.41 10.41 0 0 1-1.62-5.62C4.97 9.98 9.32 5.63 16 5.63s11.03 4.35 11.03 10.03S22.68 26.13 16 26.13z" />
      </svg>
    </Link>
  );
}