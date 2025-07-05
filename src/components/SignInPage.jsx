import React from "react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 sm:p-10 animate-fade-in-up transition-all duration-700">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Welcome Back 👋
        </h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>

          {/* Forgot password */}
          <div className="text-sm text-right">
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Forgot password?
            </a>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignInPage;
