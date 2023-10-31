import { BottleImage } from "@/assets/home";

export function WinePrez() {
  return (
    <section className="flex flex-col gap-16">
      <WineBottle
        nb={1}
        title={"La clé de l'Aube"}
        description="Succombez à la passion en bouteille - Ouvrez les portes de l'élégance grâce à la clé du soir "
      />

      <WineBottle
        nb={2}
        title={"La clé des Rosées"}
        description="Succombez à la passion en bouteille - Ouvrez les portes de l'élégance grâce à la clé du soir "
      />

      <WineBottle
        nb={3}
        title={"La clé du Soir"}
        description="Succombez à la passion en bouteille - Ouvrez les portes de l'élégance grâce à la clé du soir "
      />
    </section>
  );
}

interface WineBottleProps {
  nb: number;
  title: string;
  description: string;
}

function WineBottle({ nb, title, description }: WineBottleProps) {
  return (
    <div className="flex flex-col">
      <figure className="flex flex-col gap-4 m-12 py-6 border-b-4 border-[#B67561]">
        <div className="mx-16 flex justify-center">
          <BottleImage nb={nb} alt={title} />
        </div>
        <figcaption className="flex flex-col items-center justify-center text-xs text-center">
          <h4 className="text-xl">{title}</h4>
          <p>{description}</p>
        </figcaption>
      </figure>
    </div>
  );
}
