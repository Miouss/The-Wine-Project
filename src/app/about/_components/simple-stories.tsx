import { LegacyImage, ManImage } from "@/assets/about";
import React from "react";
import { cinzel } from "@/fonts";

export function SimpleStories() {
  return (
    <section className="flex flex-col gap-16">
      <SimpleStoryItem title={"L'HOMME"} image={<ManImage />}>
        Gérard de Vir, en tant que gardien des traditions familiales, a joué un
        rôle essentiel dans l&apos;ascension de l&apos;entreprise. Il a hérité
        de cette petite parcelle de terre avec une vision audacieuse et un désir
        passionné de créer quelque chose d&apos;exceptionnel. Sa passion pour le
        terroir, son savoir-faire hérité de ses aïeux et son amour pour le vin
        l&apos;ont guidé tout au long de son parcours. Il a planté des vignes,
        écouté les murmures du vent, et avec une patience infinie, faisant de
        cette petite entreprise un nom respecté dans l&apos;industrie viticole.
      </SimpleStoryItem>

      <SimpleStoryItem title={"L'HÉRITAGE"} image={<LegacyImage />}>
        Gérard de Vir, en tant que gardien des traditions familiales, a joué un
        rôle essentiel dans l&apos;ascension de l&apos;entreprise. Il a hérité
        de cette petite parcelle de terre avec une vision audacieuse et un désir
        passionné de créer quelque chose d&apos;exceptionnel. Sa passion pour le
        terroir, son savoir-faire hérité de ses aïeux et son amour pour le vin
        l&apos;ont guidé tout au long de son parcours. Il a planté des vignes,
        écouté les murmures du vent, et avec une patience infinie, faisant de
        cette petite entreprise un nom respecté dans l&apos;industrie viticole.
      </SimpleStoryItem>
    </section>
  );
}

interface SimpleStoryProps extends React.PropsWithChildren {
  title: string;
  image: React.ReactNode;
}

const SimpleStoryItem = ({ title, image, children }: SimpleStoryProps) => (
  <div className="flex flex-col gap-16 mb-16">
    <div className="relative h-[584px] w-screen flex">
      <div className="absolute z-0 w-full h-full">{image}</div>
      <h3 className={`${cinzel.className} relative z-1 text-4xl font-bold flex-1 flex justify-center items-center text-white`}>
        {title}
      </h3>
    </div>
    <p className="font-light px-16">{children}</p>
  </div>
);
