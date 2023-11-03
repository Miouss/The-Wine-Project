import { WinePrezLogo } from "@/assets/wines";
import { PrezImage } from "@/assets/about";
import { cinzel } from "@/fonts";
import {
  HeaderSectionFullScreen,
  DivAbsoluteFullParent,
} from "@/styled-components";

export function MainPrez() {
  return (
    <section className="flex flex-col gap-16 mb-16">
      <div className="relative flex flex-col gap-16 h-[calc(100vh-70px)]">
        <DivAbsoluteFullParent>
          <PrezImage />
        </DivAbsoluteFullParent>
        <div className="relative flex justify-center pt-32">
          <span className="absolute z-0">
            <WinePrezLogo />
          </span>

          <h1
            className={`${cinzel.className} font-bold relative text-5xl text-center mt-10 mb-14 text-white`}
          >
            L&apos;HISTOIRE
          </h1>
        </div>
      </div>
      <p className="text-left font-light px-16">
        Il y a plusieurs décennies, une petite parcelle de terre était transmise
        de génération en génération au sein de la famille de Gérard de Vir.
        Cette parcelle a été le point de départ d&apos;une histoire
        extraordinaire, celle de la création d&apos;une entreprise viticole qui
        allait devenir emblématique de la région. Au fil des ans, le vignoble
        est devenu le témoin silencieux de l&apos;engagement inébranlable de la
        famille envers la tradition viticole, et son vin est rapidement devenu
        prisé bien au-delà des frontières de la région.
      </p>
    </section>
  );
}
