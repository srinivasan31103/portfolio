import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaCode } from 'react-icons/fa'
import './Footer.css'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/srinivasan31103', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/srinivasan-n-47696821a/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/chinu_31__?igsh=ajM0aXA0Mm9pdnl3', label: 'Instagram' },
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-text">SRI</span>
              <span className="logo-dot">.</span>
            </a>
            <p>
              Full-Stack Developer crafting modern web experiences
              with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            <FaCode className="code-icon" />
            Designed & Developed by <span className="highlight">SRINIVASAN</span>
          </p>
          <p>
            Made with <FaHeart className="heart-icon" /> © {currentYear} sri31103@gmail.com All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
