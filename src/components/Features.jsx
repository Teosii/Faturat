import React, { useState, useEffect, useRef } from "react";

// Custom hook for intersection observer
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView];
};

// Icon components
const AnalyticsIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 3v18h18" />
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="8" cy="16" r="1" />
    <circle cx="16" cy="8" r="1" />
  </svg>
);

const UsersIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ShieldIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const GlobeIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const PlugIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M4.93 4.93l2.83 2.83" />
    <path d="M16.24 16.24l2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.93 19.07l2.83-2.83" />
    <path d="M16.24 7.76l2.83-2.83" />
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
);

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, link, index }) => {
  const [cardRef, isInView] = useInView(0.2);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } hover:-translate-y-2 border border-gray-100 hover:border-blue-200`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
          isHovered ? "scale-110 shadow-lg from-blue-100 to-indigo-200" : ""
        }`}
      >
        <Icon className="w-8 h-8 text-blue-600" />
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      <button
        className="text-blue-600 font-semibold inline-flex items-center text-sm hover:text-blue-700 transition-colors duration-200 group/link"
        aria-label={`Learn more about ${title}`}
      >
        {link}
        <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
      </button>
    </div>
  );
};

// Main Feature Component
const MainFeature = ({
  icon,
  badge,
  title,
  description,
  features,
  link,
  imagePosition = "left",
  index,
}) => {
  const [featureRef, isInView] = useInView(0.3);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const isReversed = imagePosition === "right";

  return (
    <div
      ref={featureRef}
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-between mb-32 gap-12`}
    >
      {/* Icon/Image Section */}
      <div className="lg:w-1/2 relative">
        <div
          className={`relative transition-all duration-700 ${
            isInView ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {/* Floating background elements */}
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

          {/* Main icon container */}
          <div className="relative bg-gradient-to-br from-white to-blue-50 p-12 rounded-3xl shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="w-full h-64 flex items-center justify-center">
              {icon}
            </div>

            {/* Floating dots */}
            <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-700"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`lg:w-1/2 ${isReversed ? "lg:pr-12" : "lg:pl-12"}`}>
        <div
          className={`transition-all duration-700 delay-300 ${
            isInView
              ? "translate-x-0 opacity-100"
              : `${isReversed ? "translate-x-8" : "-translate-x-8"} opacity-0`
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 mb-6 text-sm font-semibold shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
            {badge}
          </div>

          <h3 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            {title}
          </h3>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>

          <div className="space-y-4 mb-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-center transition-all duration-300 hover:translate-x-2 cursor-pointer p-2 rounded-lg ${
                  hoveredFeature === idx ? "bg-blue-50" : ""
                }`}
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-4 transition-all duration-300 ${
                    hoveredFeature === idx ? "scale-110 shadow-lg" : ""
                  }`}
                >
                  <CheckIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <span
                  className={`text-gray-700 font-medium transition-colors duration-300 ${
                    hoveredFeature === idx ? "text-blue-700" : ""
                  }`}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <button className="group inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-700 transition-all duration-300">
            {link}
            <div className="ml-3 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const AnimatedFeatures = () => {
  const [headerRef, headerInView] = useInView(0.3);

  // Enhanced animated SVG graphics
  const analyticsGraphic = (
    <div className="relative">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient
            id="chartGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Animated chart bars */}
        <rect
          x="40"
          y="120"
          width="20"
          height="40"
          fill="url(#chartGradient)"
          rx="4"
        >
          <animate
            attributeName="height"
            values="20;40;35;40"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="140;120;125;120"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="80"
          y="100"
          width="20"
          height="60"
          fill="url(#chartGradient)"
          rx="4"
        >
          <animate
            attributeName="height"
            values="40;60;50;60"
            dur="3s"
            repeatCount="indefinite"
            begin="0.5s"
          />
          <animate
            attributeName="y"
            values="120;100;110;100"
            dur="3s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </rect>
        <rect
          x="120"
          y="80"
          width="20"
          height="80"
          fill="url(#chartGradient)"
          rx="4"
        >
          <animate
            attributeName="height"
            values="60;80;70;80"
            dur="3s"
            repeatCount="indefinite"
            begin="1s"
          />
          <animate
            attributeName="y"
            values="100;80;90;80"
            dur="3s"
            repeatCount="indefinite"
            begin="1s"
          />
        </rect>

        {/* Animated trend line */}
        <path
          d="M50 130 L90 110 L130 90"
          stroke="#3b82f6"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="5"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;10;0"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>

        {/* Floating data points */}
        <circle cx="50" cy="130" r="4" fill="#3b82f6">
          <animate
            attributeName="r"
            values="3;5;3"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="90" cy="110" r="4" fill="#6366f1">
          <animate
            attributeName="r"
            values="3;5;3"
            dur="2s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </circle>
        <circle cx="130" cy="90" r="4" fill="#8b5cf6">
          <animate
            attributeName="r"
            values="3;5;3"
            dur="2s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>
      </svg>
    </div>
  );

  const customerGraphic = (
    <div className="relative">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="userGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>

        {/* Central user icon */}
        <circle cx="100" cy="80" r="25" fill="url(#userGradient)">
          <animate
            attributeName="r"
            values="23;27;23"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="100" cy="70" r="12" fill="white" />
        <path
          d="M85 95 Q100 110 115 95"
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Orbiting connection points */}
        <g transform="translate(100,100)">
          <circle cx="0" cy="-50" r="6" fill="#3b82f6" opacity="0.7">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0;360"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="35" cy="-35" r="4" fill="#6366f1" opacity="0.7">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0;360"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="50" cy="0" r="5" fill="#8b5cf6" opacity="0.7">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0;360"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="35" cy="35" r="4" fill="#3b82f6" opacity="0.7">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0;360"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="-35" cy="35" r="5" fill="#6366f1" opacity="0.7">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0;360"
              dur="9s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="-50" cy="0" r="4" fill="#8b5cf6" opacity="0.7">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0;360"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );

  const additionalFeatures = [
    {
      icon: ShieldIcon,
      title: "Secure Transactions",
      description:
        "Bank-level encryption and AI-powered fraud detection to protect every transaction with real-time monitoring.",
      link: "Explore security features",
    },
    {
      icon: GlobeIcon,
      title: "Global Payments",
      description:
        "Accept payments from 180+ countries with multi-currency support and local payment methods.",
      link: "See supported regions",
    },
    {
      icon: PlugIcon,
      title: "Easy Integration",
      description:
        "Developer-friendly APIs, webhooks, and plugins for all major e-commerce platforms and frameworks.",
      link: "View documentation",
    },
  ];

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto font-sans bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header Section */}
      <div
        ref={headerRef}
        className={`text-center mb-20 transition-all duration-1000 ${
          headerInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 text-blue-700 mb-6 text-sm font-semibold">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
          PAYMENT SOLUTIONS
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Powerful Payment{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Features
          </span>
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Streamline your transactions with our comprehensive payment solutions
          designed for modern businesses
        </p>
      </div>

      {/* Main Features */}
      <MainFeature
        icon={analyticsGraphic}
        badge="REAL-TIME ANALYTICS"
        title={
          <>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Monitor
            </span>{" "}
            payments effortlessly
          </>
        }
        description="Get instant visibility into your payment activities with our intuitive dashboard and advanced analytics tools."
        features={[
          "Real-time transaction monitoring",
          "Custom alerts and notifications",
          "Comprehensive reporting suite",
        ]}
        link="Explore analytics"
        imagePosition="left"
        index={0}
      />

      <MainFeature
        icon={customerGraphic}
        badge="CUSTOMER MANAGEMENT"
        title={
          <>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Manage
            </span>{" "}
            customer relationships
          </>
        }
        description="Build stronger relationships with your customers through our integrated CRM and customer management tools."
        features={[
          "Detailed customer profiles",
          "Automated subscription management",
          "Smart invoicing system",
        ]}
        link="View customer tools"
        imagePosition="right"
        index={1}
      />

      {/* Additional Features Grid */}
      <div className="mt-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              succeed
            </span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and features designed to scale with your
            business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to transform your payments?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust our platform for their
            payment processing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedFeatures;
