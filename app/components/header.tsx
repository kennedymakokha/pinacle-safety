'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Logo from './../../public/logo.png';
import LogoWhite from './../../public/logo-white.png';
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={` overflow-x-hidden fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            <nav
                className={`border-b transition-all duration-300 ${scrolled
                    ? 'bg-white/90 border-gray-200 text-gray-900 backdrop-blur'
                    : 'bg-white/10 border-white/10 text-white backdrop-blur-md'
                    }`}
            >
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                        <Image
                            src={!scrolled ? LogoWhite : Logo}
                            width={160} // Better default for mobile
                            height={48}
                            className="h-12 w-auto object-contain"
                            alt="Pinnacle Safety Solutions Logo"
                        //   className="rounded h-12 object-fit w-54 flex "
                        />
                        {/* <div>
              <h1 className="text-lg font-bold">Pinnacle Safety Solutions</h1>
              <p className="text-sm">Professional Fire & Security Systems</p>
            </div> */}
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8 font-medium">
                        {["Home", "Services", "About", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-orange-500 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden focus:outline-none"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white text-gray-900 border-t border-gray-200 shadow-lg"
                    >
                        <div className="flex flex-col space-y-4 px-6 py-4">
                            {["Home", "Services", "About", "Contact"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-base font-medium hover:text-orange-500 transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
