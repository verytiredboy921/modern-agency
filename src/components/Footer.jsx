import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Button from "./Button";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        {/* Top */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-black">
              Ak Studio
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Building premium digital experiences for modern businesses around
              the world.
            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Company
            </h3>

            <div className="space-y-4 text-gray-400">

              <a href="#about" className="block hover:text-white transition">
                About
              </a>

              <a href="#services" className="block hover:text-white transition">
                Services
              </a>

              <a
                href="#testimonials"
                className="block hover:text-white transition"
              >
                Testimonials
              </a>

              <a href="#pricing" className="block hover:text-white transition">
                Pricing
              </a>

            </div>

          </div>

          {/* Support */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Support
            </h3>

            <div className="space-y-4 text-gray-400">

              <a href="#faq" className="block hover:text-white transition">
                FAQ
              </a>

              <a href="#" className="block hover:text-white transition">
                Privacy
              </a>

              <a href="#" className="block hover:text-white transition">
                Terms
              </a>

              <a href="#contact" className="block hover:text-white transition">
                Contact
              </a>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Newsletter
            </h3>

            <p className="text-gray-400">
              Get the latest updates delivered straight to your inbox.
            </p>

            <input
              type="email"
              placeholder="Email Address"
              className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <Button className="mt-4 w-full">
              Subscribe
            </Button>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row">

          <p className="text-center text-sm text-gray-500 lg:text-left">
            © 2026 Ak Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-2xl">

            <a href="#" className="transition hover:text-blue-400">
              <FaGithub />
            </a>

            <a href="#" className="transition hover:text-blue-400">
              <FaLinkedin />
            </a>

            <a href="#" className="transition hover:text-pink-400">
              <FaInstagram />
            </a>

            <a href="#" className="transition hover:text-sky-400">
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;