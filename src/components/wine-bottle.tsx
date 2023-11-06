import { BottleImage } from "@/assets/home";

interface WineBottleProps {
  nb: number;
  title: string;
  description: string;
  isImgAtRight?: boolean;
}

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

export enum WinesType {
  PINK = "pink",
  RED = "red",
  WHITE = "white",
}

const wines: Record<WinesType, Wine[]> = {
  pink: wine("La clé des Rosées", "Perle Rosée", "Lueur Rosée"),
  red: wine("La clé du Soir", "Le Pourpre"),
  white: wine("La clé de l'aube"),
};

interface WineBottlesProps {
  winesType: WinesType;
  max?: number;
  forceImgAtRight?: boolean;
}

export const WineBottles = ({ winesType, max, forceImgAtRight }: WineBottlesProps) => {
  const getWinesBottles = (wine: Wine, i: number) => (
    <WineBottle
      key={wine.title}
      nb={i + 1}
      {...wine}
      isImgAtRight={forceImgAtRight ?? wine.isImgAtRight}
    />
  );

  return max !== undefined
    ? wines[winesType].slice(0, max).map(getWinesBottles)
    : wines[winesType].map(getWinesBottles);
};

const WineBottle = ({
  nb,
  title,
  description,
  isImgAtRight,
}: WineBottleProps) => {
  return (
    <div className="px-16 lg:px-0 w-full max-w-[992px]">
      <figure
        className={`flex flex-col ${
          isImgAtRight ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-4 pb-9 lg:p-0 border-b-4 border-[#B67561] lg:border-none items-center lg:justify-between`}
      >
        <div className="relative flex justify-center h-[240px] lg:h-[600px] w-[80px] lg:w-[200px]">
          <BottleImage nb={nb} title={title} />
        </div>
        <figcaption className="flex flex-col items-center justify-center gap-4 lg:w-[512px]">
          <h4 className="text-2xl lg:text-5xl text-center">
            {title.toLocaleUpperCase()}
          </h4>
          <p className="font-light text-left text-xs lg:text-2xl">
            {description}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};
