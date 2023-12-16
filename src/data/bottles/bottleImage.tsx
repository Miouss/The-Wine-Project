import Image from "next/image";
import { BottlesType } from "@/types";

export function BottleImage({
  name,
  title,
}: {
  name: BottlesType;
  title: string;
}) {
  return (
    <Image
      src={`/images/data/bottles/${name}.png`}
      alt={`Bottle of wine '${title}'`}
      fill
    />
  );
}
