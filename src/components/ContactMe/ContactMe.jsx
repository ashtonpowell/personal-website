import { useState } from "react";
import { createContact } from "../../api/ContactMeService";
import { motion, AnimatePresence } from "framer-motion";
import { RingLoader } from "react-spinners";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import { div } from "framer-motion/client";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [popup, setPopup] = useState({
    show: false,
    success: false,
    message: "",
  });

  const [msg, setMsg] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await createContact(formData);
      setPopup({
        show: true,
        success: true,
        message: "Message Sent!",
      });
      setLoading(false);
      setMsg(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setLoading(false);
      setPopup({
        show: true,
        success: false,
        message: "Failed to Send Message",
      });
    }

    setTimeout(() => {
      setPopup((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  return (
    <article id="contactme" className="pt-6 md:pt-12">
      <div className="mx-auto flex max-w-110 flex-col items-center rounded-md bg-zinc-800/30 px-2 py-4 md:max-w-[680px] md:items-start md:p-6 lg:max-w-5xl lg:p-8">
        <h2 className="rounded-md bg-zinc-800/80 px-8 py-1 text-xl font-semibold md:px-28 md:py-2 md:text-2xl">
          Contact Me
        </h2>
        <div className="flex w-full flex-col gap-4 md:gap-10 lg:flex-row">
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex w-full flex-col gap-4 rounded-md bg-zinc-800/80 p-6 lg:basis-3/4"
          >
            <label className="text-lg font-medium">Name</label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              value={formData.name}
              placeholder="Your name"
              required
              className="w-full rounded-md border-2 border-zinc-700 bg-zinc-900 p-2"
            />
            <label className="text-lg font-medium">Email</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Your email"
              required
              className="w-full rounded-md border-2 border-zinc-700 bg-zinc-900 p-2"
            />
            <label className="text-lg font-medium">Subject</label>
            <input
              name="subject"
              type="text"
              onChange={handleChange}
              value={formData.subject}
              placeholder="Subject"
              className="w-full rounded-md border-2 border-zinc-700 bg-zinc-900 p-2"
            />

            <label className="text-lg font-medium">Message</label>
            <textarea
              name="message"
              rows="6"
              onChange={handleChange}
              value={formData.message}
              placeholder="Your message"
              required
              className="w-full rounded-md border-2 border-zinc-700 bg-zinc-900 p-2"
            />

            <div className="flex flex-col items-center">
              {loading ? (
                <div className="mt-2 flex flex-col items-center justify-center gap-4 text-sm text-zinc-400">
                  <RingLoader color="#d4d4d8" loading={loading} size={80} />
                  Sending...
                </div>
              ) : msg ? (
                <p className="mt-2 text-center text-lg font-semibold">
                  Thanks! I'll get back to you soon.
                </p>
              ) : (
                <button
                  type="submit"
                  className="mt-2 w-1/2 rounded-md bg-zinc-700 px-4 py-2 text-xl text-zinc-200 transition-all delay-40 hover:scale-110 hover:bg-zinc-600"
                >
                  Send
                </button>
              )}
            </div>
          </form>
          <div className="mt-10 hidden rounded-md bg-zinc-800/80 pt-6 lg:block lg:basis-1/4">
            <div className="flex h-full flex-col items-center justify-start gap-14 text-center">
              <h1 className="text-xl font-semibold xl:text-2xl">
                Social Media
              </h1>
              <FaGithub
                cursor="pointer"
                className="text-6xl transition-all delay-40 hover:scale-110 hover:text-zinc-50 xl:text-7xl"
              />
              <FaLinkedin
                cursor="pointer"
                className="text-6xl transition-all delay-40 hover:scale-110 hover:text-zinc-50 xl:text-7xl"
              />
              <FaXTwitter
                cursor="pointer"
                className="text-6xl transition-all delay-40 hover:scale-110 hover:text-zinc-50 xl:text-7xl"
              />
              <FaSquareYoutube
                cursor="pointer"
                className="text-6xl transition-all delay-40 hover:scale-110 hover:text-zinc-50 xl:text-7xl"
              />
            </div>
          </div>
          <div className="block rounded-md bg-zinc-800/80 p-3 md:p-6 lg:hidden">
            <div className="text-center">
              <h1 className="text-xl font-semibold md:text-2xl">
                Social Media
              </h1>
            </div>
            <div className="flex justify-center gap-6 pt-2 md:gap-10">
              <FaGithub
                cursor="pointer"
                className="text-5xl transition-all delay-40 hover:scale-110 hover:text-zinc-50 md:text-6xl"
              />
              <FaLinkedin
                cursor="pointer"
                className="text-5xl transition-all delay-40 hover:scale-110 hover:text-zinc-50 md:text-6xl"
              />
              <FaXTwitter
                cursor="pointer"
                className="text-5xl transition-all delay-40 hover:scale-110 hover:text-zinc-50 md:text-6xl"
              />
              <FaSquareYoutube
                cursor="pointer"
                className="text-5xl transition-all delay-40 hover:scale-110 hover:text-zinc-50 md:text-6xl"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <AnimatePresence>
            {popup.show && (
              <motion.div
                key="popup"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                className={`fixed bottom-6 rounded-full bg-zinc-800 px-4 py-3 shadow-lg md:bottom-10 ${
                  popup.success
                    ? "border-4 border-green-600 text-zinc-300"
                    : "border-4 border-red-600 text-zinc-300"
                }`}
              >
                {popup.message}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}

export default ContactMe;
