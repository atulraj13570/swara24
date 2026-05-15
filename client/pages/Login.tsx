import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { phone, password });
  };

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
  <Link to="/" className="inline-flex items-center gap-3 mb-6">
    <img
      src="/images/logo-icon.png"
      alt="Swara24 Logo"
      className="w-12 h-10 rounded-xl object-contain bg-white p-1 shadow-md"
    />

    <span className="text-2xl font-bold text-white">
      Swara24
    </span>
  </Link>

  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
    Welcome Back
  </h1>

  <p className="text-white/70">
    Sign in to your account to continue learning
  </p>
</div>
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl p-8 shadow-2xl">
          {/* Phone Number Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (234) 567-8900"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-2 border-gray-200 cursor-pointer" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-primary hover:text-secondary transition-colors font-medium">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn-primary"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-colors font-medium text-gray-700"
            >
              Google
            </button>
            <button
              type="button"
              className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-colors font-medium text-gray-700"
            >
              Facebook
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-white mt-6">
          Don't have an account?{" "}
          <a href="#" className="font-semibold text-accent hover:text-white transition-colors">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}
