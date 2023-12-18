import { IMAGES_LAYOUTS_FOLDER } from "@/config";
import { Pages } from "@/types";
import Image from "next/image";

interface Illustration {
  title: string;
  img: JSX.Element;
}
type IIlustrations = {
  [page in Pages.WINES | Pages.ABOUT | Pages.ACTIVITIES]: Illustration;
};

export function Illustrations(): IIlustrations {
  return {
    [Pages.WINES]: {
      title: "La Cave",
      img: (
        <PageIllustrationImage
          page={Pages.WINES}
          alt="A wine's cave with a lot of bottles"
        />
      ),
    },
    [Pages.ACTIVITIES]: {
      title: "Activités",
      img: (
        <PageIllustrationImage
          page={Pages.ACTIVITIES}
          alt="A woman serving wine in a glass"
        />
      ),
    },
    [Pages.ABOUT]: {
      title: "L'histoire",
      img: (
        <PageIllustrationImage
          page={Pages.ABOUT}
          alt="A book open on a table lighted by a candel, it's pretty dark"
        />
      ),
    },
  };
}
const PageIllustrationImage = ({ page, alt }: { page: Pages; alt: string }) => (
  <Image
    src={`${IMAGES_LAYOUTS_FOLDER}/PageIllustration/${page}.jpg`}
    alt={alt}
    fill={true}
    style={{ objectFit: "cover", filter: "brightness(50%)" }}
  />
);
