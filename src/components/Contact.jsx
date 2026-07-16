import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_qqpgp8g",
        "template_ftkae46",
        form.current,
        "_3glmkPU6_N1RgG7e"
      )
      .then(() => {
        setSuccess("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        setSuccess("❌ Failed to send message.");
      })
      .finally(() => {
        setLoading(false);

        setTimeout(() => {
          setSuccess("");
        }, 4000);
      });
  };

  return (
    <section id="contact" className="bg-[#050505] text-white py-32">
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-400 font-semibold">
            CONTACT
          </p>

          <h2 className="text-5xl font-black mt-4">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have an idea? We'd love to hear about it.
            Let's create something incredible together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5">
              <Mail className="text-blue-500" size={32} />

              <div>
                <h3 className="font-bold text-xl">
                  Email
                </h3>

                <p className="text-gray-400">
                  harveyspecterlittt@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <Phone className="text-blue-500" size={32} />

              <div>
                <h3 className="font-bold text-xl">
                  Phone
                </h3>

                <p className="text-gray-400">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <MapPin className="text-blue-500" size={32} />

              <div>
                <h3 className="font-bold text-xl">
                  Location
                </h3>

                <p className="text-gray-400">
                  Agra, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-6"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl bg-black/40 border border-white/10 px-5 py-4 outline-none"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              required
              className="w-full rounded-xl bg-black/40 border border-white/10 px-5 py-4 outline-none"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full rounded-xl bg-black/40 border border-white/10 px-5 py-4 outline-none resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-center text-green-400">
                {success}
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;