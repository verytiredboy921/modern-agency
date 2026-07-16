import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Carter",
    role: "CEO, Nova Studio",
    review:
      "Working with this team completely transformed our online presence. The quality exceeded every expectation.",
  },
  {
    name: "Sophia Brown",
    role: "Founder, Pixel Labs",
    review:
      "Beautiful design, fast performance and excellent communication throughout the project.",
  },
  {
    name: "Emma Wilson",
    role: "Marketing Director",
    review:
      "Professional, modern and exactly what our business needed. Highly recommended.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-black py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold tracking-widest text-blue-400">
            TESTIMONIALS
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Trusted by businesses around the world.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">

          {testimonials.map((testimonial, index) => (

            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
            >

              <div className="mb-6 text-lg text-yellow-400 sm:text-xl">
                ★★★★★
              </div>

              <p className="text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
                "{testimonial.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold sm:h-14 sm:w-14 sm:text-xl">
                  {testimonial.name[0]}
                </div>

                <div>

                  <h4 className="font-bold">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;