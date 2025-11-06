function About(){
    return(
        <section id="about" className="py-16 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">About EduLearn</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            EduLearn is a leading online education platform dedicated to providing high-quality, accessible learning
            experiences for students worldwide. Our mission is to empower individuals through knowledge and skills that
            drive personal and professional growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
            <p className="text-base text-muted-foreground mb-6">
              To be the most trusted and innovative online learning platform, fostering a global community of lifelong
              learners.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
              <li>Quality Education: Delivering top-notch courses designed by industry experts.</li>
              <li>Accessibility: Making learning available to everyone, everywhere.</li>
              <li>Innovation: Continuously improving our platform and offerings through technology.</li>
              <li>Community: Building a supportive network of learners and educators.</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/3081614.jpg"
              alt="About EduLearn"
              className="w-full h-auto max-w-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
    );
}

export default About;