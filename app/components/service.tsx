'use client'
import { motion } from 'framer-motion';
import { Shield, Camera, Lock, Droplets, AlertTriangle, Zap, Flame, Eye } from 'lucide-react';

const services = [
  {
    icon: Flame,
    title: "Fire & Gas Detection Systems",
    description: "Advanced fire and gas detection systems for early warning and prevention."
  },
  {
    icon: AlertTriangle,
    title: "Specialist Detection Systems",
    description: "Specialized detection solutions for unique industrial applications."
  },
  {
    icon: Shield,
    title: "Fire Alarm Systems",
    description: "Comprehensive fire alarm systems with 24/7 monitoring capabilities."
  },
  {
    icon: Camera,
    title: "CCTV Systems",
    description: "State-of-the-art surveillance systems with remote monitoring."
  },
  {
    icon: Eye,
    title: "Intruder Alarm",
    description: "Advanced intrusion detection systems for maximum security."
  },
  {
    icon: Lock,
    title: "Access Control System",
    description: "Sophisticated access control solutions for restricted areas."
  },
  {
    icon: Droplets,
    title: "Waterspray and Sprinkler Systems",
    description: "Automated fire suppression systems for comprehensive protection."
  },
  {
    icon: Zap,
    title: "Watermist System",
    description: "Eco-friendly water mist fire suppression technology."
  }
];

const Services = () => {
  return (
    <section id='services' className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fire protection and security solutions for various market sectors including 
            Oil & Gas, Commercial, Aviation, Telecommunication, Transportation, Industrial, Power & Water.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4"
              >
                <service.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;