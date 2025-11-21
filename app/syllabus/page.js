// File: app/syllabus/page.js
"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProfessionalSyllabusPage() {
  const scrollLeft = () => {
    document.getElementById("syllabus-container")?.scrollBy({ left: -800, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("syllabus-container")?.scrollBy({ left: 800, behavior: "smooth" });
  };

  const syllabi = [
    {
      degree: "BCA",
      specialization: "Cyber Security",
      color: "from-red-500 to-pink-600",
      semesters: [
        "Sem 1-2: Computer Fundamentals, C Programming, Discrete Maths",
        "Sem 3: Data Structures, DBMS, Operating Systems",
        "Sem 4: Computer Networks, Java Programming, Ethical Hacking Intro",
        "Sem 5: Cryptography & Network Security, Web Application Security, Python for Security",
        "Sem 6: Digital Forensics, Penetration Testing, Malware Analysis",
        "Sem 7: Cloud Security, Secure Coding Practices, Cyber Laws & Forensics",
        "Sem 8: Project + Certification Prep (CEH, CompTIA Security+, OSCP Basics)",
      ],
    },
    {
      degree: "BCA",
      specialization: "Game Development",
      color: "from-purple-500 to-indigo-600",
      semesters: [
        "Sem 1-2: Programming in C/C++, Mathematics for Games, Digital Design",
        "Sem 3: Data Structures, OOP with Java, 2D Graphics",
        "Sem 4: Game Engine Fundamentals (Unity/Unreal Intro), C# Scripting",
        "Sem 5: 3D Modeling & Animation, Game Physics, Advanced Unity/C#",
        "Sem 6: Multiplayer Networking, AR/VR Basics, AI in Games",
        "Sem 7: Game Design Document, Mobile Game Dev, Shader Programming",
        "Sem 8: Major Game Project + Portfolio (Published on itch.io/Steam)",
      ],
    },
    {
      degree: "BCA",
      specialization: "Android App Development",
      color: "from-green-500 to-teal-600",
      semesters: [
        "Sem 1-2: C Programming, Web Tech, Computer Organization",
        "Sem 3: Core Java, Database Management, Software Engineering",
        "Sem 4: Advanced Java, Android Studio, XML Layouts, Activities & Intents",
        "Sem 5: Kotlin Programming, Material Design, Firebase Integration",
        "Sem 6: Jetpack Compose, Room DB, REST APIs, MVVM Architecture",
        "Sem 7: Bluetooth, Maps, Notifications, Play Store Publishing",
        "Sem 8: Capstone Android Project + Google Play Deployment",
      ],
    },
    {
      degree: "B.Com",
      specialization: "with C# & Application Development",
      color: "from-amber-500 to-orange-600",
      semesters: [
        "Sem 1-2: Financial Accounting, Business Maths, C Programming",
        "Sem 3: Cost Accounting, Business Statistics, Introduction to .NET",
        "Sem 4: Corporate Accounting, Income Tax, C# OOP Programming",
        "Sem 5: Management Accounting, Auditing, Windows Forms + SQL Server",
        "Sem 6: Financial Management, Tally + GST, ASP.NET MVC, Web APIs",
        "Sem 7: Banking & Insurance, Entrepreneurship, Desktop App Project",
        "Sem 8: Internship + C# Enterprise Application (ERP/Accounting Software)",
      ],
    },
    {
      degree: "B.E. / B.Tech",
      specialization: "Cyber Security Engineering (Basic Design)",
      color: "from-slate-600 to-zinc-800",
      semesters: [
        "Sem 1-2: Engineering Maths, Physics, C/C++, Basic Electrical",
        "Sem 3: Data Structures, Computer Architecture, Digital Logic",
        "Sem 4: OS, DBMS, Network Theory, Intro to Security",
        "Sem 5: Cryptography, Secure System Design, Ethical Hacking Lab",
        "Sem 6: Cloud & IoT Security, Reverse Engineering, Secure SDLC",
        "Sem 7: Blockchain Security, AI in Cybersecurity, Incident Response",
        "Sem 8: Major Project + Industry Internship (SOC / Pentesting)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-blue-950 to-black text-white overflow-hidden">
      {/* Header */}
      <div className="text-center py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
          Professional Syllabus 2025–2029
        </h1>
        <p className="mt-3 text-lg text-gray-300">Industry-Ready | Placement-Focused | Updated Curriculum</p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-4 rounded-full hover:bg-black/80 transition"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-4 rounded-full hover:bg-black/80 transition"
        >
          <ChevronRight size={32} />
        </button>

        <div
          id="syllabus-container"
          className="flex overflow-x-auto scroll-smooth hide-scrollbar gap-8 px-20 py-10 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {syllabi.map((item, index) => (
            <div
              key={index}
              className="min-w-[90vw] md:min-w-[800px] snap-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl"
            >
              <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${item.color}`} />

              <div className="mt-6">
                <h2 className="text-3xl font-bold">
                  {item.degree} <span className="text-cyan-400">– {item.specialization}</span>
                </h2>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.semesters.map((sem, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition"
                    >
                      <span className="text-cyan-300 font-semibold">Semester {i + 1}:</span>
                      <p className="mt-1 text-sm md:text-base text-gray-200">{sem}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-mx-8 mt-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <div className="mt-6 text-center">
                  <span className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-sm font-medium">
                    100% Job-Oriented | Live Projects | Certifications Included
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center py-10">
        <Link href="/enrollment-form">
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-6 text-xl rounded-xl shadow-xl transform hover:scale-105 transition">
            Enroll Now for 2025 Batch
          </Button>
        </Link>
      </div>
    </div>
  );
}