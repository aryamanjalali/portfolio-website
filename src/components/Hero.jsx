import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.h1
            className="hero-title"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Hi, I'm <span className="gradient-text">Aryaman Jalali</span>
          </motion.h1>
          
          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            Data Scientist & Machine Learning Engineer
          </motion.h2>
          
          <motion.p className="hero-description" variants={itemVariants}>
            Graduate student in Applied Data Analytics with experience in machine learning, NLP, and deep learning 
            applications across healthcare, finance, and sports analytics. Skilled at designing and deploying 
            production-ready ML systems with a strong foundation in statistical modeling and scalable data pipelines.
          </motion.p>
          
          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
          </motion.div>
          
          <motion.div className="hero-social" variants={itemVariants}>
            <motion.a
              href="https://github.com/aryamanjalali"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aryamanjalali/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:aryamanj@bu.edu"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-image"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="image-container">
            <img 
              src="/images/aryaman-photo.jpg" 
              alt="Aryaman Jalali at Grace Hopper Celebration 2025"
              className="profile-photo"
            />
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        onClick={scrollToAbout}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  )
}

export default Hero

