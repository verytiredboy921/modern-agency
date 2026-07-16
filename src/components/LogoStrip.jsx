import { motion } from "framer-motion";

const logos = [
  "Google",
  "Stripe",
  "Notion",
  "Framer",
  "Spotify",
  "Airbnb",
  "Slack",
  "OpenAI",
];

function LogoStrip() {
  return (
    <section className="bg-black py-16 overflow-hidden border-y border-white/10">

      <p className="text-center text-gray-500 uppercase tracking-[0.3em] text-sm mb-10">
        Trusted by innovative companies
      </p>

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-12 text-3xl font-bold text-gray-600 hover:text-white transition"
          >
            {logo}
          </div>
        ))}
      </motion.div>

    </section>
  );
}

export default LogoStrip;