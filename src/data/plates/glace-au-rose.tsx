import { IPlate, PlateName } from "./enums";
import { PlateImage } from "./plateImage";

export const glaceAuRose: IPlate = {
  name: "Glace au Rosé",
  img: <PlateImage name={PlateName.SANGRIA_AU_ROSE} />,
  description:
    "Mélangez le sucre et l'eau dans une casserole et portez à ébullition. Laissez refroidir, puis ajoutez le vin rosé. Versez le mélange dans une sorbetière et suivez les instructions du fabricant. Une fois prête, servez cette glace au vin rosé pour un dessert rafraîchissant.",
  alt: "Plat",
  recipe: ["1 bouteille de vin rosé", "1 tasse de sucre", "1/2 tasse d'eau"],
};
