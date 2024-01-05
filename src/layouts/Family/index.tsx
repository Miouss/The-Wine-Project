import { FamilyCard } from "./FamilyMember";

export function Family() {
  return (
    <>
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
        <FamilyCard name="Alexandre le petit" title="Vigneron" nb={1} />
        <FamilyCard name="Héloïne Neil" title="Œnologue" nb={2} />
        <FamilyCard name="Sophia de Vir" title="Caviste" nb={3} />
        <FamilyCard name="Jules de Vir" title="Œnologue" nb={4} />
        <FamilyCard name="Gerard de Vir" title="Vigneron / CEO" />
      </div>
    </>
  );
}
