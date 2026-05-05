import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Trophy, Film, Newspaper, Lightbulb, Heart, ShoppingBag, Play, ArrowLeft } from "lucide-react";

interface SectionItem {
  id: number;
  name: string;
  image: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  items: SectionItem[];
}

const sections: Section[] = [
  {
    id: "study",
    title: "Study Material",
    description: "Access comprehensive study guides and resources",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-blue-400 to-blue-600",
    items: [
      { id: 1, name: "Mathematics", image: "bg-gradient-to-br from-blue-400 to-blue-500" },
      { id: 2, name: "Physics", image: "bg-gradient-to-br from-blue-500 to-blue-600" },
      { id: 3, name: "Chemistry", image: "bg-gradient-to-br from-blue-600 to-blue-700" },
      { id: 4, name: "Biology", image: "bg-gradient-to-br from-blue-400 to-cyan-500" },
      { id: 5, name: "English", image: "bg-gradient-to-br from-blue-500 to-cyan-600" },
      { id: 6, name: "History", image: "bg-gradient-to-br from-blue-600 to-cyan-700" },
    ],
  },
  {
    id: "winandear",
    title: "Win & Earn",
    description: "Participate in contests and earn rewards",
    icon: <Trophy className="w-8 h-8" />,
    color: "from-yellow-400 to-yellow-600",
    items: [
      { id: 1, name: "Quiz Contests", image: "bg-gradient-to-br from-yellow-400 to-yellow-500" },
      { id: 2, name: "Weekly Challenges", image: "bg-gradient-to-br from-yellow-500 to-yellow-600" },
      { id: 3, name: "Leaderboards", image: "bg-gradient-to-br from-yellow-600 to-yellow-700" },
      { id: 4, name: "Daily Rewards", image: "bg-gradient-to-br from-yellow-400 to-orange-500" },
      { id: 5, name: "Prize Pool", image: "bg-gradient-to-br from-yellow-500 to-orange-600" },
      { id: 6, name: "Achievements", image: "bg-gradient-to-br from-yellow-600 to-orange-700" },
    ],
  },
  {
    id: "movies",
    title: "Movie Summary",
    description: "Educational summaries of popular movies",
    icon: <Film className="w-8 h-8" />,
    color: "from-purple-400 to-purple-600",
    items: [
      { id: 1, name: "Drama Films", image: "bg-gradient-to-br from-purple-400 to-purple-500" },
      { id: 2, name: "Documentaries", image: "bg-gradient-to-br from-purple-500 to-purple-600" },
      { id: 3, name: "Historical", image: "bg-gradient-to-br from-purple-600 to-purple-700" },
      { id: 4, name: "Sci-Fi Films", image: "bg-gradient-to-br from-purple-400 to-pink-500" },
      { id: 5, name: "Biographies", image: "bg-gradient-to-br from-purple-500 to-pink-600" },
      { id: 6, name: "Educational", image: "bg-gradient-to-br from-purple-600 to-pink-700" },
    ],
  },
  {
    id: "news",
    title: "News",
    description: "Stay updated with latest educational news",
    icon: <Newspaper className="w-8 h-8" />,
    color: "from-red-400 to-red-600",
    items: [
      { id: 1, name: "Tech News", image: "bg-gradient-to-br from-red-400 to-red-500" },
      { id: 2, name: "Science News", image: "bg-gradient-to-br from-red-500 to-red-600" },
      { id: 3, name: "World News", image: "bg-gradient-to-br from-red-600 to-red-700" },
      { id: 4, name: "Education Updates", image: "bg-gradient-to-br from-red-400 to-orange-500" },
      { id: 5, name: "Career News", image: "bg-gradient-to-br from-red-500 to-orange-600" },
      { id: 6, name: "Trending Topics", image: "bg-gradient-to-br from-red-600 to-orange-700" },
    ],
  },
  {
    id: "business",
    title: "Business Ideas",
    description: "Entrepreneurship and business guidance",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "from-green-400 to-green-600",
    items: [
      { id: 1, name: "Startups", image: "bg-gradient-to-br from-green-400 to-green-500" },
      { id: 2, name: "Side Hustles", image: "bg-gradient-to-br from-green-500 to-green-600" },
      { id: 3, name: "Investments", image: "bg-gradient-to-br from-green-600 to-green-700" },
      { id: 4, name: "Freelancing", image: "bg-gradient-to-br from-green-400 to-emerald-500" },
      { id: 5, name: "E-Commerce", image: "bg-gradient-to-br from-green-500 to-emerald-600" },
      { id: 6, name: "Digital Marketing", image: "bg-gradient-to-br from-green-600 to-emerald-700" },
    ],
  },
  {
    id: "beauty",
    title: "Beauty & Fitness",
    description: "Health, wellness and fitness guidance",
    icon: <Heart className="w-8 h-8" />,
    color: "from-pink-400 to-pink-600",
    items: [
      { id: 1, name: "Fitness Routines", image: "bg-gradient-to-br from-pink-400 to-pink-500" },
      { id: 2, name: "Beauty Tips", image: "bg-gradient-to-br from-pink-500 to-pink-600" },
      { id: 3, name: "Wellness", image: "bg-gradient-to-br from-pink-600 to-pink-700" },
      { id: 4, name: "Yoga & Meditation", image: "bg-gradient-to-br from-pink-400 to-rose-500" },
      { id: 5, name: "Nutrition", image: "bg-gradient-to-br from-pink-500 to-rose-600" },
      { id: 6, name: "Mental Health", image: "bg-gradient-to-br from-pink-600 to-rose-700" },
    ],
  },
  {
    id: "products",
    title: "Buy Products",
    description: "Shop premium educational products",
    icon: <ShoppingBag className="w-8 h-8" />,
    color: "from-cyan-400 to-cyan-600",
    items: [
      { id: 1, name: "Books", image: "bg-gradient-to-br from-cyan-400 to-cyan-500" },
      { id: 2, name: "Electronics", image: "bg-gradient-to-br from-cyan-500 to-cyan-600" },
      { id: 3, name: "Accessories", image: "bg-gradient-to-br from-cyan-600 to-cyan-700" },
      { id: 4, name: "Stationery", image: "bg-gradient-to-br from-cyan-400 to-blue-500" },
      { id: 5, name: "Learning Tools", image: "bg-gradient-to-br from-cyan-500 to-blue-600" },
      { id: 6, name: "Tech Gadgets", image: "bg-gradient-to-br from-cyan-600 to-blue-700" },
    ],
  },
  {
    id: "classes",
    title: "Paid Classes",
    description: "Enroll in premium online courses",
    icon: <Play className="w-8 h-8" />,
    color: "from-indigo-400 to-indigo-600",
    items: [
      { id: 1, name: "Live Classes", image: "bg-gradient-to-br from-indigo-400 to-indigo-500" },
      { id: 2, name: "One-on-One", image: "bg-gradient-to-br from-indigo-500 to-indigo-600" },
      { id: 3, name: "Bootcamps", image: "bg-gradient-to-br from-indigo-600 to-indigo-700" },
      { id: 4, name: "Certification", image: "bg-gradient-to-br from-indigo-400 to-purple-500" },
      { id: 5, name: "Mentorship", image: "bg-gradient-to-br from-indigo-500 to-purple-600" },
      { id: 6, name: "Workshop", image: "bg-gradient-to-br from-indigo-600 to-purple-700" },
    ],
  },
];

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const currentSection = selectedSection
    ? sections.find((s) => s.id === selectedSection)
    : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {!selectedSection ? (
        // Grid View - All Sections
        <>
          {/* Hero Banner */}
          <section className="gradient-primary text-white py-16 md:py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48"></div>

            <div className="section-container relative z-10 text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Complete Learning Ecosystem
              </h1>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Explore all categories and find what you're looking for
              </p>
            </div>
          </section>

          {/* Sections Grid */}
          <section className="py-16 md:py-24 bg-white">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setSelectedSection(section.id)}
                    className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-100"
                  >
                    {/* Color Background */}
                    <div
                      className={`w-full h-32 bg-gradient-to-br ${section.color}`}
                    ></div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${section.color} text-white`}>
                          {section.icon}
                        </div>
                        <h3 className="text-lg font-bold text-primary text-left group-hover:text-secondary transition-colors">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm text-left">
                        {section.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="section-container text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Start Exploring Now
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Click on any category above to explore all available classes and content
              </p>
            </div>
          </section>

          <Footer />
        </>
      ) : (
        // Detail View - Selected Section Items
        <>
          {/* Header with Back Button */}
          <section className={`bg-gradient-to-br ${currentSection!.color} text-white py-12 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48"></div>

            <div className="section-container relative z-10">
              <button
                onClick={() => setSelectedSection(null)}
                className="flex items-center gap-2 mb-6 text-white hover:text-white/80 transition-colors font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to All Categories
              </button>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md">
                  {currentSection!.icon}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    {currentSection!.title}
                  </h1>
                  <p className="text-white/80 text-lg mt-2">
                    {currentSection!.description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Items Grid */}
          <section className="py-16 md:py-24 bg-white">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentSection!.items.map((item) => (
                  <div
                    key={item.id}
                    className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border border-gray-100"
                  >
                    {/* Image */}
                    <div className={`w-full h-48 ${item.image}`}></div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                        {item.name}
                      </h3>
                      <button className="mt-4 inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                        Explore <span>→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Continue Exploring CTA */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="section-container text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Explore More Categories
              </h2>
              <button
                onClick={() => setSelectedSection(null)}
                className="btn-primary"
              >
                Back to All Categories
              </button>
            </div>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}
