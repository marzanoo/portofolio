import { motion as Motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      name: "audit-app",
      description:
        "A Kotlin-based audit application. (No detailed description available on GitHub; add your own details!)",
      image: "https://via.placeholder.com/400x200?text=Audit+App+Screenshot", // Ganti dengan screenshot real
      link: "https://github.com/marzanoo/audit-app",
    },
    {
      name: "api-audit",
      description:
        "API for audit-related functionalities. (No detailed description available on GitHub; add your own details!)",
      image: "https://via.placeholder.com/400x200?text=API+Audit+Screenshot", // Ganti dengan screenshot real
      link: "https://github.com/marzanoo/api-audit",
    },
    {
      name: "keuanganku",
      description:
        "Aplikasi berbasis web untuk mengatur keuangan seperti penerimaan, penarikan, dan pengeluaran, serta cetak laporan dalam Excel.",
      image: "https://via.placeholder.com/400x200?text=Keuanganku+Screenshot", // Ganti dengan screenshot real
      link: "https://github.com/marzanoo/keuanganku",
    },
  ];

  return (
    <Motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold text-accent mb-6">Projects</h2>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        Let's Collaborate! I'm open to exciting projects.{" "}
        <a
          href="https://github.com/marzanoo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-accent transition-colors"
        >
          View all on GitHub
        </a>
        .
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-primary p-6 rounded-lg cursor-pointer shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-accent">
              {project.name}
            </h3>
            <p className="text-sm mt-2">{project.description}</p>
          </Motion.a>
        ))}
      </div>
    </Motion.section>
  );
}

export default Projects;
