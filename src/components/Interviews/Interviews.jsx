import interviewData from "./interviews-data";
import Project from "../Projects/Project";

function Interviews() {
  return (
    <section
      id="projects"
      className="mx-auto flex max-w-5xl flex-col flex-wrap items-center py-6 text-zinc-300"
    >
      <div className="my-6 grid w-7/8 grid-cols-1 items-stretch gap-6 md:w-full md:grid-cols-2 lg:grid-cols-3">
        {interviewData.map((interview) => (
          <Project key={interview.id} {...interview} />
        ))}
      </div>
    </section>
  );
}

export default Interviews;
