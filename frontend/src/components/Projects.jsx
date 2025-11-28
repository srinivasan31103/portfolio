import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa'
import './Projects.css'

const projects = [
  {
    title: 'Student Progress Tracker',
    category: 'Web Development',
    description: 'A comprehensive student progress tracking application to monitor academic performance and learning milestones.',
    image: '/projects/student-tracker.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://studdent-progress-tracker.vercel.app/login',
    githubUrl: 'https://github.com/srinivasan31103/studdent-progress-tracker.git',
  },
  {
    title: 'Smart HR',
    category: 'Web Development',
    description: 'An intelligent HR management system for employee tracking, attendance, and workforce analytics.',
    image: '/projects/smart-hr.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://smart-hr-snowy.vercel.app/login',
    githubUrl: 'https://github.com/srinivasan31103/Smart-HR.git',
  },
]

const categories = ['All', 'Web Development']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">My Work</span>
          <h2>Projects</h2>
          <p>Showcasing my best work and creative solutions</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                    <span>{project.title.charAt(0)}</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.liveUrl} className="project-link" aria-label="View Live">
                        <FaExternalLinkAlt />
                      </a>
                      <a href={project.githubUrl} className="project-link" aria-label="View Code">
                        <FaGithub />
                      </a>
                      <button className="project-link preview-btn" aria-label="Preview">
                        <FaEye />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
