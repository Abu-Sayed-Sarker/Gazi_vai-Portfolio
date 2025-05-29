import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect } from "react";
export default function Hero() {
  useEffect(() => {
    // GSAP Animation for SVG Path
    gsap.to(".curved-path", {
      duration: 1,
      repeat: -2,
      ease: "power1.inOut",
      yoyo: true,
      attr: {
        d: "M0,180 C 200,220, 400,230, 600,210 C 800,180, 1000,240, 1200,210 C 1400,160, 1600,190, 1600,190 L 1600,320 L 0,320 Z",
      },
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-teal-500 to-teal-400 pt-[1rem] md:pt-36 pb-20 text-center text-white relative">
      <div className=" container mx-auto px-4 mt-32">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          AI Developer
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-6xl font-bold mt-4"
        >
          Full-Stack App & Web Expert
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-base md:text-2xl"
        >
          AI Developer with expertise in building high-quality mobile apps{" "}
          <br /> and web solutions. Focused on creating smart, efficient, and{" "}
          <br /> scalable digital products.
        </motion.p>
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 inline-flex items-center bg-white text-teal-600 font-semibold py-2 px-5 rounded-full shadow hover:shadow-lg transition"
        >
          Learn More
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.a>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 240"
        >
          <path
            className="curved-path"
            fill="#FFFFFF"
            d="M0,160 C 200,200, 400,250, 600,220 C 800,190, 1000,260, 1200,200 C 1400,140, 1600,210, 1600,210 L 1600,240 L 0,240 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
