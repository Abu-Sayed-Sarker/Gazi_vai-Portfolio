import { motion } from "framer-motion";
import image from "../../assets/Gazi vai.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
const AboutMe = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    // Zoom in-out effect
    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Fade/scale in animation on mount
    gsap.from(containerRef.current, {
      //   opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);
  return (
    <div
      id="about"
      className="relative w-full py-16 px-4 md:px-20 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 " />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Image */}
        <div
          ref={containerRef}
          className="relative w-[500px] h-[550px] rounded-3xl overflow-hidden"
        >
          <img
            ref={imageRef}
            src={image}
            alt="About"
            className="w-full object-top rounded-3xl"
          />

          {/* Frosted glass-style overlay */}
          <div className="absolute bottom-0 left-0 w-full h-28 bg-white/30 backdrop-blur-md flex items-center justify-center text-white font-semibold text-lg shadow-inner z-10">
            Passionate AI Developer
          </div>
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center lg:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 inter">
            About Me
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-3 inter">
            Hello, I'm a{" "}
            <span className="text-blue-600 font-semibold inter">
              Mobile App Developer
            </span>
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4 inter">
            A seasoned developer with 5+ years of experience building
            cutting-edge solutions, specializing in{" "}
            <span className="text-blue-600 font-semibold inter">
              Mobile Applications
            </span>
            ,{" "}
            <span className="text-blue-600 font-semibold inter">
              Artificial Intelligence
            </span>
            ,{" "}
            <span className="text-blue-600 font-semibold inter">
              Natural Language Processing (NLP)
            </span>
            , and{" "}
            <span className="text-blue-600 font-semibold inter">
              Full-Stack Development
            </span>
            . I transform complex problems into scalable, intuitive applications
            powered by machine learning and modern mobile/web technologies.
          </p>
          <p className="italic text-gray-600 mb-6 inter">
            Passionate about crafting{" "}
            <strong>high-performance AI systems</strong>,{" "}
            <strong>engaging mobile experiences</strong>, and{" "}
            <strong>user-centric interfaces</strong>, I bridge the gap between
            advanced algorithms and real-world usability.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4">
            <span className="bg-[#0369a1] text-white text-sm px-4 py-2 rounded-full shadow inter">
              ⭐ 5.0 Rating (300+ Reviews)
            </span>
            <span className="bg-[#047857] text-white text-sm px-4 py-2 rounded-full shadow inter flex items-center gap-2">
              <FaRegClock className="" /> Fast Delivery
            </span>
            <span className="bg-[#4338ca] text-white text-sm px-4 py-2 rounded-full shadow inter">
              🥈 Level 2 Seller
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border  hover:border-[#009999] text-[#009999] px-4 py-2 rounded-full bg-white   shadow-md hover:shadow-2xl hover:shadow-[#3f3f3f] transform transition-all duration-300 ease-in-out inter "
            >
              <i className="fab fa-linkedin" />
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href="https://www.fiverr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-green-400 text-green-600 px-4 py-2 rounded-full bg-white hover:bg-green-50 hover:text-green-700 shadow-md hover:shadow-2xl hover:shadow-[#3f3f3f] transform transition-all duration-300 ease-in-out inter "
            >
              <i className="fas fa-envelope" /> <MdOutlineMail />
              Contact on Fiverr
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
