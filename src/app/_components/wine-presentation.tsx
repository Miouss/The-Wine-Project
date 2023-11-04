import { WineBottle } from ".";

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
