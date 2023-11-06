import { PrezImage } from "@/assets/about";
import { DivFullscreenWithLogo } from "@/components/div-fullscreen";

export const Prez = () => (
  <section className="flex flex-col gap-16 mb-16">
    <DivFullscreenWithLogo bgImage={<PrezImage />} title={"L'HISTOIRE"} />

    <p className="text-left font-light mx-16 max-w-[800px] self-center">
      Il y a plusieurs décennies, une petite parcelle de terre était transmise
      de génération en génération au sein de la famille de Gérard de Vir. Cette
      parcelle a été le point de départ d&apos;une histoire extraordinaire,
      celle de la création d&apos;une entreprise viticole qui allait devenir
      emblématique de la région. Au fil des ans, le vignoble est devenu le
      témoin silencieux de l&apos;engagement inébranlable de la famille envers
      la tradition viticole, et son vin est rapidement devenu prisé bien au-delà
      des frontières de la région.
    </p>
  </section>
);
