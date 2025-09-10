import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Project from "./Project";
import projectData from "./projects-data";

function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(3);
  };

  const visibleProjects = projectData.slice(0, visibleCount);
  const hasMore = visibleCount < projectData.length;

  return (
    <section
      id="projects"
      className="mx-auto flex max-w-5xl flex-col flex-wrap items-center py-6 text-zinc-300"
    >
      <div className="my-6 grid w-7/8 grid-cols-1 items-stretch gap-6 md:w-full md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.35 }}
            >
              <Project {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {hasMore ? (
        <button
          onClick={handleShowMore}
          className="mx-auto mt-4 rounded-lg bg-zinc-700 px-6 py-2 text-zinc-200 transition hover:bg-zinc-600"
        >
          Show More
        </button>
      ) : (
        projectData.length > 3 && (
          <button
            onClick={handleShowLess}
            className="mx-auto mt-4 rounded-lg bg-zinc-700 px-6 py-2 text-zinc-200 transition hover:bg-zinc-600"
          >
            Show Less
          </button>
        )
      )}
    </section>
  );
}

export default Projects;
