"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin } from "lucide-react"
import { useState } from "react"

const tutors = [
  {
    id: 1,
    name: "Labbaik Peerzade",
    title: "Web Development Expert",
    bio: "Senior Full-Stack Developer with 5+ years of experience building scalable web applications.",
    expertise: ["React", "Node.js", "TypeScript", "AWS"],
    students: "3,200+",
    rating: 4.9,
    image: "/professional-woman-developer.png",
    linkedin: "https://linkedin.com/in/labbaikpeerzade",
    github: "https://github.com/labbaikpeerzade",
  },
  {
    id: 2,
    name: "Omkar D Patil",
    title: "Cybersecurity Specialist",
    bio: "Certified Ethical Hacker with expertise in network security and penetration testing.",
    expertise: ["Network Security", "Ethical Hacking", "Cryptography", "Compliance"],
    students: "2,100+",
    rating: 4.8,
    image: "/professional-security-expert.png",
    linkedin: "https://linkedin.com/in/omkardpatil",
    github: "https://github.com/omkardpatil",
  },
  {
    id: 3,
    name: "Labbaik Peerzade & MohammadKaif M Devalapur",
    title: "Frontend Architect",
    bio: "UI/UX focused developer specializing in modern frontend frameworks and design systems.",
    expertise: ["React", "Vue.js", "CSS", "Design Systems"],
    students: "2,800+",
    rating: 4.9,
    image: "/professional-woman-frontend-developer.jpg",
    linkedin: "https://linkedin.com/in/mohammadkaifdevalapur",
    github: "https://github.com/MohammadkaifDevalapur",
  },
  {
    id: 4,
    name: "Omkar D Patil",
    title: "Security Operations Lead",
    bio: "SOC Manager with deep knowledge in threat detection and incident response.",
    expertise: ["SIEM", "Threat Detection", "Incident Response", "Compliance"],
    students: "1,900+",
    rating: 4.7,
    image: "/professional-man-security-operations.jpg",
    linkedin: "https://linkedin.com/in/omkardpatil",
    github: "https://github.com/omkardpatil",
  },
]

export default function Tutors() {
  const [openProfile, setOpenProfile] = useState<number | null>(null)

  return (
    <section id="tutors" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Meet Our Expert Tutors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry professionals with years of real-world experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutors.map((tutor) => (
            <Card
              key={tutor.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img src={tutor.image || "/placeholder.svg"} alt={tutor.name} className="w-full h-full object-cover" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{tutor.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{tutor.title}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-4 mb-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">{tutor.bio}</p>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {tutor.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Students:</span>
                    <span className="font-medium text-foreground">{tutor.students}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Rating:</span>
                    <span className="font-medium text-accent">⭐ {tutor.rating}</span>
                  </div>

                  {/* View Profile Toggle */}
                  <Button
                    onClick={() => setOpenProfile(openProfile === tutor.id ? null : tutor.id)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
                  >
                    {openProfile === tutor.id ? "Hide Profile" : "View Profile"}
                  </Button>

                  {/* Social Links Section */}
                  {openProfile === tutor.id && (
                    <div className="mt-3 flex items-center justify-center gap-4">
                      <a
                        href={tutor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Linkedin size={20} />
                        LinkedIn
                      </a>
                      <a
                        href={tutor.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <Github size={20} />
                        GitHub
                      </a>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
