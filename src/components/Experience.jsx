import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiCalendar, FiBriefcase, FiGraduationCap } = FiIcons;

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance Projects',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Developed multiple web applications using React.js, Node.js, and modern JavaScript frameworks. Created responsive user interfaces and implemented backend APIs with database integration.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML/CSS'],
      type: 'work'
    },
    {
      title: 'Bachelor of Engineering - Computer Science',
      company: 'Dayananda Sagar College of Engineering',
      location: 'Bangalore, Karnataka',
      period: '2021 - 2025',
      description: 'Pursuing B.E. in Computer Science Engineering with focus on software development, algorithms, and modern programming practices. Active participant in coding competitions and technical projects.',
      technologies: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Management'],
      type: 'education'
    },
    {
      title: 'Web Development Intern',
      company: 'Various Startups',
      location: 'Bangalore, Karnataka',
      period: '2022 - 2023',
      description: 'Gained hands-on experience in full-stack development, working on real-world projects. Collaborated with development teams to build scalable web applications.',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Python', 'Git'],
      type: 'work'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in software development and continuous learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-black hidden md:block ${
                  exp.type === 'work' ? 'bg-blue-500' : 'bg-purple-500'
                }`}></div>

                <div className="md:ml-20 glass p-8 rounded-2xl hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-blue-400 mb-2">
                        <SafeIcon 
                          icon={exp.type === 'work' ? FiBriefcase : FiGraduationCap} 
                          className="w-4 h-4 mr-2" 
                        />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <div className="flex items-center mb-1">
                        <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${
                          exp.type === 'work' 
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30'
                            : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;