import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiExternalLink, FiGithub, FiCode, FiShoppingCart, FiUsers, FiTrendingUp, FiFileText } = FiIcons;

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: 'E-Commerce Web Application',
      description: 'Full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Built with React.js frontend and Node.js backend.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT Authentication'],
      github: 'https://github.com/sharathkharvi/ecommerce-app',
      live: '#',
      icon: FiShoppingCart
    },
    {
      title: 'Social Media Dashboard',
      description: 'Interactive dashboard for social media analytics with real-time data visualization, user engagement metrics, and content management features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Chart.js', 'Node.js', 'MySQL', 'REST APIs'],
      github: 'https://github.com/sharathkharvi/social-dashboard',
      live: '#',
      icon: FiUsers
    },
    {
      title: 'Task Management System',
      description: 'Comprehensive project management tool with task assignment, progress tracking, team collaboration, and deadline management capabilities.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Express.js'],
      github: 'https://github.com/sharathkharvi/task-manager',
      live: '#',
      icon: FiFileText
    },
    {
      title: 'Real-time Analytics Platform',
      description: 'Data visualization platform with interactive charts, real-time updates, and comprehensive reporting system for business intelligence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React.js', 'D3.js', 'Python', 'MongoDB', 'WebSocket'],
      github: 'https://github.com/sharathkharvi/analytics-platform',
      live: '#',
      icon: FiTrendingUp
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing my expertise in full-stack development and modern web technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="glass rounded-2xl overflow-hidden hover-lift group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Icon */}
                <div className="absolute top-4 left-4 p-3 bg-black/50 backdrop-blur-sm rounded-full">
                  <SafeIcon icon={project.icon} className="w-6 h-6 text-blue-400" />
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <SafeIcon icon={FiGithub} className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <SafeIcon icon={FiExternalLink} className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/sharathkharvi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto hover:shadow-2xl transition-all duration-300 w-fit"
          >
            <SafeIcon icon={FiGithub} className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;