import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";

const ProjectsShowcase = () => {
  const [showAll, setShowAll] = useState(false);

  const projectsData = [
    {
      id: 1,
      title: "Nutra AI - Calorie Counter",
      image: "https://i.ibb.co/XZmVZKjv/Nutra-AI-App003.jpg", // Move image to public/images if local
      description:
        "Track meals easily—just snap a photo for instant nutrition insights.",
      link: "https://play.google.com/store/apps/details?id=com.nutraai.nutraai", // Replace with actual link
    },
    {
      id: 2,
      title: "Smarter Google Ads with AI",
      image: "https://i.ibb.co/KpVT84tG/Ad-Vision-AI-Chatbot.jpg",
      description:
        "Optimize campaigns fast with AI insights, support, and automation tools.n",
      link: "http://72.167.224.36/home",
    },
    {
      id: 3,
      title: "Smarter Math Help with AI",
      image: "https://i.ibb.co/G4Z4FRfC/Math-Ai-chatbot.jpg",
      description:
        "AI-powered math tutoring for fast, fun, and effective learning.",
      link: "https://www.mathaidetectives.com/",
    },
    {
      id: 4,
      title: "AI Session Planner",
      image: "https://i.ibb.co/SXBnqy8k/Ai-Finance-Hub-11.jpg",
      description: "Plan sessions by sport, age, skill, theme—coach with ease.",
      link: "https://play.google.com/store/apps/details?id=com.jvai.agcourt",
    },
    {
      id: 5,
      title: "One AI Hub, Total Control",
      image: "https://i.ibb.co/C5vq2mdG/Untitled-1.jpg",
      description:
        "Switch, search, and save across ChatGPT, Claude, and Gemini.",
      link: "https://www.aitain.ai/",
    },
    {
      id: 6,
      title: "Top AI Tools, Ranked",
      image: "https://i.ibb.co/rRs6LD8P/Ai-Tain-00.jpg",
      description:
        "Quickly find the best AI for your needs—compare, choose, and boost your workflow.",
      link: "https://www.choosethebest.ai/",
    },
  ];

  // Display only first 3 projects initially, or all if showAll is true
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 1,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-gray-50">
      <div id="projects" className="container mx-auto px-4 md:pt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  inter  md:text-5xl lg:text-6xl inter text-center text-[#009999] mb-10 pt-10">
            My Projects
          </h2>

          <Fade delay={300} triggerOnce>
            <p className="text-gray-700 mb-10 max-w-2xl mx-auto inter">
              Explore a diverse portfolio of completed works that showcase our
              creativity, technical expertise, and commitment to client
              satisfaction. Each project reflects our passion for quality and
              innovation.
            </p>
          </Fade>
        </div>
        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10"
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 },
                }}
                className="border rounded-2xl overflow-hidden shadow-sm bg-white hover:bg-purple-50 transition inter"
              >
                {/* Project Image */}
                <motion.div
                  className="md:h-[267px] bg-gray-200 overflow-hidden "
                  whileHover={{ scale: 1.05 }}
                  // transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Project Info */}
                <div className="p-5">
                  <Slide cascade direction="leeft" damping={0.5}>
                    {/* Project Description */}
                    <p className="text-gray-600 mb-2">{project.description}</p>
                    {/* Project Title */}
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    {/* View Details Button */}
                    <div className="mt-4">
                      <a
                        href={project.link}
                        className="text-blue-500 hover:underline text-sm font-medium"
                      >
                        View Project Details
                      </a>
                    </div>
                  </Slide>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All/Show Less Projects Button */}
        <div className="flex justify-center">
          {/* <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-500 text-white py-3 px-6 rounded flex items-center gap-2 hover:bg-blue-600 transition"
        >
          {showAll ? "Show Less" : "View All Projects"}
          <ArrowRight
            size={16}
            className={showAll ? "transform rotate-90 transition" : ""}
          />
        </button> */}
          <div className="mt-6 mb-2 md:mt-12 cursor-pointer">
            <button
              onClick={() => setShowAll(!showAll)}
              className="relative px-8 py-2 border-2 text-lg border-r-4 border-b-4 border-[#0499D1] border-b-sky-200 border-r-sky-200 rounded-lg bg-none text-black hover:text-white overflow-hidden group transform transition-all duration-500 ease-out hover:translate-x-4 hover:translate-y-2"
            >
              <span className="relative z-10 flex items-center gap-1">
                {showAll ? "Show Less" : "View All Projects"}
                <ArrowRight
                  size={16}
                  className={showAll ? "transform rotate-90 transition" : ""}
                />
              </span>
              {/* Color fill from bottom-left corner */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#06BDE5] via-[#0499D1] to-[#0170BB] transform scale-x-0 scale-y-0 origin-bottom-left group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
//
