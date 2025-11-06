export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold">E</span>
              </div>
              <span className="font-bold text-lg">EduLearn</span>
            </div>
            <p className="text-sm opacity-80">Empowering learners worldwide with quality education.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Cyber Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  All Courses
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm opacity-80">© 2025 EduLearn. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition">
              Twitter
            </a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition">
              LinkedIn
            </a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
