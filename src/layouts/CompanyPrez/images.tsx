import { IMAGES_LAYOUTS_FOLDER } from "@/config";
import Image from "next/image";

const folder = IMAGES_LAYOUTS_FOLDER + "/CompanyPrez";

export const Logo = () => (
  <Image
    src={`${folder}/main-logo.svg`}
    alt={"Logo 'clés' stylish"}
    fill={true}
  />
);

export const ManHorizonImage = () => (
  <Image
    src={`${folder}/man-horizon.png`}
    alt={"A man far way on a desert road looking at the horizon"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);

export const BottleImage = () => (
  <Image
    src={`${folder}/bottle.png`}
    alt={`Bottle of wine 'les clés'`}
    fill={true}
  />
);

export const BottlesImage = () => (
  <Image
    src={`${folder}/bottles.png`}
    alt={`Bottle of wine 'les clés'`}
    fill={true}
  />
);

export const BlackLineImage = () => (
  <Image
    src={`/images/styles/black-line-stylish.svg`}
    alt={"black line with another small line at 45 degrees at the bottom right"}
    width={131}
    height={24}
  />
);
