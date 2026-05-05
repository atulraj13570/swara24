import { CheckCircle2 } from "lucide-react";

export default function CTASection() {
  const features = [
    "Access to 500+ expert courses",
    "Learn at your own pace",
    "Industry-recognized certificates",
    "Lifetime course access",
    "24/7 student support",
    "Community of 50K+ learners",
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48"></div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Start Your Learning Journey Today
              </h2>
              <p className="text-lg text-white/80">
                Join thousands of students who have transformed their careers with our comprehensive courses and expert instruction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary flex items-center gap-2">
              Get Started Now
            </button>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-white/70">Active Students</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-white/70">Expert Courses</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <p className="text-white/70">Average Rating</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-white/70">Expert Instructors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
