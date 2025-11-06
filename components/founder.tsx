"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin } from "lucide-react"
import { useState } from "react"

export default function Founder() {
  const [showBio, setShowBio] = useState(false)

  return (
    <section
      id="founder"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Meet Our Founder & CEO</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visionary leader driving innovation in online education
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-md w-full border-2 border-primary/20">
            <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img src="./images/kaif_photo.jpg" alt="Founder & CEO" className="w-full h-full object-cover" />
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Mohammad Kaif M Devalapur</CardTitle>
              <CardDescription className="text-primary font-semibold text-base">Founder & CEO</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col justify-between">
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground">
                  Visionary entrepreneur with 4+ years in tech education and online learning platforms. Founded EduTech
                  to democratize quality education globally.
                </p>

                <div>
                  <p className="text-xs font-semibold text-foreground mb-3">Background:</p>
                  <div className="flex flex-wrap gap-2">
                    {["EdTech Founder", "Former Hiddle, Evon & DevPOLer", "B.E Graduate"].map((item) => (
                      <span
                        key={item}
                        className="inline-block px-3 py-1 bg-primary/15 text-primary text-xs rounded-full font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Read Full Bio Toggle Section */}
              {showBio && (
                <div className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Mohammad Kaif is a passionate innovator in the field of education technology, committed to empowering
                    students through skill-based learning. With hands-on experience in Web Development, Cyber Security,
                    AI, and Data Science, he has trained hundreds of learners and collaborated with industry experts to
                    design impactful learning experiences.
                  </p>
                  <p className="mt-3">
                    His vision is to build a global ecosystem where technology meets personalized learning — creating a
                    bridge between academic education and industry readiness.
                  </p>
                </div>
              )}

              <div className="space-y-3 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Students Impacted:</span>
                  <span className="font-bold text-foreground text-lg">500K+</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Countries Reached:</span>
                  <span className="font-bold text-foreground text-lg">85+</span>
                </div>

                {/* Button */}
                <Button
                  onClick={() => setShowBio(!showBio)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                >
                  {showBio ? "Hide Bio" : "Read Full Bio"}
                </Button>

                {/* Social Links */}
                <div className="mt-4 flex justify-center gap-6">
                  <a
                    href="https://linkedin.com/in/mohammadkaifdevalapur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/MohammadkaifDevalapur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
