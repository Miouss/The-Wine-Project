
import { socials } from "./socials";

export const Socials = () => {
  const nbSocials = 4;

  return (
    <ol
      className="flex flex-wrap justify-around gap-4 border-black border-2"
      style={{ border: "solid 1px black", overflow: "hidden" }}
    >
      {Array.from({ length: nbSocials }, (_, i) => (
        <a
          href="https://google.com"
          target="_blank"
          key={i}
          className="switch-anim relative flex flex-col w-10 h-10 pb-1 border-b-[1px] border-white"
        >
          <div className="w-10 h-10 flex justify-center items-center">
            {socials[i][0]}
          </div>
          <div className="absolute w-10 h-10 flex justify-center items-center">
            {socials[i][1]}
          </div>
        </a>
      ))}
    </ol>
  );
};
