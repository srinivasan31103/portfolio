import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaDownload, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import './Hero.css'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/srinivasan31103', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/srinivasan-n-47696821a/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/chinu_31__?igsh=ajM0aXA0Mm9pdnl3', label: 'Instagram' },
]

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="hero" ref={ref}>
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
        <div className="grid-pattern" />
      </div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Left Content */}
        <div className="hero-content">
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot" />
            Available for work
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hello, I'm
            <span className="hero-name">SRINIVASAN</span>
          </motion.h1>

          <motion.div className="hero-role" variants={itemVariants}>
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'MERN Stack Developer',
                2000,
                'Web Designer',
                2000,
                'Cloud Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Crafting digital experiences with modern technologies.
            Passionate about building scalable web applications and
            turning ideas into reality through code.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">
              <FaDownload />
              Download CV
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right - Profile Image */}
        <motion.div
          className="hero-image-wrapper"
          variants={itemVariants}
        >
          <div className="hero-image-container">
            <div className="image-glow" />
            <div className="image-ring ring-1" />
            <div className="image-ring ring-2" />
            <div className="image-ring ring-3" />
            <img
              src="/"
              alt=""
              className="hero-image"
            />
            {/* Floating Tech Icons */}
            <motion.div
              className="floating-icon icon-react"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ⚛️
            </motion.div>
            <motion.div
              className="floating-icon icon-node"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              🟢
            </motion.div>
            <motion.div
              className="floating-icon icon-mongo"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              🍃
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="mouse">
          <div className="mouse-wheel" />
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  )
}
