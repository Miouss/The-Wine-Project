export enum PlateName {
  SANGRIA_AU_ROSE = "sangria-au-rose",
  GAZPACHO_AU_ROSE = "gaspatcho-au-rose",
  GLACE_AU_ROSE = "glace-au-rose",
}

export interface IPlate {
  name: string;
  img: JSX.Element;
  description: string;
  alt: string;
  recipe: string[];
}
