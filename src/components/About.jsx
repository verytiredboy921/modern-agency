import { motion } from "framer-motion";
import siteData from "../data/siteData";
import Button from "./Button";

function About() {
  return (
    <section
      id="about"
      className="bg-[#050505] py-20 sm:py-24 lg:py-32 text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >

          <p className="font-semibold tracking-widest text-blue-400">
            ABOUT US
          </p>

          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            {siteData.about.title}
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg lg:leading-8">
            {siteData.about.description}
          </p>

          <div className="mt-10 flex justify-center lg:justify-start">
            <Button>
              View Services 
            </Button>
          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:gap-6"
        >

          {siteData.about.stats.map((item) => (

            <motion.div
              key={item.label}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl sm:p-8"
            >

              <h3 className="text-3xl font-black text-blue-400 sm:text-4xl lg:text-5xl">
                {item.number}
              </h3>

              <p className="mt-3 text-sm text-gray-400 sm:mt-4 sm:text-base">
                {item.label}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default About;