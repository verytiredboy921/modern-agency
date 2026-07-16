import { motion } from "framer-motion";
import Button from "./Button";

const plans = [
  {
    title: "Starter",
    price: "₹9,999",
    features: [
      "Responsive Website",
      "Modern UI",
      "SEO Friendly",
      "1 Month Support",
    ],
    popular: false,
  },
  {
    title: "Professional",
    price: "₹19,999",
    features: [
      "Everything in Starter",
      "Premium Components",
      "Priority Support",
      "Source Code",
    ],
    popular: true,
  },
  {
    title: "Enterprise",
    price: "₹39,999",
    features: [
      "Unlimited Pages",
      "Custom Design",
      "Premium Support",
      "Lifetime Updates",
    ],
    popular: false,
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#050505] py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold tracking-widest text-blue-400">
            PRICING
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
            Choose Your Plan
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Flexible pricing designed for startups, agencies and growing businesses.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`relative rounded-3xl border p-6 backdrop-blur-xl transition-all sm:p-8 ${
                plan.popular
                  ? "border-blue-500 bg-blue-600/10"
                  : "border-white/10 bg-white/5"
              }`}
            >

              {plan.popular && (

                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-5 py-2 text-xs font-bold tracking-wider">
                  MOST POPULAR
                </div>

              )}

              <h3 className="text-2xl font-bold sm:text-3xl">
                {plan.title}
              </h3>

              <h2 className="mt-6 text-5xl font-black sm:text-6xl">
                {plan.price}
              </h2>

              <div className="mt-8 space-y-4">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <span className="text-green-400">
                      ✓
                    </span>

                    <span className="text-sm text-gray-300 sm:text-base">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

              <div className="mt-10">

                <Button className="w-full">
                  Get Started
                </Button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;