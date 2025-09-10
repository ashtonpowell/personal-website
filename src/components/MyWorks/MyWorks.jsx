import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Interviews from "../Interviews/Interviews";
import Projects from "../Projects/Projects";
import Publications from "../Publications/Publications";

function MyWorks() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <article id="myworks" className="pt-6 md:pt-12">
      <div className="mx-auto flex max-w-110 flex-col items-center rounded-md bg-zinc-800/30 px-2 py-4 md:max-w-[680px] md:items-start md:p-6 lg:max-w-5xl lg:p-8">
        <h2 className="rounded-md bg-zinc-800/80 px-8 py-1 text-xl md:px-28 md:py-2 md:text-2xl">
          My Works
        </h2>
        <div className="mt-6 max-w-5xl">
          <ul className="flex flex-row gap-3 text-sm text-zinc-400 md:gap-4 md:text-lg">
            <li>
              <button
                onClick={() => setActiveTab("projects")}
                className={`inline-block origin-center rounded-md px-2 py-1 transition-transform duration-200 ease-in-out ${
                  activeTab === "projects"
                    ? "scale-110 bg-zinc-700 text-zinc-200 shadow-md shadow-zinc-800"
                    : "hover:scale-110 hover:text-zinc-300"
                }`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("publications")}
                className={`inline-block origin-center rounded-md px-2 py-1 transition-transform duration-200 ease-in-out ${
                  activeTab === "publications"
                    ? "scale-110 bg-zinc-700 text-zinc-200 shadow-md shadow-zinc-800"
                    : "hover:scale-110 hover:text-zinc-300"
                }`}
              >
                Publications
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("interviews")}
                className={`inline-block origin-center rounded-md px-2 py-1 transition-transform duration-200 ease-in-out ${
                  activeTab === "interviews"
                    ? "scale-110 bg-zinc-700 text-zinc-200 shadow-md shadow-zinc-800"
                    : "hover:scale-110 hover:text-zinc-300"
                }`}
              >
                Interviews
              </button>
            </li>
          </ul>
        </div>
        <div>
          <AnimatePresence mode="wait">
            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
              >
                <Projects />
              </motion.div>
            )}
            {activeTab === "publications" && (
              <motion.div
                key="publications"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
              >
                <Publications />
              </motion.div>
            )}
            {activeTab === "interviews" && (
              <motion.div
                key="interviews"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
              >
                <Interviews />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}

export default MyWorks;
