import { BottleImage } from "@/assets/home";

interface WineBottleProps {
  nb: number;
  title: string;
  description: string;
  isImgAtRight?: boolean;
}

export const WineBottle = ({
  nb,
  title,
  description,
  isImgAtRight,
}: WineBottleProps) => {
  return (
    <div className="px-16 lg:px-0 w-full max-w-[992px]">
      <figure className={`flex flex-col ${isImgAtRight ? "lg:flex-row-reverse" : "lg:flex-row"} gap-4 pb-9 lg:p-0 border-b-4 border-[#B67561] lg:border-none items-center lg:justify-between`}>
        <div className="relative flex justify-center h-[240px] lg:h-[600px] w-[80px] lg:w-[200px]">
          <BottleImage nb={nb} alt={title} />
        </div>
        <figcaption className="flex flex-col items-center justify-center gap-4 lg:w-[512px]">
          <h4 className="text-2xl lg:text-5xl text-center">
            {title.toLocaleUpperCase()}
          </h4>
          <p className="font-light text-left text-xs lg:text-2xl">
            {description}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};
