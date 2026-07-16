import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a project usually take?",
    answer:
      "Most websites are completed within 2–4 weeks depending on the scope and requirements.",
  },
  {
    question: "Do you build fully responsive websites?",
    answer:
      "Yes. Every website is optimized for mobile, tablet and desktop devices.",
  },
  {
    question: "Can I request custom features?",
    answer:
      "Absolutely. Every project can be customized to match your business goals.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We provide post-launch support, bug fixes and guidance after your website goes live.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="bg-black py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold tracking-widest text-blue-400">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Everything you need to know before starting your project.
          </p>

        </div>

        {/* Accordion */}

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >

                  <span className="text-base font-semibold sm:text-lg">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                  >
                    <ChevronDown size={22} />
                  </motion.div>

                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >

                      <p className="px-6 pb-6 text-gray-400 leading-7">
                        {faq.answer}
                      </p>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default FAQ;