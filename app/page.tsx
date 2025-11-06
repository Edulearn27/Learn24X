import About from "@/components/about"
import ContactUs from "@/components/contactus"
import Courses from "@/components/courses"
import Footer from "@/components/footer"
import Founder from "@/components/founder"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Tutors from "@/components/tutors"
import EnrollmentFormPage from "./enrollment-form/page"
import SyllabusPage from "./syllabus/page"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Courses />
      <About />
      <Tutors />
      <Founder />
      <SyllabusPage />
      <ContactUs />
      <Footer />
      <EnrollmentFormPage />
    </main>
  )
}
