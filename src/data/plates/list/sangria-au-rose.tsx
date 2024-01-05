import { IPlate, PlateName } from "../enums";
import { PlateImage } from "../plateImage";

export const sangriaAuRose: IPlate = {
  name: "Sangria au Rosé",
  img: <PlateImage name={PlateName.SANGRIA_AU_ROSE} />,
  description:
    "Mélangez le vin, le brandy, la liqueur d'orange et le sucre dans un pichet. Ajoutez les fruits et réfrigérez pendant quelques heures. Juste avant de servir, ajoutez de l'eau gazeuse pour une touche pétillante.",
  alt: "Plat",
  recipe: [
    "1 bouteille de vin rosé",
    "1/2 tasse de brandy",
    "1/4 tasse de liqueur d'orange",
    "1/4 tasse de sucre",
    "1 tasse de fraises, tranchées",
    "3/4 tasse de framboises",
    "1 pomme, coupée en dés",
    "1 citron, coupée en tranches",
    "1 pomme, coupée en dés",
    "2 tasses d'eau gazeuse",
  ],
};
