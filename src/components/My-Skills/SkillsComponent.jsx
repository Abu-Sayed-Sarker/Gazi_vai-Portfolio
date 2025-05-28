import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const skills = [
  {
    title: "Data Analysis",
    icon: "D",
    description:
      "Extracting meaningful insights from complex datasets to drive decision-making.",
  },
  {
    title: "Natural Language Processing",
    icon: "N",
    description:
      "Building systems that can understand, interpret, and generate human language.",
  },
  {
    title: "Web Development",
    icon: "W",
    description:
      "Designing and building responsive, interactive websites and web applications using modern technologies.",
  },
  {
    title: "Mobile App Development",
    icon: "M",
    description:
      "Creating intelligent mobile applications with seamless user experiences.",
  },
  {
    title: "Machine Learning",
    icon: "M",
    description:
      "Implementing algorithms that allow systems to learn and improve from experience.",
  },
  {
    title: "Artificial Intelligence",
    icon: "A",
    description:
      "Developing custom AI models and solutions for various business needs and applications.",
  },
];

export default function SkillsComponent() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      id="skills"
      className="bg-gradient-to-t from-[#f3f4f6] to-[#f9fafb] py-10 px-4"
    >
      <h2 className="text-4xl font-bold text-center text-[#009999] mb-10">
        My Skills
      </h2>
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-2xl shadow-lg p-10 border hover:border-[#b7ecec]"
          >
            <div className="bg-gradient-to-br from-[#009999] to-[#f1f5f9] text-white font-bold text-3xl w-12 h-12 flex items-center justify-center rounded-md mb-4">
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 inter">
              {skill.title}
            </h3>
            <p className="text-sm text-gray-600 inter">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
