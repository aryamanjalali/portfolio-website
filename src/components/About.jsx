import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaRocket, FaHeart } from 'react-icons/fa'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const features = [
    {
      icon: <FaCode />,
      title: 'ML & Deep Learning',
      description: 'Expert in PyTorch, TensorFlow, Transformers, and LangChain for building production-ready ML systems.',
    },
    {
      icon: <FaRocket />,
      title: 'Research & Innovation',
      description: 'Published researcher with expertise in clustering, anomaly detection, and time-series analysis.',
    },
    {
      icon: <FaHeart />,
      title: 'Problem Solving',
      description: 'Passionate about applying ML to solve real-world challenges in healthcare, finance, and sports analytics.',
    },
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <motion.h3
              className="about-heading"
              whileHover={{ scale: 1.05 }}
            >
              Hello! I'm a passionate Data Scientist & ML Engineer
            </motion.h3>
            <p className="about-description">
              I'm a graduate student in Applied Data Analytics at Boston University with a strong passion for 
              machine learning, NLP, and deep learning. My expertise spans across healthcare, finance, and sports 
              analytics, where I design and deploy production-ready ML systems using Python, PyTorch, TensorFlow, 
              Transformers, and LangChain.
            </p>
            <p className="about-description">
              Currently working as a Graduate Research Assistant in Quantitative Finance, I've authored 
              peer-reviewed research papers and developed innovative solutions for real-world problems. From 
              biomedical question answering systems to medical imaging for cancer detection, I bring a unique 
              blend of theoretical knowledge and practical implementation skills to every project.
            </p>
            <motion.div
              className="about-stats"
              variants={itemVariants}
            >
              <div className="stat-item">
                <h4>11+</h4>
                <p>Major Projects</p>
              </div>
              <div className="stat-item">
                <h4>3.83</h4>
                <p>GPA / 4.00</p>
              </div>
              <div className="stat-item">
                <h4>1</h4>
                <p>Published Paper</p>
              </div>
            </motion.div>
            
            <motion.a
              href="https://aircconline.com/abstract/mlaij/12125mlaij09.html"
              target="_blank"
              rel="noopener noreferrer"
              className="publication-highlight"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4>📄 Published Research</h4>
              <p>
                <strong>"Adaptive Hierarchical Tree-Based Clustering Approach to Outlier Detection in ETF-Focused Financial Time-Series"</strong>
              </p>
              <p className="publication-details">
                Machine Learning and Applications: An International Journal (MLAIJ), Vol. 12, No. 1, March 2025
              </p>
              <p className="publication-doi">
                DOI: 10.5121/mlaij.2025.12109
              </p>
            </motion.a>
          </motion.div>

          <motion.div className="about-features" variants={itemVariants}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

