import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
          Create Your Account
        </h1>

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
              placeholder="name@company.com"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="••••••••"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start">
            <input
              id="terms"
              type="checkbox"
              required
              className="mt-1 mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              I accept the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition duration-150 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Sign Up
          </button>

          {/* Redirect */}
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
