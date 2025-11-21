// File: Courses.js

// 1. IMPORT Link from next/link
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Web Development Masterclass",
    description: "Learn HTML, CSS, JavaScript, React, and Node.js from scratch to advanced level.",
    level: "Beginner to Advanced",
    duration: "12 weeks",
    students: "2,450",
    rating: 4.9,
    image: "/web-development-coding.png",
    price: "₹2499",
    originalPrice: "₹5000", 
  },
  {
    id: 2,
    title: "Cyber Security Fundamentals",
    description: "Master network security, ethical hacking, and cybersecurity best practices.",
    level: "Intermediate",
    duration: "10 weeks",
    students: "1,820",
    rating: 4.8,
    image: "/cybersecurity-hacking-network.jpg",
    price: "₹2499",
    originalPrice: "₹5000",
  },
  {
    id: 3,
    title: "Advanced Web Development",
    description: "Deep dive into TypeScript, Next.js, databases, and deployment strategies.",
    level: "Advanced",
    duration: "14 weeks",
    students: "1,200",
    rating: 4.9,
    image: "/advanced-web-development.png",
    price: "₹2499",
    originalPrice: "₹5000",
  },
  {
    id: 4,
    title: "Android App Development",
    description: "Create stunning Android applications using Kotlin and Android Studio.",
    level: "Beginner to Intermediate",
    duration: "12 weeks",
    students: "2499",
    rating: 4.8,
    image: "/4428861.jpg",
    price: "₹2499",
    originalPrice: "₹5000",
  },
  {
    id: 5,
    title: "Game Development with Unity",
    description: "Design and develop 2D and 3D games using Unity and C# programming.",
    level: "Intermediate",
    duration: "12 weeks",
    students: "1,150",
    rating: 4.9,
    image: "/game-development.jpg",
    price: "₹2499",
    originalPrice: "₹5000",
  }
]

export default function Courses() {
  return (
    <section id="courses" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Featured Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated courses designed by industry experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* ... Card content (header and stats) remains the same ... */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Level:</span>
                    <span className="font-medium text-foreground">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium text-foreground">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Students:</span>
                    <span className="font-medium text-foreground">{course.students}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Rating:</span>
                    <span className="font-medium text-accent">⭐ {course.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-bold text-primary">{course.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                  
                  {/* 2. MODIFIED: Wrap Button with Link */}
                  <Link href={`/enrollment-form?courseId=${course.id}`} passHref>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                      Enroll
                    </Button>
                  </Link>
                  {/* END MODIFIED */}

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}