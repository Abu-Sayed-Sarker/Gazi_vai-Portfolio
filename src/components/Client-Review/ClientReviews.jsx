import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "../../assets/GAzi vai.png";

const reviews = [
  {
    name: "maxilef",
    country: "United States",
    avatar: "/avatar1.png",
    timeAgo: "2 weeks ago",
    review:
      "Shovon and his team are so helpful and they are very passionate about their work. You can trust you are in good hands with Shovon and his team as they want to see you succeed and are happy to help, answer any questions, and make any changes.",
  },
  {
    name: "imdjohirulfin01",
    country: "United States",
    avatar: "/avatar2.png",
    timeAgo: "3 months ago",
    review:
      "Collaborating with Shovon has been a great experience time and time again. He brings both talent and dedication to every project, handling challenges with ease and delivering polished, high-quality work.",
  },
  {
    name: "davisdebard",
    country: "United States",
    avatar: "/avatar3.png",
    timeAgo: "1 month ago",
    review:
      "I've consistently been impressed with Shovon's expertise and reliable execution. He continues to be a valuable asset to our AI projects, and I look forward to working with him again.",
  },
];

export default function ClientReviews() {
  useEffect(() => {
    gsap.from(".review-box", {
      y: 30,

      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-center mb-12">Client Review</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            className="review-box bg-white p-6 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={r.avatar}
                  alt={r.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-gray-500">{r.country}</div>
              </div>
            </div>
            <div className="flex items-center text-yellow-500 text-sm mb-1">
              {"★★★★★"} <span className="text-gray-500 ml-2">{r.timeAgo}</span>
            </div>
            <blockquote className="text-gray-700 text-sm border-l-4 border-teal-500 pl-4 italic">
              "{r.review}"
            </blockquote>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
