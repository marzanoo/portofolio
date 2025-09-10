import { motion as Motion } from "framer-motion";

function About() {
  return (
    <Motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12 text-center"
    >
      <img
        src="https://github.com/marzanoo.png" // Ganti dengan https://github.com/marzanoo.png atau avatar real
        alt="Marzanoo Avatar"
        className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
      />
      <h2 className="text-3xl font-bold text-accent mb-4">
        Hi, I'm Marzanoo 👋
      </h2>
      <p className="text-lg max-w-2xl mx-auto">
        I'm a passionate developer skilled in building robust applications.
        Explore my work on{" "}
        <a
          href="https://github.com/marzanoo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-accent transition-colors"
        >
          GitHub
        </a>
        .
      </p>
      <p className="mt-2 text-sm">
        Total Profile Visitors:{" "}
        <span className="text-accent">Visitor Count</span> (Add counter later!)
      </p>
    </Motion.section>
  );
}

export default About;
