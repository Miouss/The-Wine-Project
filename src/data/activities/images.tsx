import { IMAGES_DATA_FOLDER } from "@/config";
import Image from "next/image";
import { ActivityName } from "./enums";

export const ActivityImage = ({ name } : {name: ActivityName}) => (
  <Image
    src={`${IMAGES_DATA_FOLDER}/activities/${name}.png`}
    alt={"An activity"}
    fill={true}
    style={{ objectFit: "cover" }}
  />
);
