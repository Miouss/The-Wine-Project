
import { IPlate, PlateName } from "./enums";
import { PlateImage } from "./plateImage";

export const gazpachoAuRose: IPlate = {
  name: "Gazpacho au Rosé",
  img: <PlateImage name={PlateName.SANGRIA_AU_ROSE} />,
  description:
    "Mélangez tous les ingrédients dans un mixeur jusqu'à obtenir une consistance lisse. Réfrigérez pendant quelques heures avant de servir. Ce gazpacho au rosé est parfait pour les journées chaudes d'été.",
  alt: "Plat",
  recipe: [
    "4 tomates, pelées et hachées",
    "1 concombre, pelé et haché",
    "1/4 de tasse de sucre",
    "1 poivron rouge, haché",
    "1 oignon rouge, haché",
    "2 gousses d'ail, hachées",
    "Jus d'un citron",
    "2 cuillères à soupe d'huile d'olive",
    "Sel et poivre, au goût",
  ],
};
