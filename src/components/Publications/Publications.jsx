import Project from "../Projects/Project";
import publicationData from "./publications-data";

function Publications() {
  return (
    <section
      id="projects"
      className="mx-auto flex max-w-5xl flex-col flex-wrap items-center py-6 text-zinc-300"
    >
      <div className="my-6 grid w-7/8 grid-cols-1 items-stretch gap-6 md:w-full md:grid-cols-2 lg:grid-cols-3">
        {publicationData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Publications;
