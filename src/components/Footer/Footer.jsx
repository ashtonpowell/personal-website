import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite, SiFlask, SiGooglecloud } from "react-icons/si";

function Footer() {
  return (
    <footer className="mx-auto mt-4 flex max-w-5xl flex-col items-start py-4 text-zinc-300">
      <div className="my-6 h-[2px] w-full bg-radial from-zinc-300 via-zinc-700 to-transparent"></div>
      <div className="flex w-full justify-center">
        <div>
          <h3 className="pt-4 text-center text-lg">
            I built this site using...
          </h3>
          <ul className="flex flex-row justify-center gap-6 py-4 text-center text-xs">
            <li className="transition-all delay-40 hover:scale-110 hover:text-zinc-50">
              <a target="_blank" href="https://vite.dev/">
                <SiVite
                  cursor="pointer"
                  className="text-5xl xl:text-6xl"
                ></SiVite>
                <p className="pt-1">Vite</p>
              </a>
            </li>
            <li className="transition-all delay-40 hover:scale-110 hover:text-zinc-50">
              <a target="_blank" href="https://react.dev/">
                <FaReact
                  cursor="pointer"
                  className="text-5xl xl:text-6xl"
                ></FaReact>
                <p className="pt-1">React</p>
              </a>
            </li>
            <li className="transition-all delay-40 hover:scale-110 hover:text-zinc-50">
              <a target="_blank" href="https://tailwindcss.com/">
                <RiTailwindCssFill
                  cursor="pointer"
                  className="text-5xl xl:text-6xl"
                ></RiTailwindCssFill>
                <p className="pt-1">Tailwind CSS</p>
              </a>
            </li>
            <li className="transition-all delay-40 hover:scale-110 hover:text-zinc-50">
              <a target="_blank" href="https://flask.palletsprojects.com/">
                <SiFlask
                  cursor="pointer"
                  className="text-5xl xl:text-6xl"
                ></SiFlask>
                <p className="pt-1">Flask</p>
              </a>
            </li>
            <li className="transition-all delay-40 hover:scale-110 hover:text-zinc-50">
              <a target="_blank" href="https://cloud.google.com/">
                <SiGooglecloud
                  cursor="pointer"
                  className="text-5xl xl:text-6xl"
                ></SiGooglecloud>
                <p className="pt-1">Google Cloud</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
