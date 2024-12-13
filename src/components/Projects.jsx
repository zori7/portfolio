import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const projectVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Linda Platform app',
      description: 'Express/Postgres/GraphQL/React/Next',
    },
    {
      id: 2,
      title: 'Zefr issue tracker',
      description: 'Laravel/Vue/Docker',
    },
    {
      id: 3,
      title: 'Moescape AI chat',
      description: 'AI image gen and AI chat app',
    },
  ]

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <motion.div
        variants={containerVariants}
        className="projects-grid"
        initial="hidden"
        animate="visible"
      >
        {projects.map(project => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={projectVariants}
            initial="hidden"
            animate="visible"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
