import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Trophy, Film, Newspaper, Lightbulb, Heart, ShoppingBag, Play, ArrowLeft, FileText, Video, Volume2, Coins, ShoppingCart, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Scene3D from "@/components/Scene3D";

interface Subject {
  id: number;
  name: string;
}

interface Class {
  id: number;
  classNum: number;
  subjects: Subject[];
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  image: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  type: "study" | "quiz" | "video" | "products" | "generic";
}

// Study Material Data
const studyClasses: Class[] = [
  {
    id: 1,
    classNum: 6,
    subjects: [
      { id: 1, name: "Mathematics" },
      { id: 2, name: "Science" },
      { id: 3, name: "English" },
      { id: 4, name: "Social Studies" },
    ],
  },
  {
    id: 2,
    classNum: 7,
    subjects: [
      { id: 1, name: "Mathematics" },
      { id: 2, name: "Science" },
      { id: 3, name: "English" },
      { id: 4, name: "Social Studies" },
    ],
  },
  {
    id: 3,
    classNum: 8,
    subjects: [
      { id: 1, name: "Mathematics" },
      { id: 2, name: "Science" },
      { id: 3, name: "English" },
      { id: 4, name: "Social Studies" },
    ],
  },
  {
    id: 4,
    classNum: 9,
    subjects: [
      { id: 1, name: "Mathematics" },
      { id: 2, name: "Physics" },
      { id: 3, name: "Chemistry" },
      { id: 4, name: "Biology" },
      { id: 5, name: "English" },
    ],
  },
  {
    id: 5,
    classNum: 10,
    subjects: [
      { id: 1, name: "Mathematics" },
      { id: 2, name: "Physics" },
      { id: 3, name: "Chemistry" },
      { id: 4, name: "Biology" },
      { id: 5, name: "English" },
    ],
  },
  {
    id: 6,
    classNum: 11,
    subjects: [
      { id: 1, name: "Mathematics" },
      { id: 2, name: "Physics" },
      { id: 3, name: "Chemistry" },
      { id: 4, name: "Biology" },
      { id: 5, name: "English" },
    ],
  },
  {
    id: 7,
    classNum: 12,
    subjects: [
      { id: 1, name: "Mathematics" },
      { id: 2, name: "Physics" },
      { id: 3, name: "Chemistry" },
      { id: 4, name: "Biology" },
      { id: 5, name: "English" },
    ],
  },
];

// Quiz Questions for Win & Earn
const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: 1,
    image: "bg-gradient-to-br from-yellow-400 to-yellow-500",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    image: "bg-gradient-to-br from-yellow-500 to-yellow-600",
  },
  {
    id: 3,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2,
    image: "bg-gradient-to-br from-yellow-600 to-yellow-700",
  },
  {
    id: 4,
    question: "Who wrote Romeo and Juliet?",
    options: ["Milton", "Shakespeare", "Marlowe", "Jonson"],
    correctAnswer: 1,
    image: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    id: 5,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correctAnswer: 2,
    image: "bg-gradient-to-br from-yellow-500 to-orange-600",
  },
];

// News Videos
const newsCategories = [
  { id: 1, name: "Sports", icon: "🏆", color: "from-red-400 to-red-500" },
  { id: 2, name: "Science & Fiction", icon: "🔬", color: "from-blue-400 to-blue-500" },
  { id: 3, name: "Social", icon: "👥", color: "from-green-400 to-green-500" },
  { id: 4, name: "Economics", icon: "💰", color: "from-yellow-400 to-yellow-500" },
  { id: 5, name: "Astronomy", icon: "🌌", color: "from-purple-400 to-purple-500" },
  { id: 6, name: "Local News", icon: "🏙️", color: "from-gray-400 to-gray-500" },
];

// Products for Buy Products Section
const products: Product[] = [
  {
    id: 1,
    name: "Advanced Mathematics Guide",
    price: 299,
    description: "Comprehensive guide covering algebra, geometry, and calculus with solved examples",
    image: "bg-gradient-to-br from-cyan-400 to-cyan-500",
  },
  {
    id: 2,
    name: "Physics Reference Book",
    price: 349,
    description: "Complete physics concepts with diagrams, formulas, and practice problems",
    image: "bg-gradient-to-br from-cyan-500 to-cyan-600",
  },
  {
    id: 3,
    name: "Chemistry Handbook",
    price: 279,
    description: "Essential chemistry formulas, reactions, and laboratory procedures",
    image: "bg-gradient-to-br from-cyan-600 to-cyan-700",
  },
  {
    id: 4,
    name: "English Grammar Mastery",
    price: 199,
    description: "Master English grammar with exercises and real-world examples",
    image: "bg-gradient-to-br from-cyan-400 to-blue-500",
  },
  {
    id: 5,
    name: "Biology Textbook",
    price: 329,
    description: "Detailed biology concepts with illustrations and case studies",
    image: "bg-gradient-to-br from-cyan-500 to-blue-600",
  },
  {
    id: 6,
    name: "History and Civics",
    price: 249,
    description: "Complete history from ancient to modern times with important dates",
    image: "bg-gradient-to-br from-cyan-600 to-blue-700",
  },
];

const sections: Section[] = [
  {
    id: "study",
    title: "Study Material",
    description: "Classes 6-12 with subjects and text/video options",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-blue-400 to-blue-600",
    type: "study",
  },
  {
    id: "winandear",
    title: "Win & Earn",
    description: "Answer questions and earn gold coins",
    icon: <Trophy className="w-8 h-8" />,
    color: "from-yellow-400 to-yellow-600",
    type: "quiz",
  },
  {
    id: "movies",
    title: "Movie Summary",
    description: "Video clips with voice over facility",
    icon: <Film className="w-8 h-8" />,
    color: "from-purple-400 to-purple-600",
    type: "video",
  },
  {
    id: "news",
    title: "News",
    description: "Videos on various news categories",
    icon: <Newspaper className="w-8 h-8" />,
    color: "from-red-400 to-red-600",
    type: "video",
  },
  {
    id: "business",
    title: "Business Ideas",
    description: "Text and video content on business",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "from-green-400 to-green-600",
    type: "generic",
  },
  {
    id: "beauty",
    title: "Beauty & Fitness",
    description: "Text and video content on wellness",
    icon: <Heart className="w-8 h-8" />,
    color: "from-pink-400 to-pink-600",
    type: "generic",
  },
  {
    id: "products",
    title: "Buy Products",
    description: "Educational books and materials",
    icon: <ShoppingBag className="w-8 h-8" />,
    color: "from-cyan-400 to-cyan-600",
    type: "products",
  },
  {
    id: "classes",
    title: "Paid Classes",
    description: "Enroll in premium courses",
    icon: <Play className="w-8 h-8" />,
    color: "from-indigo-400 to-indigo-600",
    type: "generic",
  },
];

type ViewState = "grid" | "section";

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewState>("grid");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<"text" | "video" | null>(null);
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [coins, setCoins] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const currentSection = sections.find((s) => s.id === selectedSection);

  const handleSelectSection = (sectionId: string) => {
    setSelectedSection(sectionId);
    setCurrentView("section");
    setSelectedFormat(null);
    setSelectedClass(null);
    setQuizIndex(0);
    setWrongAnswers(0);
    setQuizStarted(false);
  };

  const handleBackToGrid = () => {
    setCurrentView("grid");
    setSelectedSection(null);
    setSelectedFormat(null);
    setSelectedClass(null);
    setQuizIndex(0);
    setWrongAnswers(0);
    setQuizStarted(false);
  };

  const handleQuizAnswer = (selectedOption: number) => {
    const isCorrect = selectedOption === quizQuestions[quizIndex].correctAnswer;
    if (isCorrect) {
      setCoins(coins + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    if (wrongAnswers + 1 >= 10) {
      setQuizStarted(false);
      setQuizIndex(0);
      setWrongAnswers(0);
    } else if (quizIndex + 1 < quizQuestions.length) {
      setQuizIndex(quizIndex + 1);
    } else {
      setQuizStarted(false);
      setQuizIndex(0);
      setWrongAnswers(0);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {currentView === "grid" ? (
        // Grid View
        <>
          <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden pt-24">
            {/* 3D and Glass Background Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute inset-0 opacity-40">
                <Scene3D />
              </div>
              <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-primary/10 to-secondary/5 blur-[120px]" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-accent/10 to-transparent blur-[100px]" />
              
              {/* Still Glass Orb (Subtle) */}
              <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full glass border border-white/20 opacity-20 pointer-events-none" />
            </div>

            <div className="section-container relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground">
                    Master Your Future with <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Swara24</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                    The ultimate ecosystem for students. Classes 6-12, gamified quizzes, movie summaries, and premium educational products.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary px-8 py-4 text-lg rounded-2xl shadow-lg shadow-primary/25"
                  >
                    Start Learning Now
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 text-lg rounded-2xl border-2 border-primary/20 hover:bg-primary/5 transition-colors text-primary font-semibold"
                  >
                    Watch Demo
                  </motion.button>
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-accent" />
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-bold">Joined by 10k+ students</div>
                    <div className="flex text-yellow-500">{"★".repeat(5)}</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden md:block relative"
              >
                {/* Visual accent */}
                <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-white relative z-10">
            <div className="section-container">
              <div className="text-center mb-16 space-y-4">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-primary"
                >
                  Explore Your Learning Path
                </motion.h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Choose from our wide range of categories designed to make learning fun and effective.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {sections.map((section, idx) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ 
                      y: -10, 
                      rotateX: 10,
                      rotateY: -5,
                      scale: 1.02,
                      transition: { duration: 0.2 } 
                    }}
                    onClick={() => handleSelectSection(section.id)}
                    className="group relative perspective-1000 rounded-3xl overflow-hidden glass glass-hover text-left"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className={`w-full h-40 bg-gradient-to-br ${section.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                      <motion.div 
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.3, rotate: 15, z: 50 }}
                        className="absolute inset-0 flex items-center justify-center text-white/10"
                      >
                        {/* Enlarged icon background */}
                        <div className="scale-[5] opacity-10">
                          {section.icon}
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="p-8 space-y-4 relative">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          whileHover={{ 
                            rotateY: 180,
                            scale: 1.1,
                            z: 20
                          }}
                          transition={{ duration: 0.6, type: "spring" }}
                          className={`p-3 rounded-2xl bg-gradient-to-br ${section.color} text-white shadow-xl`}
                        >
                          {section.icon}
                        </motion.div>
                        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-gray-600/80 group-hover:text-gray-900 transition-colors leading-relaxed">
                        {section.description}
                      </p>
                      
                      <div className="pt-4 flex items-center text-primary font-bold gap-2 group-hover:translate-x-2 transition-transform">
                        <span>Explore</span>
                        <motion.span
                          animate={{ x: [0, 8, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        >→</motion.span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </>
      ) : currentSection?.id === "study" ? (
        // Study Material Section
        <>
          <section className={`bg-gradient-to-br ${currentSection.color} text-white py-12 pt-24 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48"></div>

            <div className="section-container relative z-10">
              <button
                onClick={handleBackToGrid}
                className="flex items-center gap-2 mb-6 text-white hover:text-white/80 transition-colors font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to All Categories
              </button>
              <h1 className="text-4xl md:text-5xl font-bold">{currentSection.title}</h1>
            </div>
          </section>

          {!selectedFormat && !selectedClass ? (
            // Class Selection
            <section className="py-16 md:py-24 bg-white">
              <div className="section-container space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
                  Select Your Class
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {studyClasses.map((cls) => (
                    <button
                      key={cls.id}
                      onClick={() => setSelectedClass(cls.classNum)}
                      className="p-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-blue-50 transition-all font-bold text-lg text-primary"
                    >
                      Class {cls.classNum}
                    </button>
                  ))}
                </div>
              </div>
            </section>
          ) : selectedClass && !selectedFormat ? (
            // Format Selection for Class
            <section className="py-16 md:py-24 bg-white">
              <div className="section-container space-y-8">
                <button
                  onClick={() => setSelectedClass(null)}
                  className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold mb-4"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Classes
                </button>

                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
                  Class {selectedClass} - Choose Format
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <button
                    onClick={() => setSelectedFormat("text")}
                    className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border-2 border-gray-200 hover:border-blue-600"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-48 flex items-center justify-center">
                      <FileText className="w-20 h-20 text-white" />
                    </div>
                    <div className="p-8 space-y-4">
                      <h3 className="text-2xl font-bold text-primary">Text Content</h3>
                      <p className="text-gray-600">Read comprehensive notes and study materials</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedFormat("video")}
                    className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border-2 border-gray-200 hover:border-blue-600"
                  >
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 h-48 flex items-center justify-center">
                      <Video className="w-20 h-20 text-white" />
                    </div>
                    <div className="p-8 space-y-4">
                      <h3 className="text-2xl font-bold text-primary">Video Content</h3>
                      <p className="text-gray-600">Watch video lectures from experts</p>
                    </div>
                  </button>
                </div>
              </div>
            </section>
          ) : selectedClass && selectedFormat ? (
            // Subjects List
            <section className="py-16 md:py-24 bg-white">
              <div className="section-container">
                <button
                  onClick={() => setSelectedFormat(null)}
                  className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold mb-8"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Format Selection
                </button>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                  Class {selectedClass} - {selectedFormat === "text" ? "Text" : "Video"} Content
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studyClasses.find((c) => c.classNum === selectedClass)?.subjects.map((subject) => (
                    <div
                      key={subject.id}
                      className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border border-gray-100"
                    >
                      <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-48"></div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-primary">{subject.name}</h3>
                        <button className="mt-4 inline-flex items-center gap-2 text-accent font-semibold">
                          {selectedFormat === "text" ? "Start Reading" : "Watch Now"} <span>→</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          <Footer />
        </>
      ) : currentSection?.id === "winandear" ? (
        // Win & Earn Quiz Section
        <>
          <section className={`bg-gradient-to-br ${currentSection.color} text-white py-12 pt-24 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48"></div>

            <div className="section-container relative z-10">
              <button
                onClick={handleBackToGrid}
                className="flex items-center gap-2 mb-6 text-white hover:text-white/80 transition-colors font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <div className="flex items-center justify-between">
                <h1 className="text-4xl md:text-5xl font-bold">Win & Earn</h1>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg">
                  <Coins className="w-6 h-6" />
                  <span className="font-bold text-2xl">{coins}</span>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-white">
            <div className="section-container max-w-2xl mx-auto">
              {!quizStarted ? (
                <div className="text-center space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">Answer Questions & Earn Coins</h2>
                  <p className="text-lg text-gray-600">
                    Get 1 gold coin for each correct answer. After 10 wrong answers, play again!
                  </p>
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-12 text-white">
                    <div className="text-6xl font-bold mb-2">{coins}</div>
                    <div className="text-2xl">Coins Earned</div>
                  </div>
                  <button
                    onClick={() => setQuizStarted(true)}
                    className="btn-primary"
                  >
                    Start Quiz
                  </button>
                </div>
              ) : wrongAnswers >= 10 ? (
                <div className="text-center space-y-8">
                  <h2 className="text-3xl font-bold text-primary">Quiz Complete!</h2>
                  <p className="text-lg text-gray-600">You've reached 10 wrong answers. Play again to earn more coins!</p>
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-12 text-white">
                    <div className="text-6xl font-bold mb-2">{coins}</div>
                    <div className="text-2xl">Total Coins</div>
                  </div>
                  <button
                    onClick={() => {
                      setQuizStarted(true);
                      setQuizIndex(0);
                      setWrongAnswers(0);
                    }}
                    className="btn-primary"
                  >
                    Play Again
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-gray-600">Question {quizIndex + 1} of {quizQuestions.length}</span>
                    <span className="text-sm font-semibold text-red-600">Wrong: {wrongAnswers}/10</span>
                  </div>

                  <div className={`rounded-3xl h-32 ${quizQuestions[quizIndex].image}`}></div>

                  <h3 className="text-2xl font-bold text-primary text-center">
                    {quizQuestions[quizIndex].question}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quizQuestions[quizIndex].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuizAnswer(idx)}
                        className="p-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all font-semibold"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          <Footer />
        </>
      ) : currentSection?.id === "movies" ? (
        // Movie Summary Section
        <>
          <section className={`bg-gradient-to-br ${currentSection.color} text-white py-12 pt-24 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48"></div>

            <div className="section-container relative z-10">
              <button
                onClick={handleBackToGrid}
                className="flex items-center gap-2 mb-6 text-white hover:text-white/80 transition-colors font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <h1 className="text-4xl md:text-5xl font-bold">{currentSection.title}</h1>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-white">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border border-gray-100"
                  >
                    <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-48 flex items-center justify-center relative">
                      <Video className="w-16 h-16 text-white opacity-30" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary">Movie Summary {item}</h3>
                      <div className="mt-4 flex items-center gap-2 text-gray-600">
                        <Volume2 className="w-4 h-4" />
                        <span className="text-sm">Voice Over Available</span>
                      </div>
                      <button className="mt-4 inline-flex items-center gap-2 text-accent font-semibold">
                        Watch Now <span>→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </>
      ) : currentSection?.id === "news" ? (
        // News Section
        <>
          <section className={`bg-gradient-to-br ${currentSection.color} text-white py-12 pt-24 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48"></div>

            <div className="section-container relative z-10">
              <button
                onClick={handleBackToGrid}
                className="flex items-center gap-2 mb-6 text-white hover:text-white/80 transition-colors font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <h1 className="text-4xl md:text-5xl font-bold">{currentSection.title}</h1>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-white">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border border-gray-100 text-left"
                  >
                    <div className={`bg-gradient-to-br ${category.color} h-48 flex items-center justify-center text-6xl`}>
                      {category.icon}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary">{category.name}</h3>
                      <button className="mt-4 inline-flex items-center gap-2 text-accent font-semibold">
                        View Videos <span>→</span>
                      </button>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </>
      ) : currentSection?.id === "products" ? (
        // Buy Products Section
        <>
          <section className={`bg-gradient-to-br ${currentSection.color} text-white py-12 pt-24 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48"></div>

            <div className="section-container relative z-10">
              <button
                onClick={handleBackToGrid}
                className="flex items-center gap-2 mb-6 text-white hover:text-white/80 transition-colors font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <h1 className="text-4xl md:text-5xl font-bold">{currentSection.title}</h1>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-white">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
                  >
                    <div className={`${product.image} h-48`}></div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-lg font-bold text-primary">{product.name}</h3>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="text-2xl font-bold text-accent">₹{product.price}</div>
                        <button className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors font-semibold">
                          <ShoppingCart className="w-4 h-4" />
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </>
      ) : (
        // Generic Section (Business Ideas, Beauty & Fitness, Paid Classes)
        <>
          <section className={`bg-gradient-to-br ${currentSection?.color} text-white py-12 pt-24 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48"></div>

            <div className="section-container relative z-10">
              <button
                onClick={handleBackToGrid}
                className="flex items-center gap-2 mb-6 text-white hover:text-white/80 transition-colors font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <h1 className="text-4xl md:text-5xl font-bold">{currentSection?.title}</h1>
            </div>
          </section>

          {currentSection?.id !== "classes" && (
            <section className="py-16 md:py-24 bg-white">
              <div className="section-container">
                <div className="max-w-4xl mx-auto space-y-8 mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
                    Choose Your Format
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <button
                      onClick={() => setSelectedFormat("text")}
                      className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border-2 border-gray-200 hover:border-primary"
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-48 flex items-center justify-center">
                        <FileText className="w-20 h-20 text-white" />
                      </div>
                      <div className="p-8 space-y-4">
                        <h3 className="text-2xl font-bold text-primary">Text Content</h3>
                        <p className="text-gray-600">Read articles and guides</p>
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedFormat("video")}
                      className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border-2 border-gray-200 hover:border-primary"
                    >
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 h-48 flex items-center justify-center">
                        <Video className="w-20 h-20 text-white" />
                      </div>
                      <div className="p-8 space-y-4">
                        <h3 className="text-2xl font-bold text-primary">Video Content</h3>
                        <p className="text-gray-600">Watch video tutorials</p>
                      </div>
                    </button>
                  </div>
                </div>

                {selectedFormat && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div
                        key={item}
                        className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border border-gray-100"
                      >
                        <div className={`bg-gradient-to-br ${currentSection?.color} h-48`}></div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-primary">{currentSection?.title} #{item}</h3>
                          <button className="mt-4 inline-flex items-center gap-2 text-accent font-semibold">
                            {selectedFormat === "text" ? "Start Reading" : "Watch Now"} <span>→</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          <Footer />
        </>
      )}
    </div>
  );
}
