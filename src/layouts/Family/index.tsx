import { tertiary } from "@/colors";
import { FamilyImage } from "./images";

export function Family() {
  return (
    <section className="flex flex-col py-48 px-6 lg:px-0 gap-20 max-w-[800px] self-center">
      <h4
        className={`font-cinzel text-3xl lg:text-[86px] lg:leading-normal text-center`}
      >
        LA FAMILLE
      </h4>
      <p className="font-light text-left lg:text-2xl">
        Notre Famille, se compose de cinq âmes passionnées, mêlant tradition et
        innovation dans une atmosphère chaleureuse et familiale. Ensemble, nous
        détenons la clé du succès, créant des vins exceptionnels et tissant des
        expériences mémorables pour nos clients.
      </p>
      <div className="flex flex-wrap justify-around gap-y-6 lg:gap-y-10 gap-x-4 lg:text-xl">
        <FamilyMember name="Alexandre le petit" title="Vigneron" nb={1} />
        <FamilyMember name="Héloïne Neil" title="Œnologue" nb={2} />
        <FamilyMember name="Sophia de Vir" title="Caviste" nb={3} />
        <FamilyMember name="Jules de Vir" title="Œnologue" nb={4} />
        <FamilyMember name="Gerard de Vir" title="Vigneron / CEO" />
      </div>
    </section>
  );
}

interface FamilyMemberProps {
  name: string;
  title: string;
  nb?: number;
}

const FamilyMember = ({ name, title, nb = 0 }: FamilyMemberProps) => (
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
