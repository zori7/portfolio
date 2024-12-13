import { motion } from 'motion/react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>

        <motion.p className="about-description" variants={itemVariants}>
          I am a passionate Full Stack developer with experience in developing
          large scale dynamic and visually engaging web applications. I
          specialize in modern frameworks like React, Next.js and Express. My
          mission is to create beautiful, user-friendly interfaces that leave a
          lasting impact.
        </motion.p>

        <div className="skills-container">
          {[
            'React',
            'Typescript',
            'Next.js',
            'TailwindCSS',
            'Framer Motion',
            'Express',
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              variants={itemVariants}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
