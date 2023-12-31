import { IMAGES_LAYOUTS_FOLDER } from "@/config";
import Image from "next/image";

export const Distinctions = ({w = 10, h = 10}) => {
  const nbDistinctions = 4;

  return (
    <ol className="h-full w-full flex gap-4">
      {Array.from({ length: nbDistinctions }, (_, i) => (
        <div key={i} className={`relative w-${w} h-${h}`}>
          <Image
            src={`${IMAGES_LAYOUTS_FOLDER}/Mentions/distinction${i}.svg`}
            fill={true}
            alt={`Logo distinction ${i}`}
          />
        </div>
      ))}
    </ol>
  );
};
