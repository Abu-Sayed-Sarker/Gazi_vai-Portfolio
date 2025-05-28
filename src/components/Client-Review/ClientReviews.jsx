import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "../../assets/GAzi vai.png";

const reviews = [
  {
    name: "maxilef",
    country: "United States",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    timeAgo: "2 weeks ago",
    review:
      "His communication is clear and timely, and he tackles challenges head-on with practical solutions. It's been a smooth and reliable partnership, and I'm happy to keep working with Gazi on future projects.",
  },
  {
    name: "imdjohirulfin01",
    country: "United States",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    timeAgo: "3 months ago",
    review:
      "Throughout the process, he showed remarkable attentiveness and a positive approach. Looking forward to future projects together.",
  },
  {
    name: "davisdebard",
    country: "United States",
    avatar: "https://randomuser.me/api/portraits/men/60.jpg",
    timeAgo: "1 month ago",
    review:
      "It was great working with Gazi! I hope to work with him in the future as well. Great coders.",
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
      <h2 className="text-5xl font-bold text-center  inter mb-5">
        Client Review
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            className="review-box bg-white p-6 rounded-2xl shadow-md mt-8"
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
                <div className="font-semibold text-base inter">{r.name}</div>
                <div className="text-base text-gray-50 inter 0">
                  {r.country}
                </div>
              </div>
            </div>
            <div className="flex items-center text-yellow-500 text-sm mb-1">
              {"★★★★★"}{" "}
              <span className="text-gray-500 ml-2 inter text-base ">
                {r.timeAgo}
              </span>
            </div>
            <blockquote className="text-gray-700 text-sm border-l-4 border-teal-500 pl-4 italic inter text-base">
              "{r.review}"
            </blockquote>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
