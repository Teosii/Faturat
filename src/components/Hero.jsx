import React from "react";
import "./animate.css";

const PaymentHeroSection = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 xl:gap-24 items-center">
          {/* Text Content */}
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="block text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl xl:text-7xl lg:leading-tight dark:text-white">
              Optimize Your Business{" "}
              <span className="gradient-text">Payments</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-neutral-300 leading-relaxed">
              Our intelligent payment processing platform streamlines
              transactions between businesses and customers with unmatched speed
              and security.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="py-4 px-8 inline-flex justify-center items-center gap-x-3 text-base font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 glow"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="py-4 px-8 inline-flex justify-center items-center gap-x-3 text-base font-semibold rounded-lg border border-gray-200 text-gray-800 hover:border-blue-500 hover:text-blue-600 dark:text-white dark:border-gray-700 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="User 1"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User 2"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="User 3"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Trusted by{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  10,000+
                </span>{" "}
                businesses
              </p>
            </div>
          </div>

          {/* Animated Card Section */}
          <div className="animate__animated animate__fadeInRight floating">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              <div className="absolute top-0 right-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Payment Dashboard
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600 dark:text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Payment Received
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          From Acme Inc
                        </p>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                      +$2,450
                    </span>
                  </div>

                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Processed", value: "1,245" },
                      { label: "Pending", value: "87" },
                      { label: "Failed", value: "3" },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center"
                      >
                        <p className="text-xs text-gray-500 dark:text-gray-300">
                          {label}
                        </p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHeroSection;
