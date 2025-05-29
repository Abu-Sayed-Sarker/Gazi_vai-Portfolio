import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "../../assets/Gazivai.png"; // Replace with actual image path
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
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
      <h1 className=" md:text-5xl text-4xl lg:text-6xl font-bold mb-10 inter text-center">
        Work Experience
      </h1>

      <motion.div
        className="experience-box bg-white shadow-xl rounded-2xl p-6 md:p-10 max-w-5xl w-full hover:shadow-2xl transform transition-all duration-300 hover:shadow-[#696868] ease-in-out"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row gap-24 ">
          <div className="w-[8rem] h-[9rem] rounded-xl p-[4px] bg-gradient-to-br from-[#009999] to-[#f1f5f9] mx-auto md:mx-0">
            <div className="w-full h-full rounded-[0.65rem] bg-white ">
              <img
                src={Image}
                alt="Profile"
                width={112}
                height={112}
                className="object-top w-full h-full"
              />
            </div>
          </div>

          <div className="flex-1 ">
            <h2 className="text-4xl font-bold text-[#1f2937] inter ">
              Freelance APP Developer
            </h2>
            <div>
              <div className=" w-full sm:w-1/2 mt-3">
                <h1 className="text-sm inter flex items-center gap-3 text-blue-600 font-semibold  bg-blue-100  px-2 py-1  rounded-full w-1/2 whitespace-nowrap">
                  {" "}
                  <IoMdCheckmarkCircle /> Level 2 Seller
                </h1>
              </div>{" "}
            </div>
            <p className="mt-3 text-gray-700 text-base inter leading-relaxed text-justify">
              I provide specialized app development services on Fiverr, helping
              clients build high-performance mobile applications tailored to
              their unique business needs. With a strong focus on usability,
              performance, and innovation, I deliver custom app solutions that
              create real value and impact for businesses.
            </p>

            <div className="flex justify-center items-start md:items-center flex-wrap gap-6 mt-6">
              <div className="text-center bg-white rounded-lg shadow-md  py-3 px-6 border border-gray-200 hover:shadow-2xl ">
                <div className="text-[#009999] text-3xl font-bold">200+</div>
                <div className="text-base inter text-gray-600 mt-2 ">
                  Projects Completed
                </div>
              </div>
              <div className="text-center flex items-center flex-col bg-white rounded-lg shadow-md  py-3 px-6 border border-gray-200 hover:shadow-2xl ">
                <div className="text-[#009999] text-3xl font-bold flex items-center">
                  5 <GoStarFill className="text-lg text-yellow-500" />
                </div>
                <div className="text-base inter text-gray-600 mt-2">
                  Average Rating
                </div>
              </div>
              <div className="text-center bg-white rounded-lg shadow-md  py-3 px-6 border border-gray-200 hover:shadow-2xl ">
                <div className="text-[#009999] text-3xl font-bold flex items-center">
                  90%
                </div>
                <div className="text-base inter text-gray-600 mt-2">
                  Repeat Clients
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3 text-teal-700 inter">
                Services Offered
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 inter">●</span> Custom AI Model
                  Development
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 inter">●</span> Natural
                  Language Processing
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 inter">●</span> Machine
                  Learning Integration
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 inter">●</span> AI Chatbot
                  Development
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 inter">●</span> Computer Vision
                  Solutions
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 inter">●</span> AI Consultation
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
