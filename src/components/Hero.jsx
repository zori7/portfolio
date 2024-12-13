import { motion } from 'motion/react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }

  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="hero-title">
          Hi, I&#39;m <span>Zori</span>
        </h1>
        <p className="hero-subtitle">Full Stack Developer</p>
        <motion.button whileHover={{ scale: 1.1 }} className="cta-button">
          View My Work
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
