import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import experienceData from "./experience-data";

function ExperienceSection() {
  const [expanded, setExpanded] = useState({});
  const [visibleCount, setVisibleCount] = useState(4);

  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const visibleExperiences = experienceData.slice(0, visibleCount);
  const hasMore = visibleCount < experienceData.length;

  return (
    <section>
      <div className="flex w-full flex-col gap-4">
        <AnimatePresence initial={false}>
          {visibleExperiences.map((exp) => {
            const isOpen = !!expanded[exp.id];
            return (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
                onClick={() => toggle(exp.id)}
                className="rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-zinc-300 transition-all duration-350 hover:scale-105 hover:shadow-inner hover:shadow-zinc-600 md:p-4"
              >
                {/* header always visible */}
                <div className="flex cursor-pointer items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={exp.img}
                      alt={exp.imgAlt}
                      className="h-16 w-16 rounded-lg md:h-18 md:w-18"
                    />
                    <div>
                      <h3 className="text-lg font-bold md:text-xl">
                        {exp.position}
                      </h3>
                      <p className="text-base text-zinc-400 md:text-lg">
                        {exp.company}
                      </p>
                      <p className="text-xs text-zinc-500 md:text-sm">
                        {exp.duration} ({exp.timeFrame})
                      </p>
                    </div>
                  </div>
                  <div className="-mt-14">
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
                      <p className="mt-2 mb-1 text-xs md:mx-24 md:text-base">
                        {exp.description}
                      </p>
                      <ul className="list-disc pl-6 text-xs md:mx-27 md:text-sm">
                        {exp.duties.map((d, i) => (
                          <li className="py-1" key={i}>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {hasMore ? (
          <motion.button
            layout
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="mx-auto mt-4 rounded-lg bg-zinc-700 px-6 py-2 text-zinc-200 transition hover:bg-zinc-600"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5 }}
          >
            Show More
          </motion.button>
        ) : (
          experienceData.length > 3 && (
            <motion.button
              layout
              onClick={() => setVisibleCount(4)}
              className="mx-auto mt-4 rounded-lg bg-zinc-700 px-6 py-2 text-zinc-200 transition hover:bg-zinc-600"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
            >
              Show Less
            </motion.button>
          )
        )}
      </div>
    </section>
  );
}

export default ExperienceSection;
