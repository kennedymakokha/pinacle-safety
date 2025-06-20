'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

export default function ComingSoon() {
  useEffect(() => {
    document.title = 'Coming Soon | My Website';
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Something awesome is coming soon!" />
      </Head>

      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-500/20 via-red-500/20 to-orange-500/20 text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-2xl"
        >
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="rounded-full w-44 h-20 object-contain"
              priority
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            🚧 Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            We&lsquo;re working hard to launch our new website. Stay tuned for something amazing!
          </p>

          {/* Optional Email Input */}
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md w-full border border-white text-slate-50 sm:w-auto  focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-all"
            >
              Notify Me
            </button>
          </form>
        </motion.div>
      </main>
    </>
  );
}
