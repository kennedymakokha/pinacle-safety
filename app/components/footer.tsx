'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from './../../public/logo.png'
const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-white py-12"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 mb-4 md:mb-0"
                    >
                        {/* <Shield className="h-8 w-8 text-red-500" /> */}
                        <Image src={Logo} width={100} height={100} alt="Pinnacle Safety Solutions Logo" />

                        <div>
                            <h3 className="text-xl font-bold">Pinnacle Safety Solutions</h3>
                            <p className="text-gray-400 text-sm">Protecting What Matters Most</p>
                        </div>
                    </motion.div>

                    <div className="text-center md:text-right">
                        <p className="text-gray-400">
                            © 2025 Pinnacle Safety Solutions. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                            Professional Fire & Security Systems in Kenya
                        </p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;