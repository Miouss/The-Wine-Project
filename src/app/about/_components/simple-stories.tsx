import { LegacyImage, ManImage } from "@/assets/about";
import React from "react";
import { cinzel } from "@/fonts";

export function SimpleStories() {
  return (
    <section className="flex flex-col gap-16 lg:gap-32 justify-center items-center">
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

      <SimpleStoryItem
        title={"L'HÉRITAGE"}
        image={<LegacyImage />}
        isReverse={true}
      >
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
  isReverse?: boolean;
}

const SimpleStoryItem = ({
  title,
  image,
  isReverse,
  children,
}: SimpleStoryProps) => (
  <div
    className={`flex flex-col lg:${isReverse ? "flex-row" : "flex-row-reverse"}
    gap-16
    lg:gap-[unset]
    justify-between
    mb-16
    lg:mb-0
    w-full
    max-w-[1184px]`}
  >
    <div className="relative h-[584px] lg:h-[750px] w-screen lg:max-w-[600px] flex">
      <div className="absolute z-0 w-full h-full">{image}</div>
      <TitleMobile>{title}</TitleMobile>
    </div>
    <div className="flex flex-col gap-4 justify-center">
      <TitleDesktop>{title}</TitleDesktop>
      <p className="font-light max-w-[512px] self-center">{children}</p>
    </div>
  </div>
);

const TitleMobile = ({ children }: React.PropsWithChildren) => (
  <h3
    className={`for-mobile ${cinzel.className} relative z-1 text-4xl font-bold flex-1 flex justify-center items-center text-white`}
  >
    {children}
  </h3>
);

const TitleDesktop = ({ children }: React.PropsWithChildren) => (
  <h3
    className={`for-desktop ${cinzel.className} relative z-1 text-6xl flex items-center`}
  >
    {children}
  </h3>
);
