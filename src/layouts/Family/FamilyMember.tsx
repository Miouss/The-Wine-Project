import { tertiary } from "@/colors";
import { FamilyImage } from "./images";

interface FamilyMemberProps {
  name: string;
  title: string;
  nb?: number;
}

export const FamilyCard = ({ name, title, nb = 0 }: FamilyMemberProps) => (
  <div className="flex-[25%] flex justify-center">
    <figure
      className={`flex flex-col border-b-[1px] border-[${tertiary}] pb-6 gap-4`}
    >
      <div className="relative w-[160px] h-[240px] self-center">
        <FamilyImage nb={nb} />
      </div>
      <figcaption className="flex flex-col gap-1 text-center">
        <h5 className={`font-cinzel`}>{name}</h5>
        <p>{title}</p>
      </figcaption>
    </figure>
  </div>
);
