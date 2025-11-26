import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Timeline.css'

const experienceData = [
  {
    role: 'MERN-Stack Developer',
    company: 'V-TECH',
    period: 'JUN 2025 - Present',
    location: 'Coimbatore',
    description: 'Leading full-stack development of scalable web applications using the MERN stack. Designing and implementing responsive, user-friendly interfaces with React.js. Building secure RESTful APIs and microservices with Node.js and Express.js. Optimizing database performance with MongoDB and ensuring code quality through Git version control.',
    highlights: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git'],
    current: true,
  },
  {
    role: 'MERN-Stack Developer Intern',
    company: 'Atozerv India Pvt Ltd',
    period: 'JAN 2025 - MAY 2025',
    location: 'Coimbatore',
    description: 'Built and deployed full-stack web applications using the MERN stack. Created dynamic, responsive user interfaces with React.js and modern CSS. Developed robust backend APIs with Node.js and Express.js. Managed data storage and retrieval using MongoDB, and collaborated with teams using Git for version control.',
    highlights: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="timeline-section experience-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Career Path</span>
          <h2>Experience</h2>
          <p>Professional journey and work experience in the tech industry</p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`timeline-card ${item.current ? 'current' : ''}`}>
                {item.current && <span className="current-badge">Current</span>}
                <div className="timeline-icon experience">
                  <FaBriefcase />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.role}</h3>
                  <h4 className="timeline-subtitle">{item.company}</h4>
                  <div className="timeline-meta">
                    <span><FaCalendarAlt /> {item.period}</span>
                    <span><FaMapMarkerAlt /> {item.location}</span>
                  </div>
                  <p className="timeline-description">{item.description}</p>
                  <div className="timeline-highlights">
                    {item.highlights.map((highlight, i) => (
                      <span key={i} className="highlight-tag">{highlight}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
