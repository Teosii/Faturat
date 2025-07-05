import React, { useState } from "react";
import "./animate.css"; // Animation + hover effect styles
import "font-awesome/css/font-awesome.min.css";

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      label: "Basic",
      price: 10,
      billingNote: "Billed annually at $108",
      features: [
        "50 Page Unlock",
        "10 GB Storage",
        "6 Team Members",
        "Basic Support",
      ],
      button: {
        text: "Get Started",
        style: "border border-blue-600 text-blue-600 hover:bg-blue-50",
      },
    },
    {
      name: "Professional",
      label: "Best Value",
      price: 20,
      billingNote: "Billed annually at $192",
      popular: true,
      features: [
        "100 Page Unlock",
        "20 GB Storage",
        "8 Team Members",
        "Priority Support",
        "Advanced Analytics",
      ],
      button: {
        text: "Get Professional",
        style: "bg-blue-600 text-white hover:bg-blue-700",
      },
    },
    {
      name: "Enterprise",
      label: "Premium",
      price: 100,
      billingNote: "Billed annually at $960",
      features: [
        "300 Page Unlock",
        "100 GB Storage",
        "100 Team Members",
        "24/7 Dedicated Support",
        "Advanced Security",
        "Custom Solutions",
      ],
      button: {
        text: "Contact Sales",
        style: "border border-purple-600 text-purple-600 hover:bg-purple-50",
      },
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, cancel
            anytime.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full font-medium focus:outline-none ${
                  billingCycle === "monthly"
                    ? "text-white bg-blue-600"
                    : "text-gray-600"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full font-medium focus:outline-none ${
                  billingCycle === "yearly"
                    ? "text-white bg-blue-600"
                    : "text-gray-600"
                }`}
              >
                Yearly{" "}
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-1">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                plan.popular ? "border-2 border-blue-500 shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-xs font-bold rounded-bl-lg popular-badge">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {plan.name === "Starter"
                        ? "Perfect for individuals getting started"
                        : plan.name === "Professional"
                        ? "For growing teams and businesses"
                        : "For large organizations"}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      plan.name === "Enterprise"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {plan.label}
                  </span>
                </div>

                <div className="mt-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-500 ml-2 mb-1">/month</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    {plan.billingNote}
                  </p>
                </div>

                <button
                  className={`w-full mt-6 px-6 py-3 font-medium rounded-lg transition-colors duration-300 ${plan.button.style}`}
                >
                  {plan.button.text}
                </button>
              </div>

              <div className="border-t border-gray-200 px-8 py-6 bg-gray-50">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  What's included
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="feature-item flex items-center">
                      <i className="feature-icon fas fa-check-circle text-green-500 mr-3"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Not sure which plan is right for you?
          </h3>
          <p className="text-gray-600 mb-6">
            We can help you choose the perfect plan based on your needs.
          </p>
          <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 inline-flex items-center">
            <i className="fas fa-headset mr-2"></i> Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
