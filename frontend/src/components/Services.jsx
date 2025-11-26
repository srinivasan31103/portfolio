import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaCloud, FaServer, FaPaintBrush, FaCamera, FaCubes } from 'react-icons/fa'
import './Services.css'

const services = [
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'Building responsive and scalable web applications using modern frameworks like React, Node.js, and Express.',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #00d4ff, #0099ff)',
  },
  {
    icon: FaCloud,
    title: 'AWS Services',
    description: 'Cloud infrastructure setup, deployment, and management using Amazon Web Services for scalable solutions.',
    tags: ['EC2', 'S3', 'Lambda'],
    gradient: 'linear-gradient(135deg, #ff9500, #ff5e00)',
  },
  {
    icon: FaServer,
    title: 'Linux Administration',
    description: 'Server configuration, automation, and maintenance on Ubuntu Linux systems with crontab scheduling.',
    tags: ['Ubuntu', 'Shell', 'Crontab'],
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    icon: FaPaintBrush,
    title: 'Web Designing',
    description: 'Creating stunning UI/UX designs with attention to detail using modern design tools and principles.',
    tags: ['Figma', 'CSS3', 'UI/UX'],
    gradient: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
  },
  {
    icon: FaCamera,
    title: 'Photography',
    description: 'Professional photography services including portraits, product shots, and creative visual content.',
    tags: ['Portrait', 'Product', 'Editing'],
    gradient: 'linear-gradient(135deg, #f472b6, #db2777)',
  },
  {
    icon: FaCubes,
    title: 'Terraform',
    description: 'Infrastructure as Code solutions for building, changing, and versioning infrastructure safely.',
    tags: ['IaC', 'DevOps', 'Automation'],
    gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">What I Do</span>
          <h2>My Services</h2>
          <p>Transforming ideas into digital reality with a comprehensive range of services</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div
                className="service-icon"
                style={{ background: service.gradient }}
              >
                <service.icon />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span key={i} className="service-tag">{tag}</span>
                ))}
              </div>
              <div
                className="service-glow"
                style={{ background: service.gradient }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
