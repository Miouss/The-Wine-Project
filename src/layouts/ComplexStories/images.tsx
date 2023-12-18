import { IMAGES_LAYOUTS_FOLDER } from "@/config";
import Image from "next/image";

const folder = IMAGES_LAYOUTS_FOLDER + "/ComplexStories";

export const ProcessImage = () => (
  <Image
    className="bg-black"
    src={`${folder}/the-process.png`}
    fill={true}
    alt={
      "A glass of wine, with the wine in form of waves, in a dark room, grayscale except the red color of the wine"
    }
    style={{ objectFit: "cover" }}
  />
);

export const DomainImage = () => (
  <Image
    src={`${folder}/the-domain.jpg`}
    fill={true}
    alt={"An agricultural fields, mountains at sight, slightly cloudy sky"}
    style={{ objectFit: "cover", filter: "brightness(0.5)" }}
  />
);
