import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const projects = [
    {
      id: 1,
      title: 'Apache Kafka: Real-Time Data Pipelines & Event-Driven Microservices',
      description: 'Engineered real-time Kafka + AWS EC2 streaming system for sub-second IoT data ingestion. Dockerized Kafka-Zookeeper cluster for replication and fault tolerance. Visualized telemetry in Streamlit dashboards, integrating AWS S3 for storage and recovery.',
      technologies: ['Apache Kafka', 'AWS EC2', 'Docker', 'Streamlit', 'AWS S3', 'Python'],
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Kafka+Data+Pipelines',
      github: 'https://github.com/aryamanjalali/BigDataKafkaCS777',
      featured: true,
      period: 'Oct 2025 - Nov 2025',
    },
    {
      id: 2,
      title: 'Biomedical Question Answering System',
      description: 'Developed BM25 + bge-base + SentenceTransformer RAG pipeline for biomedical Q&A. Indexed 5K+ documents (+12% BLEU) and deployed cached EC2 inference pipeline. Structured retriever-generator architecture with LangChain agents for precision responses.',
      technologies: ['LangChain', 'BM25', 'SentenceTransformer', 'AWS EC2', 'Python', 'RAG'],
      image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Biomedical+QA',
      github: 'https://github.com/aryamanjalali/biomedical-qa-system',
      featured: true,
      period: 'Mar 2025 - Apr 2025',
    },
    {
      id: 11,
      title: 'Breast Cancer Detection (Medical Imaging)',
      description: 'Built ResNet50 U-Net model (91% Dice) on 780+ mammograms with CLAHE augmentation. Leveraged Grad-CAM + W&B for explainability and experiment tracking. Improved robustness through rotation and elastic distortion pipelines.',
      technologies: ['PyTorch', 'ResNet50', 'U-Net', 'Computer Vision', 'Weights & Biases', 'Grad-CAM', 'CLAHE'],
      image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Breast+Cancer+Detection',
      github: 'https://github.com/aryamanjalali/breast-cancer-detection',
      featured: true,
      period: 'Feb 2025 - Mar 2025',
    },
    {
      id: 6,
      title: 'Dota 2 Match Outcome Prediction',
      description: 'Trained models with CatBoost, Optuna on 29K+ Dota 2 matches, predicting outcomes from early gameplay data. Employed feature selection and StratifiedKFold balancing, ranking in the top 5% of competition leaderboard. Enhanced predictive performance via ROC-AUC optimization for imbalanced datasets.',
      technologies: ['CatBoost', 'Optuna', 'Python', 'scikit-learn', 'Feature Engineering'],
      image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Dota+2+Prediction',
      github: 'https://github.com/aryamanjalali/dota2-match-prediction',
      featured: false,
      period: 'Jan 2025 - Feb 2025',
    },
    {
      id: 7,
      title: 'Solar Energy Potential Prediction (NASA POWER Dataset)',
      description: 'Processed NASA POWER data with z-score normalization for regression and unsupervised clustering. Generated visualizations with Matplotlib, Seaborn to classify and compare regional solar energy potential. Delivered actionable insights for renewable infrastructure planning through cluster-based analysis.',
      technologies: ['R', 'dplyr', 'ggplot2', 'NASA POWER', 'Clustering', 'Data Visualization', 'Regression', 'ANOVA'],
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Solar+Energy',
      github: 'https://github.com/aryamanjalali/solar-energy-prediction',
      featured: false,
      period: 'Oct 2024 - Dec 2024',
    },
    {
      id: 3,
      title: 'Cardiovision | Cardiac Arrest Prediction using ECG',
      description: 'Engineered TensorFlow + Streamlit diagnostic app analyzing 1K+ ECGs (85→90% accuracy). Deployed on AWS Lambda for real-time low-latency inference. Produced automated dashboards summarizing clinical anomalies for doctors.',
      technologies: ['TensorFlow', 'Streamlit', 'AWS Lambda', 'ECG Analysis', 'Deep Learning', 'Flask'],
      image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Cardiovision',
      github: 'https://github.com/aryamanjalali/CardioVision',
      featured: false,
      period: 'Sep 2023 - Jan 2024',
    },
    {
      id: 4,
      title: 'Kidney Stone Detection using Medical Imaging Analysis',
      description: 'Developed a Kidney Stone Detection system using Image processing, Machine Learning, and healthcare technology. Collected and pre-processed 500+ ultrasound images with MATLAB. Extracted features using Fourier Transform and Gabor filters. Built a Random Forest model with Scikit-learn, achieving 88% accuracy. Optimized with Bayesian Optimization and validated on an independent test set, improving accuracy by 7% on GCP.',
      technologies: ['MATLAB', 'Python', 'Scikit-learn', 'Random Forest', 'Image Processing', 'GCP', 'Bayesian Optimization'],
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Kidney+Stone+Detection',
      github: 'https://github.com/aryamanjalali/KidneyStoneDetection',
      featured: true,
      period: 'Jun 2023 - Jul 2023',
    },
    {
      id: 5,
      title: 'Pinball Game Development with OpenGL Graphics',
      description: 'Designed and implemented a Pinball Game using OpenGL, combining programming, graphics rendering, and interactive gameplay design. Developed a physics engine to simulate realistic ball movement and interactions. Utilized OpenGL for rendering 2D and 3D graphics, achieving 60 FPS. Implemented collision detection and response algorithms, enhancing interactivity. Designed intuitive user interfaces and controls. Conducted extensive testing, ensuring 99% stability.',
      technologies: ['OpenGL', 'C++', 'Physics Engine', 'Collision Detection', 'Game Development', 'Graphics Rendering'],
      image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Pinball+Game',
      github: 'https://github.com/aryamanjalali/PinballOpenGL',
      featured: false,
      period: 'Apr 2023 - May 2023',
    },
    {
      id: 8,
      title: 'RTO Database Management System',
      description: 'Developed a comprehensive database management system for Regional Transport Office operations. Designed and implemented efficient data models for vehicle registration, license management, and record keeping. Built with modern web technologies for seamless user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Database', 'Web Development'],
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=RTO+Database',
      github: 'https://github.com/aryamanjalali/RTODatabase',
      featured: false,
      period: 'Nov 2021 - Dec 2021',
    },
    {
      id: 9,
      title: 'Disposable Mailbox Service',
      description: 'Created a disposable email service for temporary email addresses. Implemented email forwarding, inbox management, and automatic expiration. Built with modern web technologies to provide secure and anonymous email communication.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Email Service'],
      image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Disposable+Mailbox',
      github: 'https://github.com/aryamanjalali/DisposableMailBox',
      featured: false,
      period: 'Sep 2021 - Oct 2021',
    },
    {
      id: 10,
      title: 'Unit Converter Android App',
      description: 'Developed a comprehensive unit converter Android application supporting multiple measurement categories. Implemented intuitive user interface with real-time conversion calculations. Designed for seamless user experience across different Android devices.',
      technologies: ['Android', 'Java', 'Mobile Development', 'UI/UX'],
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Unit+Converter',
      github: 'https://github.com/aryamanjalali/UnitConverterAndroidStudio',
      featured: false,
      period: 'Jul 2021 - Aug 2021',
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
    <section id="projects" className="projects" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'visible'}
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image-container">
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="project-github-badge">
                    <FaGithub />
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>
                <p className="project-period">{project.period}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
