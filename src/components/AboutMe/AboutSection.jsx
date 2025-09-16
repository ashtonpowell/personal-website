function AboutSection() {
  return (
    <section>
      <div className="md:justify-even flex flex-col-reverse items-center justify-center gap-6 md:flex-row md:items-start">
        <div>
          <img
            className="max-w-70 rounded-md bg-white"
            src="assets/AboutMe/beach.png"
            alt="Ashton and his wife standing on a beach"
          />
        </div>
        <div className="flex flex-col gap-4 rounded-md bg-zinc-800/30 py-4 hyphens-auto md:pl-6">
          <p className="px-6 text-sm md:mr-8 md:px-0 lg:mr-14 xl:text-lg">
            I’m a pharmacist and aspiring software developer with professional
            interests in medical software development, healthcare informatics
            and data analytics. I’m passionate about using technology to improve
            workflows, support better decision making, and create tools to make
            healthcare more accessible and effective.
          </p>
          <p className="px-6 text-sm md:mr-8 md:px-0 lg:mr-14 xl:text-lg">
            Outside of work and study, I enjoy spending time with my wife and
            our dog, Polly. I also love getting outdoors to hike, swim and
            recharge in nature.
          </p>
          <p className="px-6 text-sm md:mr-8 md:px-0 lg:mr-14 xl:text-lg">
            I’m always happy to connect with others who share a passion for
            healthcare and technology. Use my contact form below to get in
            touch!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
