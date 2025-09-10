function About() {
  return (
    <section className="mx-auto mt-10 flex max-w-110 flex-col items-center justify-evenly gap-8 md:max-w-[680px] md:flex-row md:items-stretch md:justify-evenly lg:max-w-5xl">
      <div className="flex flex-col items-center justify-center rounded-md bg-zinc-800/30 py-2 md:w-2/3 md:max-w-none">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Hi, I'm Ashton!
        </h1>
        <p className="text-md mt-2 p-2 text-center text-zinc-400 md:w-7/8 md:text-base lg:w-3/4 lg:text-xl xl:text-2xl">
          I'm a highly driven and curious individual, always looking for a new
          adventure.
        </p>
      </div>
      <div className="flex items-center justify-center rounded-md bg-zinc-800/30 p-6 py-6 md:w-1/3 md:max-w-none">
        <img
          src="assets/headshot.png"
          alt=""
          className="flex-none rounded-md"
        />
      </div>
    </section>
  );
}

export default About;
