import { motion as Motion } from "framer-motion";
import { FaInstagram, FaDiscord, FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Integrasikan dengan EmailJS atau backend di sini
    alert("Message sent! (Check console for data)");
  };

  const socials = [
    {
      name: "Instagram",
      link: "https://instagram.com/tanzanomikaill",
      icon: <FaInstagram size={24} />,
    },
    {
      name: "Discord",
      link: "https://discord.com/users/yourid",
      icon: <FaDiscord size={24} />,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/tanzano-mikail",
      icon: <FaLinkedin size={24} />,
    },
  ];

  return (
    <Motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold text-accent mb-6">Let's Connect! 🌟</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-secondary mb-4">
            Social Links
          </h3>
          <div className="flex justify-start gap-6">
            {socials.map((social) => (
              <Motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#93c5fd" }}
                className="text-secondary"
              >
                {social.icon}
              </Motion.a>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-secondary mb-4">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("name")}
              placeholder="Your Name"
              className="w-full bg-bgDark dark:bg-bgDark light:bg-white p-2 rounded text-white light:text-primary"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
            <input
              {...register("email")}
              placeholder="Your Email"
              className="w-full bg-bgDark dark:bg-bgDark light:bg-white p-2 rounded text-white light:text-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <textarea
              {...register("message")}
              placeholder="Your Message"
              className="w-full bg-bgDark dark:bg-bgDark light:bg-white p-2 rounded text-white light:text-primary h-32"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
            <button
              type="submit"
              className="bg-secondary px-6 py-2 rounded text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <p className="mt-4 text-lg text-center">
        Feel free to reach out for collaborations!
      </p>
    </Motion.section>
  );
}

export default Contact;
