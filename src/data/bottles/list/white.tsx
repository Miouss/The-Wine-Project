import { BottlesType } from "@/types";
import { BottleImage } from "../bottleImage";
import { Bottle } from "../enums";

export const WhiteBottle: Bottle = {
  name: "La clé de l'aube",
  img: <BottleImage name={BottlesType.WHITE} title="La clé de l'aube" />,
  description:
    "Succombez à la passion en bouteille - Ouvrez les portes de l'élégance grâce à la clé du soir",
  alt: "Bottle of wine 'La clé de l'aube'",
  price: 24,
  percentAlcohol: 10,
  capacity: 0.75,
};