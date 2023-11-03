import { FamilyImage } from "@/assets/about";
import { tertiary } from "@/colors";
import { cinzel } from "@/fonts";

export function Family() {
  return (
    <section className="flex flex-col py-48 px-6  gap-20">
      <h4 className={`${cinzel.className} text-3xl font-bold text-center`}>
        LA FAMILLE
      </h4>
      <p className="font-light text-left">
        Notre Famille, se compose de cinq âmes passionnées, mêlant tradition et
        innovation dans une atmosphère chaleureuse et familiale. Ensemble, nous
        détenons la clé du succès, créant des vins exceptionnels et tissant des
        expériences mémorables pour nos clients.
      </p>
      <div className="flex flex-wrap justify-around gap-y-6 gap-x-4">
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
  <figure className={`flex flex-col border-b-2 border-[${tertiary}] pb-6 gap-4`}>
    <div className="relative w-[160px] h-[240px]">
      <FamilyImage nb={nb} />
    </div>
    <figcaption className="flex flex-col gap-1 text-center">
      <h5 className={`${cinzel.className}`}>{name}</h5>
      <p>{title}</p>
    </figcaption>
  </figure>
);
