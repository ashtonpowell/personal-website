import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";

function AboutMe() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <article id="aboutme" className="pt-6 md:pt-12">
      <div className="mx-auto flex max-w-110 flex-col items-center rounded-md bg-zinc-800/30 px-2 py-4 md:max-w-[680px] md:items-start md:p-6 lg:max-w-5xl lg:p-8">
        <h2 className="rounded-md bg-zinc-800/80 px-8 py-1 text-xl md:px-32 md:py-2 md:text-2xl">
          About Me
        </h2>
        <div className="mt-6 max-w-5xl">
          <ul className="flex flex-row gap-3 text-sm text-zinc-400 md:gap-4 md:text-lg">
            <li>
              <button
                onClick={() => setActiveTab("about")}
                className={`inline-block origin-center rounded-md px-2 py-1 transition-transform duration-200 ease-in-out ${
                  activeTab === "about"
                    ? "scale-110 bg-zinc-700 text-zinc-200 shadow-md shadow-zinc-800"
                    : "hover:scale-110 hover:text-zinc-300"
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("experience")}
                className={`inline-block origin-center rounded-md px-2 py-1 transition-transform duration-200 ease-in-out ${
                  activeTab === "experience"
                    ? "scale-110 bg-zinc-700 text-zinc-200 shadow-md shadow-zinc-800"
                    : "hover:scale-110 hover:text-zinc-300"
                }`}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("skills")}
                className={`inline-block origin-center rounded-md px-2 py-1 transition-transform duration-200 ease-in-out ${
                  activeTab === "skills"
                    ? "scale-110 bg-zinc-700 text-zinc-200 shadow-md shadow-zinc-800"
                    : "hover:scale-110 hover:text-zinc-300"
                }`}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("education")}
                className={`inline-block origin-center rounded-md px-2 py-1 transition-transform duration-200 ease-in-out ${
                  activeTab === "education"
                    ? "scale-110 bg-zinc-700 text-zinc-200 shadow-md shadow-zinc-800"
                    : "hover:scale-110 hover:text-zinc-300"
                }`}
              >
                Education
              </button>
            </li>
          </ul>
        </div>
        <div className="mt-10 w-full" style={{ minHeight: 300 }}>
          <AnimatePresence mode="wait">
            {activeTab === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
              >
                <AboutSection />
              </motion.div>
            )}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
              >
                <ExperienceSection />
              </motion.div>
            )}
            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
              >
                <EducationSection />
              </motion.div>
            )}
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
              >
                <SkillsSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}

export default AboutMe;
