import { PLATES  } from "@/data/plates";
import { PlateName, IPlate } from "@/data/plates/enums";

export function Plates() {
  
  return (
    <section className="text-center flex flex-col gap-8 lg:gap-20 lg:max-w-[928px] self-center lg:pb-64">
      <h5 className={`font-cinzel text-3xl lg:leading-normal lg:text-[86px]`}>
        QUELQUES PLATS
      </h5>
      <div className="flex flex-col flex-wrap lg:flex-row lg:justify-between lg:gap-y-32 text-left">
        <Plate plate={PLATES[PlateName.SANGRIA_AU_ROSE]} />
        <Plate plate={PLATES[PlateName.GAZPACHO_AU_ROSE]} />
        <Plate plate={PLATES[PlateName.GLACE_AU_ROSE]} />
      </div>
    </section>
  );
}

interface PlateProps {
  plate: IPlate;
}

const Plate = ({ plate }: PlateProps) => (
  <div className="flex flex-col gap-10 lg:max-w-[390px] last:m-auto font-light pb-20 lg:pb-0">
    <div className="relative w-full h-[200px]">{plate.img}</div>
    <div className="flex flex-col gap-4 px-16 lg:px-0">
      <h5 className={`text-tertiary text-2xl lg:text-3xl`}>{Plate.name}</h5>
      <div className="flex flex-col gap-4 lg:text-xl">
        <div>
          <h6>Ingrédients :</h6>
          <ul className="list-disc pl-20">
            {plate.recipe.map((ingredient) => (
              <li key={ingredient} className="whitespace-nowrap">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <p className="font-light">{plate.description}</p>
      </div>
    </div>
  </div>
);
