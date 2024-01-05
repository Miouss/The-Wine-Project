import { sangriaAuRose } from "./list/sangria-au-rose";
import { gazpachoAuRose } from "./list/gazpacho-au-rose";
import { glaceAuRose } from "./list/glace-au-rose";
import { PlateName, IPlate } from "./enums";


export const PLATES: Record<PlateName, IPlate> = {
  [PlateName.SANGRIA_AU_ROSE]: sangriaAuRose,
  [PlateName.GAZPACHO_AU_ROSE]: gazpachoAuRose,
  [PlateName.GLACE_AU_ROSE]: glaceAuRose,
};
