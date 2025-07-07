import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiDatabase, FiTool, FiLayers } = FiIcons;

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FiCode,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 92 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Responsive Design', level: 88 }
      ]
    },
    {
      title: 'Backend Development',
      icon: FiDatabase,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'Python', level: 75 },
        { name: 'REST APIs', level: 88 },
        { name: 'Authentication', level: 80 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: FiLayers,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Database Design', level: 78 },
        { name: 'Data Modeling', level: 75 },
        { name: 'Query Optimization', level: 70 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: FiTool,
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
        { name: 'NPM/Yarn', level: 82 },
        { name: 'Linux/Unix', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proficiency in modern web development technologies and tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="glass p-8 rounded-2xl hover-lift"
            >
              <div className="flex items-center mb-6">
                <SafeIcon 
                  icon={category.icon} 
                  className="w-8 h-8 text-blue-500 mr-4" 
                />
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Problem Solving',
              'Algorithms & Data Structures',
              'Object-Oriented Programming',
              'Agile Development',
              'Code Review',
              'Testing & Debugging',
              'Performance Optimization',
              'UI/UX Design Principles'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass px-4 py-2 rounded-full text-sm font-medium hover-lift"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;