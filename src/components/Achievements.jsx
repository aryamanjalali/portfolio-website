import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa'
import './Achievements.css'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const achievements = [
    {
      id: 1,
      title: 'International Mathematics Olympiad (IMO)',
      medal: 'Silver Medal',
      description: 'Achieved Silver Medal out of 600+ participants, demonstrating strong mathematical skills and effective problem-solving abilities.',
      icon: <FaMedal />,
      color: '#C0C0C0',
    },
    {
      id: 2,
      title: 'Unified Council Cyber Champ',
      medal: 'Gold Medal',
      description: 'Earned Gold Medal out of 500+ participants, highlighting advanced problem-solving skills and a strong passion for cybersecurity.',
      icon: <FaTrophy />,
      color: '#FFD700',
    },
    {
      id: 3,
      title: 'Indian National Talent Search Olympiad (INTSO)',
      medal: '2 Silver Medals',
      description: 'Achieved 2 Silver Medals, standing out among 700+ participants, showing a commitment to excellence and a multidisciplinary approach to learning.',
      icon: <FaAward />,
      color: '#C0C0C0',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="achievements" className="achievements" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="achievement-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="achievement-icon" style={{ color: achievement.color }}>
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <div className="achievement-medal">{achievement.medal}</div>
                <p>{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements

