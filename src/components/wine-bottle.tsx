import { BottleImage } from "@/assets/home";

interface WineBottleProps {
  nb: number;
  title: string;
  description: string;
}

export const WineBottle = ({ nb, title, description }: WineBottleProps) => {
  return (
    <div className="flex flex-col px-16">
      <figure className="flex flex-col gap-4 pb-9 border-b-4 border-[#B67561]">
        <div className="mx-16 flex justify-center">
          <BottleImage nb={nb} alt={title} />
        </div>
        <figcaption className="flex flex-col items-center justify-center text-xs  gap-4">
          <h4 className="text-2xl text-center">{title.toLocaleUpperCase()}</h4>
          <p className="font-light  text-left">{description}</p>
        </figcaption>
      </figure>
    </div>
  );
};
