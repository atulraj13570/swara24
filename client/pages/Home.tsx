import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Trophy, Film, Newspaper, Lightbulb, Heart, ShoppingBag, Play } from "lucide-react";

interface Section {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  items: Array<{ id: number; name: string; image: string }>;
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
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="gradient-primary text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48"></div>

        <div className="section-container relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Complete Learning Ecosystem
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Learn, earn, and grow with our comprehensive platform featuring study materials, contests, entertainment, and premium classes.
          </p>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="section-container space-y-20 md:space-y-32">
          {sections.map((section) => (
            <div key={section.id} className="space-y-8">
              {/* Section Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color} text-white`}>
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 mt-1">{section.description}</p>
                  </div>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="card-hover group cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-full h-40 md:h-48 ${item.image}`}></div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                        {item.name}
                      </h3>
                      <button className="mt-4 inline-flex text-accent font-semibold hover:gap-2 transition-all gap-1 items-center">
                        Explore <span>→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              {section.id !== sections[sections.length - 1].id && (
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="section-container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of learners exploring our complete ecosystem of education and entertainment.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Start Learning Now</button>
            <button className="btn-outline">Explore Features</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
