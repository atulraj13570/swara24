import { Star } from "lucide-react";

interface FeaturedCard {
  id: number;
  title: string;
  description: string;
  image: string;
  students: number;
  rating: number;
}

const featuredCourses: FeaturedCard[] = [
  {
    id: 1,
    title: "Web Development Mastery",
    description: "Learn HTML, CSS, JavaScript, React and become a full-stack developer",
    image: "gradient-primary",
    students: 12500,
    rating: 4.9,
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description: "Master Python, data analysis, machine learning and statistical concepts",
    image: "bg-gradient-to-br from-blue-400 to-cyan-400",
    students: 8900,
    rating: 4.8,
  },
  {
    id: 3,
    title: "UI/UX Design Bootcamp",
    description: "Create stunning interfaces with Figma, design thinking and user research",
    image: "bg-gradient-to-br from-purple-400 to-pink-400",
    students: 6700,
    rating: 4.9,
  },
];

export default function FeaturedSection() {
  return (
    <section id="courses" className="py-20 md:py-32 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Featured Courses
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our most popular and highly-rated courses taught by industry experts
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="card-hover rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md"
            >
              {/* Image Placeholder */}
              <div className={`w-full h-48 ${course.image}`}></div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">{course.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.description}
                </p>

                {/* Rating and Students */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? "fill-accent text-accent"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {course.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {course.students.toLocaleString()} students
                  </span>
                </div>

                {/* Enroll Button */}
                <button className="w-full btn-primary text-center">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-outline">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
