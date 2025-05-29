import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GetInTouch() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center  md:py-16 px-6"
    >
      <h2 className="text-4xl font-bold  inter  md:text-5xl lg:text-6xl inter text-center text-[#009999] mb-10 mt-10">
        Get In Touch
      </h2>
      <div
        ref={containerRef}
        className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border p-8 max-w-3xl text-center transform transition-all duration-300 ease-in-out inter"
      >
        <p className="text-gray-600 mb-8 text-xl inter">
          Interested in working together? Feel free to reach out for
          collaborations or just a friendly hello!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gazi-alauddin-498b73259/"
            className="inline-flex items-center gap-2 px-5 py-2 border border-gray-200 hover:border-teal-500 rounded-lg shadow hover:shadow-md transition-all duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-teal-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.036-1.85-3.036-1.852 0-2.136 1.445-2.136 2.937v5.668H9.352V9h3.413v1.561h.049c.476-.9 1.637-1.85 3.372-1.85 3.605 0 4.27 2.372 4.27 5.456v6.285zM5.337 7.433a2.068 2.068 0 1 1 0-4.136 2.068 2.068 0 0 1 0 4.136zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .775 0 1.732v20.535C0 23.225.792 24 1.771 24h20.451c.978 0 1.778-.775 1.778-1.733V1.732C24 .775 23.203 0 22.225 0z" />
            </svg>
            LinkedIn
          </a>

          {/* Fiverr */}
          <a
            href="https://www.fiverr.com/app_oreo"
            className="inline-flex items-center gap-2 px-5 py-2 border border-gray-200 hover:border-green-500 rounded-lg shadow hover:shadow-md transition-all duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7" />
              <polyline points="22 12 12 17 2 12" />
              <polyline points="2 7 12 12 22 7" />
              <line x1="12" y1="17" x2="12" y2="22" />
            </svg>
            Contact on Fiverr
          </a>
        </div>
      </div>
    </section>
  );
}
