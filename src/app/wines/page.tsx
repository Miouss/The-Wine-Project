import { MainPrez } from "./_components/main-presentation";
import { WineRedImage, WineRoseImage, WineWhiteImage } from "@/assets/wines";
import { WineBottle } from "../_components";
import { WineIllustration } from "./_components";

interface Wine {
  title: string;
  description: string;
  isImgAtRight?: boolean;
}

const wine = (...titles: string[]): Wine[] =>
  titles.map((title, i) => ({
    title,
    description:
      "Succombez à la passion en bouteille - Ouvrez les portes de l'élégance grâce à la clé du soir",
    isImgAtRight: i % 2 !== 0,
  }));

const WineBottles = ({ wines } : {wines: Wine[]}) =>
  wines.map((wine, i) => <WineBottle key={wine.title} nb={i + 1} {...wine} />);

const pinkWines = wine("La clé des Rosées", "Perle Rosée", "Lueur Rosée");
const redWines = wine("La clé du Soir", "Le Pourpre");
const whiteWines = wine("La clé de l'aube");

export default function Wines() {
  return (
    <main className="flex flex-col gap-48 mb-40">
      <MainPrez />
      <WineSection>
        <WineIllustration
          illustration={<WineRoseImage />}
          wineType="pink"
          title="Les Rosées"
        />

        <WineBottles wines={pinkWines} />
      </WineSection>
      <WineSection>
        <WineIllustration
          illustration={<WineWhiteImage />}
          wineType="white"
          title="Les Blancs"
        />
        <WineBottles wines={whiteWines} />
      </WineSection>
      <WineSection>
        <WineIllustration
          illustration={<WineRedImage />}
          wineType="red"
          title="Les Rouges"
        />
        <WineBottles wines={redWines} />
      </WineSection>
    </main>
  );
}

const WineSection = ({ children }: React.PropsWithChildren) => (
  <section className="flex flex-col gap-20 lg:gap-16 justify-center items-center">
    {children}
  </section>
);
