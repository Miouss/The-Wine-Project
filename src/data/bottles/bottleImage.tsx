import Image from "next/image";
import { BottlesType } from "@/types";
import { IMAGES_DATA_FOLDER } from "@/config";

export function BottleImage({
  name,
  title,
}: {
  name: BottlesType;
  title: string;
}) {
  return (
    <Image
      src={`${IMAGES_DATA_FOLDER}/bottles/${name}.png`}
      alt={`Bottle of wine '${title}'`}
      fill
    />
  );
}
