import { motion as Motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <Motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-10 bg-bgDark/80 dark:bg-bgDark/80 light:bg-bgLight/80 backdrop-blur-md py-4 px-6 shadow-lg"
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-accent">Marzanoo</h1>
        <div className="flex items-center space-x-6">
          {[
            "About",
            "Skills",
            "Stats",
            "Projects",
            "Experience",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-secondary hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </Motion.nav>
  );
}

export default Navbar;
