'use client'
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id='contact' className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to secure your premises? Contact us today for a free consultation
            and discover how we can protect what matters most to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-red-500/50 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <Phone className="h-6 w-6" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-300">+254 714 415 588</p>
                <p className="text-gray-300">+254 711 544 226</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-red-500/50 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <Mail className="h-6 w-6" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-300">info@pinnaclesafety.co.ke</p>
                <p className="text-gray-300">support@pinnaclesafety.co.ke</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-red-500/50 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <MapPin className="h-6 w-6" />
              </motion.div>
              {/*  */}
              <div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-300">Safina Plaza-Eldoret P.O Box 5152-30100, Eldoret</p>
                <p className="text-gray-300">Serving nationwide</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-red-500/50 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <Clock className="h-6 w-6" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <p className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-300">24/7 Emergency Support</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
            />

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              rows={6}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-8 py-4 bg-red-500/50 hover:bg-red-700 rounded-lg text-lg font-semibold transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;