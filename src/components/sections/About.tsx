"use client";

import { motion } from "framer-motion";
import { Code, Server, Cloud, Terminal } from "lucide-react";

export default function About() {
  const skills = [
    "Linux",
    "Docker",
    "NGINX",
    "Java",
    "Networking",
    "DevOps",
    "Cloud",
    "GitHub",
  ];

  const cards = [
  {
    icon: <Terminal size={28} />,
    title: "Linux Administration",
    desc: "Building a strong foundation in Linux administration, shell scripting, networking, process management, and system security.",
  },
  {
    icon: <Server size={28} />,
    title: "AWS & Cloud Computing",
    desc: "Learning AWS services including EC2, IAM, S3, VPC, Route 53, CloudFront, and cloud architecture fundamentals.",
  },
  {
    icon: <Cloud size={28} />,
    title: "Docker & CI/CD",
    desc: "Containerizing applications with Docker and learning CI/CD pipelines to automate software delivery.",
  },
  {
    icon: <Code size={28} />,
    title: "DevOps Projects",
    desc: "Building hands-on DevOps projects focused on Linux, AWS, Docker, automation, and cloud infrastructure.",
  },
];

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-14 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm tracking-[0.3em] text-gray-400 mb-3">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Building My Journey Into DevOps Engineering
            <br />

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            I am a BCA student passionate about Linux, AWS, Docker, Networking, and DevOps. I enjoy building hands-on projects while continuously improving my cloud, automation, and infrastructure skills.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-14">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-white/20 transition-all"
            >
              <div className="mb-5 text-gray-300">{card.icon}</div>

              <h3 className="text-2xl font-semibold mb-3">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
