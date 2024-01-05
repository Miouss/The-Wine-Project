import { BottlesType } from "@/types";
import { BottleImage } from "../bottleImage";
import { Bottle } from "../enums";

export const PinkBottle: Bottle = {
  name: "La clé des Rosées",
  img: <BottleImage name={BottlesType.PINK} title="La clé des Rosées" />,
  description:
    "Succombez à la passion en bouteille - Ouvrez les portes de l'élégance grâce à la clé du soir",
  alt: "Bottle of wine 'La clé des Rosées'",
  price: 80,
  percentAlcohol: 8,
  capacity: 0.75,
};