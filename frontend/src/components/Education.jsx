import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Timeline.css'

const educationData = [
  {
    degree: 'B.Sc Computer Science',
    institution: 'Nandha Arts And Science College',
    period: '2020 - 2023',
    location: 'Erode, Tamil Nadu',
    description: 'Completed Bachelor of Science in Computer Science with focus on programming, database management, and software development.',
    highlights: ['Data Structures', 'Web Development', 'Database Management'],
  },
  {
    degree: 'HSC - Computer Science',
    institution: 'VK High Secondary School',
    period: '2017 - 2019',
    location: 'Tamil Nadu',
    description: 'Higher Secondary Certificate with Computer Science specialization, building foundation in programming concepts.',
    highlights: ['C++', 'Basic Programming', 'Computer Fundamentals'],
  },
  {
    degree: 'SSLC - Matriculation',
    institution: 'Pichom Palayam GOVT High School',
    period: '2016 - 2017',
    location: 'Tamil Nadu',
    description: 'Secondary School Leaving Certificate completing foundational education with excellent academic performance.',
    highlights: ['Mathematics', 'Science', 'English'],
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="timeline-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">My Journey</span>
          <h2>Education</h2>
          <p>Academic background and qualifications that shaped my career</p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-card">
                <div className="timeline-icon education">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.degree}</h3>
                  <h4 className="timeline-subtitle">{item.institution}</h4>
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
