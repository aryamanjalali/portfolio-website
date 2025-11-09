import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaReact,
  FaNode,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws,
  FaDocker,
  FaDatabase,
  FaCode,
} from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 95, color: '#3776AB' },
        { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80, color: '#3178C6' },
        { name: 'R', icon: <FaCode />, level: 75, color: '#276DC3' },
        { name: 'SQL', icon: <FaDatabase />, level: 90, color: '#336791' },
        { name: 'Java', icon: <FaCode />, level: 80, color: '#ED8B00' },
        { name: 'C/C++', icon: <FaCode />, level: 75, color: '#00599C' },
      ],
    },
    {
      title: 'ML/DL Frameworks',
      skills: [
        { name: 'PyTorch', icon: <FaCode />, level: 90, color: '#EE4C2C' },
        { name: 'TensorFlow', icon: <FaCode />, level: 88, color: '#FF6F00' },
        { name: 'Transformers', icon: <FaCode />, level: 85, color: '#FFD700' },
        { name: 'LangChain', icon: <FaCode />, level: 85, color: '#00C853' },
        { name: 'scikit-learn', icon: <FaCode />, level: 90, color: '#F7931E' },
        { name: 'Optuna', icon: <FaCode />, level: 80, color: '#2C3E50' },
      ],
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85, color: '#336791' },
        { name: 'MySQL', icon: <FaDatabase />, level: 80, color: '#4479A1' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85, color: '#47A248' },
        { name: 'AWS', icon: <FaAws />, level: 80, color: '#232F3E' },
        { name: 'GCP', icon: <FaCode />, level: 75, color: '#4285F4' },
        { name: 'Docker', icon: <FaDocker />, level: 85, color: '#2496ED' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#F05032' },
        { name: 'Flask', icon: <FaCode />, level: 85, color: '#000000' },
        { name: 'Django', icon: <FaCode />, level: 80, color: '#092E20' },
        { name: 'React', icon: <FaReact />, level: 75, color: '#61DAFB' },
        { name: 'Node.js', icon: <FaNode />, level: 75, color: '#339933' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <h4>{skill.name}</h4>
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

