import { motion as Motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "Intern",
      company: "PT Wahana Makmur Sejati",
      period: "2022",
      description:
        "Assisted in building API with Laravel and PHP, managing databases with MySQL, and developed mobile apps with Kotlin.",
    },
    // Tambah pengalaman real kamu di sini
  ];

  return (
    <Motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold text-accent mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-primary p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-secondary">
              {exp.title} at {exp.company}
            </h3>
            <p className="text-sm">{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </Motion.section>
  );
}

export default Experience;
