import { motion as Motion } from "framer-motion";

function Hero() {
  return (
    <Motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 text-center"
    >
      <h1 className="text-5xl font-bold text-accent mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl max-w-3xl mx-auto mb-6">
        Passionate developer building innovative solutions. Explore my skills,
        projects, and let's connect!
      </p>
      <a
        href="#projects"
        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
      >
        View Projects
      </a>
    </Motion.section>
  );
}

export default Hero;
