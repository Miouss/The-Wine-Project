import { IMAGES_LAYOUTS_FOLDER } from "@/config";
import Image from "next/image";

export const TchinImage = () => (
  <Image
    src={`${IMAGES_LAYOUTS_FOLDER}/Tchin/tchin.png`}
    alt={"Portrait of a woman looking at a glass of wine, saturated in red"}
    fill={true}
    style={{ objectFit: "cover", filter: "brightness(0.8)" }}
  />
);
