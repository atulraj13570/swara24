import {
  BookOpen,
  Users,
  BarChart3,
  Mail,
  Zap,
  DollarSign,
  Video,
  Settings,
  MoreHorizontal,
} from "lucide-react";

interface ExploreCard {
  id: number;
  title: string;
  icon: React.ReactNode;
  color: string;
}

const exploreCards: ExploreCard[] = [
  {
    id: 1,
    title: "About Us",
    icon: <Users className="w-8 h-8" />,
    color: "from-blue-400 to-blue-500",
  },
  {
    id: 2,
    title: "Blog",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-purple-400 to-purple-500",
  },
  {
    id: 3,
    title: "Teachers",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-pink-400 to-pink-500",
  },
  {
    id: 4,
    title: "Contact",
    icon: <Mail className="w-8 h-8" />,
    color: "from-green-400 to-green-500",
  },
  {
    id: 5,
    title: "Services",
    icon: <Zap className="w-8 h-8" />,
    color: "from-yellow-400 to-yellow-500",
  },
  {
    id: 6,
    title: "Pricing",
    icon: <DollarSign className="w-8 h-8" />,
    color: "from-red-400 to-red-500",
  },
  {
    id: 7,
    title: "Courses",
    icon: <Video className="w-8 h-8" />,
    color: "from-cyan-400 to-cyan-500",
  },
  {
    id: 8,
    title: "Dashboard",
    icon: <Settings className="w-8 h-8" />,
    color: "from-indigo-400 to-indigo-500",
  },
  {
    id: 9,
    title: "More",
    icon: <MoreHorizontal className="w-8 h-8" />,
    color: "from-gray-400 to-gray-500",
  },
];

export default function ExploreSection() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Explore Our Platform
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover all the features and resources available to enhance your learning journey
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {exploreCards.map((card) => (
            <div
              key={card.id}
              className="card-hover group cursor-pointer"
            >
              <div className="h-40 md:h-48 rounded-2xl bg-white shadow-md overflow-hidden flex items-center justify-center relative">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Icon Container */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-3 w-full h-full p-4">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    {card.icon}
                  </div>

                  {/* Title below on mobile, inside on hover */}
                  <p className="text-center text-sm md:text-base font-semibold text-primary text-opacity-0 md:text-opacity-100 group-hover:text-opacity-100 transition-all duration-300 mt-2 md:mt-0">
                    {card.title}
                  </p>
                </div>
              </div>

              {/* Mobile Title */}
              <h3 className="mt-3 text-center font-semibold text-primary md:hidden">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
