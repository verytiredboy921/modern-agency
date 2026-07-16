import siteData from "../data/siteData";
import {
  Code2,
  Palette,
  Search,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const icons = {
  code: Code2,
  design: Palette,
  seo: Search,
};

function Services() {
  return (
    <section
      id="services"
      className="bg-black py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >

          <p className="font-semibold tracking-widest text-blue-400">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
            What We Do
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg lg:mx-0 lg:leading-8">
            We help businesses create premium digital products that
            attract customers and increase revenue.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">

          {siteData.services.map((service, index) => {

            const Icon = icons[service.icon];

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all sm:p-8"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 sm:h-16 sm:w-16">

                  <Icon size={28} />

                </div>

                <h3 className="mt-6 text-xl font-bold sm:mt-8 sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
                  {service.description}
                </p>

                <button className="mt-6 flex items-center gap-2 text-blue-400 transition-all group-hover:gap-4 sm:mt-8">

                  Learn More

                  <ArrowRight size={18} />

                </button>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Services;