'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useEffect, useRef } from 'react';



const carouselImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop"
];

const Hero = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let currentIndex = 0;
        const images = carousel.querySelectorAll('.carousel-image');

        const showImage = (index: number) => {
            images.forEach((img, i) => {
                (img as HTMLElement).style.opacity = i === index ? '1' : '0';
            });
        };

        const nextImage = () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        };

        // Initialize first image
        showImage(0);

        // Auto-advance carousel
        const interval = setInterval(nextImage, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-orange-700 overflow-hidden">
                {/* Plain JS Carousel Background */}
                <div ref={carouselRef} className="absolute inset-0 z-0">
                    {carouselImages.map((image, index) => (
                        <div
                            key={index}
                            className="carousel-image absolute inset-0 transition-opacity duration-1000 ease-in-out"
                            style={{ opacity: 0 }}
                        >
                            <Image
                                src={image}
                                height={1000}
                                width={1000}
                                alt={`Background ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-red-800/70 to-orange-700/80"></div>
                        </div>
                    ))}
                </div>

                {/* Navigation Bar */}


                {/* Animated background elements */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 right-20 w-32 h-32 bg-orange-500/20 rounded-full blur-xl z-10"
                />

                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-20 left-20 w-48 h-48 bg-red-500/20 rounded-full blur-xl z-10"
                />

                <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto mt-20">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        Protecting What
                        <motion.span
                            animate={{ color: ['#fff', '#f59e0b', '#ef4444', '#fff'] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="block"
                        >
                            Matters Most
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
                    >
                        Leading provider of integrated fire protection and security solutions across Kenya.
                        Technical expertise and business excellence for prestigious developments.
                    </motion.p>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg text-lg font-semibold transition-colors"
                        >
                            Get Free Consultation
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border-2 border-white hover:bg-white hover:text-gray-800 rounded-lg text-lg font-semibold transition-colors"
                        >
                            View Our Services
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Services Slider Section */}

        </>
    );
};

export default Hero;