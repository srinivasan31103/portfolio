import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Timeline.css'

const experienceData = [
  {
    role: 'Full Stack Developer',
    company: 'Fute Services',
    period: 'Mar 2026 - Aug 2026',
    location: 'Bangalore',
    current: true,
    points: [
      'Developed responsive and interactive web applications using React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap.',
      'Built reusable and scalable UI components to improve development efficiency and maintainability.',
      'Converted Figma designs into pixel-perfect, responsive web interfaces.',
      'Implemented smooth animations, transitions, and user interactions to enhance user experience.',
      'Ensured cross-browser compatibility and mobile responsiveness across multiple devices and screen sizes.',
      'Collaborated with designers and project stakeholders to deliver high-quality user interfaces.',
      'Optimized website performance, loading speed, and frontend code quality.',
      'Worked on multiple client projects using React.js, Tailwind CSS, JavaScript, WordPress, and modern frontend development practices.',
    ],
    highlights: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'WordPress', 'Figma'],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Vtech',
    period: 'Jan 2024 - Feb 2026',
    location: 'Coimbatore',
    points: [
      'Developed full stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Created REST APIs with Node.js & Express.js.',
      'Implemented JWT authentication & CRUD operations.',
      'Built responsive UI with React, Bootstrap, and JavaScript.',
      'Worked with MongoDB Atlas for database management.',
      'Engineered MERN CRUD App, MERN Authentication System (JWT + Protected Routes), and MERN Admin Dashboard (User management + Metrics).',
    ],
    highlights: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'REST APIs', 'Bootstrap'],
  },
  {
    role: 'MERN Stack Developer Intern',
    company: 'Atozerve Ind Pvt Ltd',
    period: 'Aug 2023 - Dec 2023',
    location: 'Coimbatore',
    points: [
      'Engaged in web design and development, creating dynamic and static web pages.',
      'Built full-stack web apps using PHP, MySQL, and React.',
      'Worked on authentication, CRUD operations, and REST APIs.',
      'Gained experience in debugging and version control with Git.',
      'Student Management System – Built a CRUD-based application with login & admin panel.',
    ],
    highlights: ['React.js', 'PHP', 'MySQL', 'JavaScript', 'REST APIs', 'CRUD Operations', 'Git'],
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
                  {item.description && (
                    <p className="timeline-description">{item.description}</p>
                  )}
                  {item.points && (
                    <ul className="timeline-points">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
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
