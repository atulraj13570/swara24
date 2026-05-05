import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="gradient-primary text-white py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48"></div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Learn Without Limits
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                Unlock your potential with world-class education. Access thousands of courses taught by expert instructors and transform your future.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center gap-2 group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white border-2 border-white rounded-lg transition-all duration-300 hover:bg-white hover:text-primary">
                Explore Courses
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-white/70 text-sm">Active Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-white/70 text-sm">Expert Courses</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-white/70 text-sm">Student Rating</div>
              </div>
            </div>
          </div>

          {/* Right Illustration Area */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Placeholder for illustration */}
              <div className="w-full h-full rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white/70"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747C22 11 17.5 6.253 12 6.253z"
                      />
                    </svg>
                  </div>
                  <p className="text-white/70 text-sm">Student Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
