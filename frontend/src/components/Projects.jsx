import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa'
import './Projects.css'

const projects = [
  {
    title: 'GYM Website',
    category: 'Web Development',
    description: 'A modern fitness website with membership plans, workout schedules, and trainer profiles.',
    image: '/projects/gym.jpg',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Grocery Store',
    category: 'E-Commerce',
    description: 'Full-featured online grocery shopping platform with cart and checkout functionality.',
    image: '/projects/grocery.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Medicine Portal',
    category: 'Healthcare',
    description: 'Online medicine ordering system with prescription uploads and delivery tracking.',
    image: '/projects/medicine.jpg',
    tags: ['React', 'Express', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Gadgets Store',
    category: 'E-Commerce',
    description: 'Tech gadgets e-commerce platform with product comparisons and reviews.',
    image: '/projects/gadgets.jpg',
    tags: ['React', 'Redux', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Clothes Fashion',
    category: 'E-Commerce',
    description: 'Fashion e-commerce site with size guides, wishlist, and virtual try-on features.',
    image: '/projects/clothes.jpg',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Meesho Clone',
    category: 'E-Commerce',
    description: 'Meesho-inspired social commerce platform for resellers and small businesses.',
    image: '/projects/meesho.jpg',
    tags: ['MERN Stack', 'AWS', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

const categories = ['All', 'Web Development', 'E-Commerce', 'Healthcare']

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
