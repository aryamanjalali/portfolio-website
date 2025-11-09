import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      type: 'work',
      title: 'Graduate Research Assistant - Quantitative Finance',
      company: 'Boston University',
      location: 'Boston, MA',
      period: 'Sep 2024 - Present',
      description: [
        'Engineered hybrid Simulated Annealing + K-Means models improving ETF clustering stability by 18%',
        'Authored peer-reviewed paper in MLAIJ (2025): "Adaptive Hierarchical Tree-Based Clustering Approach to Outlier Detection in ETF-Focused Financial Time-Series"',
        'Streamlined Python + Spark (AWS EC2) pipelines for volatility regime analysis and runtime optimization',
        'Created ETF visualizations with Python, SciPy, Matplotlib, identifying and explaining regime shifts in markets',
      ],
      icon: <FaBriefcase />,
    },
    {
      type: 'work',
      title: 'Build Student Consultant, AI/ML (Cricket Chatbot Project)',
      company: 'The Build Fellowship',
      location: 'Boston, MA',
      period: 'Jun 2025 - Jul 2025',
      description: [
        'Architected RAG chatbot using LangChain + Hugging Face + ChromaDB for contextual Q&A',
        'Configured BLEU-based evaluation and optimized embeddings, improving precision by 12%',
        'Automated ingestion on AWS Lambda (-35% latency) and deployed a Gradio UI (90% accuracy)',
        'Engineered automated ingestion pipelines (scraping, chunking, embeddings) to construct a scalable cricket knowledge base',
      ],
      icon: <FaBriefcase />,
    },
    {
      type: 'work',
      title: 'Graduate Teaching Assistant - Data Science with Python',
      company: 'Boston University',
      location: 'Boston, MA',
      period: 'Jan 2025 - May 2025',
      description: [
        'Facilitated weekly labs for 50+ students, delivering hands-on instruction in Python for analysis, visualization, and ML',
        'Designed and evaluated 100+ assignments, providing structured feedback that enhanced student outcomes by 15%',
        'Guided 10+ projects applying ML with Python, Scikit-learn, Pandas, emphasizing real-world dataset applications',
      ],
      icon: <FaBriefcase />,
    },
    {
      type: 'work',
      title: 'Digital Analyst Intern',
      company: 'Tata Motors Limited',
      location: 'India',
      period: 'Aug 2023 - Sep 2023',
      description: [
        'Evaluated 10K+ vehicle records to enhance fleet utilization and forecasting accuracy (+40%)',
        'Built Python + Tableau dashboards for KPI tracking and performance reporting',
        'Centralized data via AWS S3 pipelines for regional analytics integration',
        'Developed predictive models and automation scripts, raising data accessibility and efficiency by 40%',
      ],
      icon: <FaBriefcase />,
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Enterprise Building Training Solutions (EBTS)',
      location: 'India',
      period: 'Jun 2023 - Jul 2023',
      description: [
        'Designed an email automation system with React, Node.js, Flask, Kafka, streamlining workflows and reliability',
        'Devised visualization pipelines in Lucidchart for duplication detection and verification',
        'Integrated BERT + Pinecone embeddings to enable intelligent email ranking with greater precision',
      ],
      icon: <FaBriefcase />,
    },
    {
      type: 'education',
      title: 'Master of Science in Applied Data Analytics',
      company: 'Boston University',
      location: 'Boston, MA',
      period: 'Sep 2024 - Dec 2025 (Expected)',
      description: [
        'GPA: 3.83/4.00',
        'Related Courses: Analysis of Algorithms, Data Science, Data Mining, Advanced ML, Data Visualization, Big Data, Web Mining',
        'Expected Graduation: December 2025',
      ],
      icon: <FaGraduationCap />,
    },
    {
      type: 'education',
      title: 'Bachelor of Technology in Computer Science',
      company: 'Bangalore Institute of Technology',
      location: 'Bangalore, India',
      period: 'Aug 2020 - Jun 2024',
      description: [
        'Related Courses: Data Structures, Object Oriented Programming, AI, Python, Software Engineering',
      ],
      icon: <FaGraduationCap />,
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
    <section id="experience" className="experience" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${exp.type}`}
              initial={{ opacity: 0, x: exp.type === 'work' ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="timeline-marker">
                <div className="marker-icon">{exp.icon}</div>
              </div>
              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className={`type-badge ${exp.type}`}>
                    {exp.type === 'work' ? 'Work' : 'Education'}
                  </span>
                </div>
                <div className="timeline-company">
                  <h4>{exp.company}</h4>
                  <div className="timeline-meta">
                    <span>
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                    <span>
                      <FaCalendarAlt /> {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
