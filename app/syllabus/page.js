// File: app/syllabus/page.js
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SyllabusPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30, rotateY: -10 },
    visible: { opacity: 1, y: 0, rotateY: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 py-12 px-6 flex flex-col items-center perspective-[1200px]">
      <motion.div
        initial={{ scale: 0.9, rotateX: -15 }}
        animate={{ scale: 1, rotateX: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl w-full bg-card/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-slate-700"
      >
        <motion.h1
          initial={{ y: -30, opacity: 0, rotateX: 10 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-center text-cyan-400 mb-6 drop-shadow-lg"
        >
         Syllabus for PUC, BCA, and BCom Students
        </motion.h1>

        <div className="space-y-6">
          {[
            {
              title: "🌐 Module 1: Web Development Fundamentals",
              points: [
                "Introduction to HTML, CSS, and JavaScript",
                "Building responsive web pages using Flexbox & Grid",
                "Introduction to version control (Git & GitHub)",
                "Creating simple portfolio websites",
              ],
            },
            {
              title: "🐍 Module 2: Python Programming",
              points: [
                "Python Basics – Syntax, Variables, Data Types",
                "Control Statements, Loops, and Functions",
                "Working with Lists, Tuples, Dictionaries",
                "File Handling and Basic Projects",
              ],
            },
            {
              title: "📊 Module 3: Data Science Basics",
              points: [
                "Introduction to Data Science & Real-world Use Cases",
                "Data Cleaning & Visualization using Python (Pandas, Matplotlib)",
                "Understanding Machine Learning Fundamentals",
                "Mini Project: Analyzing Simple Datasets",
              ],
            },
            {
              title: "🔐 Module 4: Cyber Security Fundamentals",
              points: [
                "Understanding Cyber Threats and Attacks",
                "Network Security & Firewalls Basics",
                "Password Protection, Phishing Awareness",
                "Safe Internet and Social Media Practices",
              ],
            },
            {
              title: "⚛️ Module 5: MERN Stack Development",
              points: [
                "React.js Components, Hooks, and Routing",
                "Node.js and Express.js Backend",
                "MongoDB Database Integration",
              ],
            },
            {
              title: "🤖 Module 6: AI-Powered Projects",
              points: [
                "Integrating OpenAI APIs",
                "AI Chatbots and Recommendation Systems",
                "Deploying AI apps to the cloud",
              ],
            },
            {
              title: "💼 Module 7: Placement Preparation",
              points: [
                "Data Structures & Algorithms (DSA with JS)",
                "Mock Interviews & Resume Building",
                "Job Readiness & Communication Skills",
              ],
            },
          ].map((module, index) => (
            <motion.section
              key={index}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                rotateY: 5,
                rotateX: -3,
                scale: 1.02,
                transition: { duration: 0.4 },
              }}
              className="bg-white/80 border border-blue-200 p-5 rounded-xl shadow-md transform transition-all"
            >
              <h2 className="text-xl font-semibold text-cyan-300 mb-2">
                {module.title}
              </h2>
              <ul className="list-disc ml-6 text-slate-800 space-y-1">
                {module.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-10"
        >
          <Link href="/enrollment-form">
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2 text-lg rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-transform hover:scale-105">
              Back to Enrollment
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
