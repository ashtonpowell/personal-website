function Header() {
  return (
    <header className="mx-auto flex max-w-110 flex-col flex-wrap items-center rounded-md bg-zinc-800/30 px-2 py-4 md:mt-4 md:max-w-[680px] md:px-6 md:py-6 lg:max-w-5xl">
      <div className="mb-2 flex w-full rounded-md bg-[url(/background.jpg)] bg-cover bg-no-repeat">
        <div className="flex w-full justify-center rounded-md bg-zinc-900/50 px-2 md:px-6 lg:px-8 xl:px-10">
          <img
            className=""
            src="assets/header/signature.svg"
            alt="Ashton's Signature"
          />
        </div>
      </div>
      <ul className="flex w-full flex-row justify-center gap-2.5 pt-2 text-lg text-zinc-300/90 md:gap-4 md:pt-4 md:text-xl lg:gap-6 lg:text-2xl">
        <li className="rounded-md bg-zinc-800 p-2 transition-all delay-40 hover:scale-110 hover:bg-zinc-800 hover:text-zinc-200 md:px-5">
          <a href="#aboutme">About Me</a>
        </li>
        <li className="rounded-md bg-zinc-800 p-2 transition-all delay-40 hover:scale-110 hover:bg-zinc-800 hover:text-zinc-200 md:px-5">
          <a href="#myworks">My Works</a>
        </li>
        <li className="rounded-md bg-zinc-800 p-2 transition-all delay-40 hover:scale-110 hover:bg-zinc-800 hover:text-zinc-200 md:px-5">
          <a href="#contactme">Contact Me</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
