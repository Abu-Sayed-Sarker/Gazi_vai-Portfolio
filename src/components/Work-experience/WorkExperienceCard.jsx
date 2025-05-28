import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "../../assets/GAzi vai.png"; // Replace with actual image path

export default function WorkExperienceCard() {
  useEffect(() => {
    gsap.from(".experience-box", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="flex flex-col items-center px-4 py-12 bg-white">
      <h1 className="text-4xl font-bold mb-10">Work Experience</h1>

      <motion.div
        className="experience-box bg-white shadow-xl rounded-2xl p-6 md:p-10 max-w-5xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-28 h-28 rounded-xl border-4 border-teal-500 overflow-hidden mx-auto md:mx-0">
            <img
              src={Image} // Replace with actual image path
              alt="Profile"
              width={112}
              height={112}
              className="object-top w-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">Freelance AI Developer</h2>
            <div className="text-sm text-blue-600 font-semibold mt-1">
              Level 2 Seller
            </div>
            <p className="mt-3 text-gray-700 text-base">
              I provide specialized AI development services on Fiverr, helping
              clients implement cutting-edge artificial intelligence solutions
              for their businesses. With a focus on quality and innovation, I
              deliver tailored solutions that drive real business impact.
            </p>

            <div className="flex flex-wrap gap-6 mt-6">
              <div className="text-center">
                <div className="text-teal-600 text-3xl font-bold">200+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-500 text-3xl font-bold">
                  5<span className="text-sm">⭐</span>
                </div>
                <div className="text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-teal-600 text-3xl font-bold">90%</div>
                <div className="text-sm">Repeat Clients</div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3 text-teal-700">
                Services Offered
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">●</span> Custom AI Model
                  Development
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">●</span> Natural Language
                  Processing
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">●</span> Machine Learning
                  Integration
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">●</span> AI Chatbot
                  Development
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">●</span> Computer Vision
                  Solutions
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">●</span> AI Consultation
                  Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
