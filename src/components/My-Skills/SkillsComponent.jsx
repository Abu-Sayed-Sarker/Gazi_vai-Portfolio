import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { div } from "framer-motion/client";

const skills = [
  {
    title: "Mobile UI/UX Design",
    icon: "🎨",
    description:
      "Designing intuitive and engaging user interfaces for mobile applications to enhance user experience.",
  },
  {
    title: "Native Mobile Development",
    icon: "📱",
    description:
      "Building high-performance mobile apps using native platforms like Swift for iOS and Kotlin/Java for Android.",
  },
  {
    title: "Cross-Platform Development",
    icon: "⚙️",
    description:
      "Developing mobile applications that run seamlessly on multiple platforms using frameworks like Flutter and React Native.",
  },
  {
    title: "Mobile App Performance Optimization",
    icon: "🚀",
    description:
      "Improving app responsiveness, reducing load times, and optimizing battery and memory usage for better performance.",
  },
  {
    title: "Mobile Backend Integration",
    icon: "🔗",
    description:
      "Integrating mobile apps with backend services and APIs for data synchronization, authentication, and cloud storage.",
  },
  {
    title: "App Store Deployment & Maintenance",
    icon: "📦",
    description:
      "Managing app submission, updates, and compliance with App Store and Google Play guidelines for smooth releases.",
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
    <div id="skills">
      <div className="bg-gradient-to-t from-[#f3f4f6] to-[#f9fafb] md:py-20 py-10  px-4">
        <h2 className="text-4xl font-bold  inter  md:text-5xl lg:text-6xl inter text-center text-[#009999] mb-10">
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
    </div>
  );
}
