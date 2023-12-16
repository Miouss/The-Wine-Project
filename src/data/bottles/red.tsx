import { BottlesType } from "@/types";
import { Bottle } from ".";
import { BottleImage } from "./bottleImage";

export const RedBottle = (): Bottle => ({
  name: "La clé du Soir",
  img: <BottleImage name={BottlesType.RED} title="La clé du Soir" />,
  description:
    "Succombez à la passion en bouteille - Ouvrez les portes de l'élégance grâce à la clé du soir",
  alt: "Bottle of wine 'La clé du Soir'",
  price: 56,
  percentAlcohol: 12,
  capacity: 0.75,
});
