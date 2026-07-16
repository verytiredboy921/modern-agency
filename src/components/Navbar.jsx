import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import siteData from "../data/siteData";
import Button from "./Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl">

          {/* Logo */}

          <a
            href="#hero"
            className="text-2xl font-black tracking-wider text-white"
          >
            {siteData.logo}
          </a>

          {/* Desktop Nav */}

          <nav className="hidden lg:flex items-center gap-8">

            {siteData.navLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-300 transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>

            ))}

          </nav>

          {/* Desktop Button */}

          <div className="hidden lg:block">

            <Button>
              Get Started
            </Button>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}

        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.3 }}
              className="mt-3 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-6 lg:hidden"
            >

              <div className="flex flex-col gap-6">

                {siteData.navLinks.map((link) => (

                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg text-gray-300 hover:text-white transition"
                  >
                    {link.name}
                  </a>

                ))}

                <Button>
                  Get Started
                </Button>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </motion.header>
  );
}

export default Navbar;