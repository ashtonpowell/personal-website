import educationData from "./education-data";

function EducationSection() {
  return (
    <section className="">
      <div className="flex flex-col gap-4 md:gap-4">
        {educationData.map(
          ({ id, institution, degree, duration, img, imgAlt }) => (
            <div
              key={id}
              className="flex flex-row items-start gap-4 rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-zinc-300 md:p-4"
            >
              <img
                src={img}
                alt={imgAlt}
                className="h-16 w-16 rounded-lg md:h-18 md:w-18"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-bold md:text-xl">{institution}</h3>
                <p className="text-base text-zinc-400 md:text-lg">{degree}</p>
                <p className="text-xs text-zinc-500 md:text-sm">{duration}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

export default EducationSection;
