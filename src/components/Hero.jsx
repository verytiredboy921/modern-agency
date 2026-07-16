import DashboardMockup from "./DashboardMockup";
import siteData from "../data/siteData";
import { motion } from "framer-motion";
import Button from "./Button";
import Aurora from "./Aurora";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white flex items-center pt-28 lg:pt-20"
    >
      {/* Background */}
      <Aurora />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          {/* Badge */}

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

            <span className="text-sm sm:text-base font-medium text-blue-300">
              {siteData.hero.badge}
            </span>
          </div>

          {/* Heading */}

          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl xl:text-[88px]">
            Build{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Beautiful Websites
            </span>
            <br />
            That Actually Convert
          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg lg:mx-0 lg:text-xl lg:leading-8">
            {siteData.hero.description}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#contact">
              <Button>{siteData.hero.primaryBtn}</Button>
            </a>

            <a href="#services">
              <Button variant="secondary">{siteData.hero.secondaryBtn}</Button>
            </a>
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {siteData.hero.stats.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <h2 className="text-3xl font-black sm:text-4xl">
                  {item.number}
                </h2>

                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}

        <div className="flex justify-center">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

export default Hero;
