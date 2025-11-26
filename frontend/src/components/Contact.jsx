import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { toast } from 'react-toastify'
import axios from 'axios'
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import './Contact.css'

const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'sri31103@gmail.com', href: 'mailto:sri31103@gmail.com' },
  { icon: FaPhone, label: 'Phone', value: '+91 9360705681', href: 'tel:+919360705681' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Covai, TN', href: '#' },
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/srinivasan31103', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/srinivasan-n-47696821a/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/chinu_31__?igsh=ajM0aXA0Mm9pdnl3', label: 'Instagram' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await axios.post('/api/contact', formData)

      if (response.data.success) {
        toast.success('Message sent successfully!')
        setFormData({ name: '', email: '', phone: '', location: '', message: '' })
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2>Contact Me</h2>
          <p>Have a project in mind? Let's work together to bring your ideas to life</p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="contact-item"
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-icon">
                    <item.icon />
                  </div>
                  <div>
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="contact-socials">
              <p>Find me on</p>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-row">
              <motion.div
                className="form-group"
                variants={inputVariants}
                custom={0}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="input-icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div
                className="form-group"
                variants={inputVariants}
                custom={1}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="input-icon">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
            </div>

            <div className="form-row">
              <motion.div
                className="form-group"
                variants={inputVariants}
                custom={2}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="input-icon">
                  <FaPhone />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div
                className="form-group"
                variants={inputVariants}
                custom={3}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="input-icon">
                  <FaMapMarkerAlt />
                </div>
                <input
                  type="text"
                  name="location"
                  placeholder="Your Location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </motion.div>
            </div>

            <motion.div
              className="form-group"
              variants={inputVariants}
              custom={4}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <textarea
                name="message"
                placeholder="Your Message *"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner-small" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
