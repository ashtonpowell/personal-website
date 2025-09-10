function Project({ type, title, description, image, imgAlt, link }) {
  return (
    <a href={link} target="_blank">
      <div className="flex h-full w-full flex-col items-center overflow-hidden rounded-xl border border-zinc-700 bg-gradient-to-b from-zinc-800 to-zinc-700 p-4 text-center transition-all duration-350 hover:scale-105 hover:shadow-inner hover:shadow-zinc-600">
        <h3 className="pb-2 pl-2 text-left text-xl font-bold">{title}</h3>
        <p className="pb-2 pl-2 text-left text-sm hyphens-auto">
          {description}
        </p>

        <div className="flex h-full items-center justify-center">
          <img
            className="rounded-xl object-contain p-1"
            src={image}
            alt={imgAlt}
          />
        </div>
      </div>
    </a>
  );
}

export default Project;
