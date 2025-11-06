"use client"
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">E</span>
          </div>
          <span className="font-bold text-xl text-foreground">EduLearn</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#courses" className="text-foreground hover:text-primary transition">
            Courses
          </a>
          <a href="#tutors" className="text-foreground hover:text-primary transition">
            Tutors
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition">
            About
          </a>
          <a href="#contactus" className="text-foreground hover:text-primary transition">
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border flex flex-col items-start px-6 py-3 space-y-3">
          <a
            href="#courses"
            className="text-foreground hover:text-primary transition w-full"
            onClick={() => setMenuOpen(false)}
          >
            Courses
          </a>
          <a
            href="#tutors"
            className="text-foreground hover:text-primary transition w-full"
            onClick={() => setMenuOpen(false)}
          >
            Tutors
          </a>
          <a
            href="#about"
            className="text-foreground hover:text-primary transition w-full"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contactus"
            className="text-foreground hover:text-primary transition w-full"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
