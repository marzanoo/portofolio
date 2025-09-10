import { useState, useEffect, useContext } from "react";
import { motion as Motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import LoadingSpinner from "./LoadingSpinner";

function Stats() {
  const [stats, setStats] = useState({
    totalRepos: 0,
    totalStars: 0,
    totalForks: 0,
  });
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://api.github.com/users/marzanoo/repos")
      .then((res) => res.json())
      .then((data) => {
        const totalRepos = data.length;
        const totalStars = data.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0
        );
        const totalForks = data.reduce(
          (acc, repo) => acc + repo.forks_count,
          0
        );
        setStats({ totalRepos, totalStars, totalForks });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <Motion.section
      id="stats"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold text-accent mb-6">GitHub Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className={`bg-primary p-6 rounded-lg text-center ${
            theme === "light" ? "text-bgDark" : "text-white"
          }`}
        >
          <h3 className="text-2xl font-bold">{stats.totalRepos}</h3>
          <p>Total Repositories</p>
        </div>
        <div
          className={`bg-primary p-6 rounded-lg text-center ${
            theme === "light" ? "text-bgDark" : "text-white"
          }`}
        >
          <h3 className="text-2xl font-bold">{stats.totalStars}</h3>
          <p>Total Stars</p>
        </div>
        <div
          className={`bg-primary p-6 rounded-lg text-center ${
            theme === "light" ? "text-bgDark" : "text-white"
          }`}
        >
          <h3 className="text-2xl font-bold">{stats.totalForks}</h3>
          <p>Total Forks</p>
        </div>
      </div>
    </Motion.section>
  );
}

export default Stats;
