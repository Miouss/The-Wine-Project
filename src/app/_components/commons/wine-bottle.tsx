import { BottleImage } from "@/assets/home";

interface WineBottleProps {
  nb: number;
  title: string;
  description: string;
}

export const WineBottle = ({ nb, title, description }: WineBottleProps) => {
  return (
    <div className="flex flex-col px-12">
      <figure className="flex flex-col gap-4 pb-6 border-b-4 border-[#B67561]">
        <div className="mx-16 flex justify-center">
          <BottleImage nb={nb} alt={title} />
        </div>
        <figcaption className="flex flex-col items-center justify-center text-xs text-center">
          <h4 className="text-xl">{title.toLocaleUpperCase()}</h4>
          <p>{description}</p>
        </figcaption>
      </figure>
    </div>
  );
}
