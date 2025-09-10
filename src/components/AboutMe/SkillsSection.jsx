import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skillsData from "./skills-data";

function SkillsSection() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="min-h-120">
      <div className="flex flex-col gap-4">
        {skillsData.map(({ id, title, skills, img, imgAlt }) => {
          const isOpen = !!expanded[id];
          return (
            <div
              key={id}
              onClick={() => toggle(id)}
              className="cursor-pointer rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-zinc-300 transition-all duration-350 hover:scale-105 hover:shadow-inner hover:shadow-zinc-600 md:p-4"
            >
              {/* header always visible */}
              <div className="flex items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                  <img
                    src={img}
                    alt={imgAlt}
                    className="h-16 w-16 rounded-lg bg-zinc-300 md:h-18 md:w-18"
                  />
                  <h3 className="text-lg font-bold md:text-xl">{title}</h3>
                </div>
                <div className="-mt-13.75">
                  <img
                    className="h-3 w-3 md:h-5 md:w-5"
                    src={
                      isOpen
                        ? "src/assets/icons/down-arrow.svg"
                        : "src/assets/icons/up-arrow.svg"
                    }
                    alt={isOpen ? "down arrow" : "up arrow"}
                  />
                </div>
              </div>

              {/* expanded content with framer-motion */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-2 list-disc pl-6 text-sm md:mx-22 md:text-base">
                      {skills.map((skill, index) => (
                        <li className="py-1" key={index}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
