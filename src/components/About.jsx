import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiUsers, FiTrendingUp, FiAward } = FiIcons;

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { icon: FiCode, number: '15+', label: 'Projects Completed' },
    { icon: FiUsers, number: '10+', label: 'Happy Clients' },
    { icon: FiTrendingUp, number: '2+', label: 'Years Experience' },
    { icon: FiAward, number: '5+', label: 'Technologies Mastered' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate Full Stack Developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Full Stack Developer & Tech Enthusiast
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a dedicated Full Stack Developer with 2+ years of experience in building 
              scalable web applications. I specialize in React.js, Node.js, and modern 
              JavaScript frameworks, with a strong foundation in both frontend and backend development.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently pursuing my Bachelor's degree in Computer Science Engineering at 
              Dayananda Sagar College of Engineering, Bangalore. I'm passionate about creating 
              efficient, user-friendly applications that solve real-world problems.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-blue-400 font-semibold">Education:</span>
                <span className="text-gray-300">B.E. Computer Science Engineering</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-400 font-semibold">Location:</span>
                <span className="text-gray-300">Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-400 font-semibold">Experience:</span>
                <span className="text-gray-300">2+ Years in Full Stack Development</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              {['React.js', 'Node.js', 'JavaScript', 'Python', 'MongoDB', 'MySQL', 'Express.js', 'HTML/CSS'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass p-6 rounded-2xl text-center hover-lift"
              >
                <SafeIcon 
                  icon={stat.icon} 
                  className="w-8 h-8 mx-auto mb-4 text-blue-500" 
                />
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;