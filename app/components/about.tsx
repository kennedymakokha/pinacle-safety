'use client'
import { motion } from 'framer-motion';
import { Award, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Projects Completed" },
    { icon: Zap, number: "24/7", label: "Support Available" },
    { icon: Target, number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id='about' className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-[#8b2936]">Pinnacle Safety</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                At Pinnacle Safety Solutions, we take pride in our reputation, technical expertise, 
                and business excellence. We have provided totally integrated fire and security solutions 
                to some of the most prestigious and important developments in Kenya over the years.
              </p>
              
              <p>
                We believe in continuous improvement to ensure we deliver the highest standards of 
                service at all times. We ensure personnel proficiencies through product and system 
                training, including the latest developments in the marketplace through our dedicated 
                training facilities.
              </p>
              
              <p>
                Our portfolio spans across various sectors including Oil & Gas, Commercial, Aviation, 
                Telecommunication, Transportation facilities, Industrial, Power & Water, delivering 
                state-of-the-art security and integrated solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-gray-800 mb-2"
                >
                  {stat.number}
                </motion.h3>
                
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
