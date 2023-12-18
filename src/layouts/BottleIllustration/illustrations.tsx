import Image from "next/image";
import { BottlesType } from "@/types";
import { IMAGES_LAYOUTS_FOLDER } from "@/config";

export function Illustrations() {
  return {
    [BottlesType.PINK]: {
      title: "Les Rosées",
      img: <IllustrationImage bottleType={BottlesType.PINK} />,
    },
    [BottlesType.RED]: {
      title: "Les Rouges",
      img: <IllustrationImage bottleType={BottlesType.RED} />,
    },
    [BottlesType.WHITE]: {
      title: "Les Blancs",
      img: <IllustrationImage bottleType={BottlesType.WHITE} />,
    },
  };
}

const IllustrationImage = ({ bottleType }: { bottleType: BottlesType }) => (
  <Image
    src={`${IMAGES_LAYOUTS_FOLDER}/BottleIllustration/${bottleType}.png`}
    alt={"A woman drinking a glass of wine"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);
