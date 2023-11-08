import Image from "next/image";
import { socials } from "../../public/assets/socials"; 
import "./footer.css";

const footerFolder = "/assets/footer";

export const FooterLogo = () => (
  <Image
    src={`${footerFolder}/logo.svg`}
    width={128}
    height={128}
    alt={"Logo 'clés' stylish"}
  />
);

export const Distinctions = () => {
  const nbDistinctions = 4;

  return (
    <ol className="h-full w-full flex gap-4">
      {Array.from({ length: nbDistinctions }, (_, i) => (
        <div key={i} className="relative w-10 h-10">
          <Image
            src={`${footerFolder}/distinction${i}.svg`}
            fill={true}
            alt={`Logo distinction ${i}`}
          />
        </div>
      ))}
    </ol>
  );
};

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
