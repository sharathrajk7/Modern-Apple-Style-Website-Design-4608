import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone } = FiIcons;

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold"
            >
              SK
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Sharath</span>
          <br />
          <span className="text-white">Kharvi</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-2 max-w-3xl mx-auto leading-relaxed"
        >
          Full Stack Developer & Software Engineer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto"
        >
          Specialized in React, Node.js, and modern web technologies with 2+ years of experience
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl transition-all duration-300"
          >
            <SafeIcon icon={FiDownload} className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="glass text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Let's Connect
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-8"
        >
          {[
            { icon: FiGithub, href: 'https://github.com/sharathkharvi', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com/in/sharathkharvi', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:sharathkharvi@gmail.com', label: 'Email' },
            { icon: FiPhone, href: 'tel:+919538022716', label: 'Phone' }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label={social.label}
            >
              <SafeIcon icon={social.icon} className="w-8 h-8" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;