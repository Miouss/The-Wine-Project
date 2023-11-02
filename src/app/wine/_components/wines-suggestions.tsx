import { WineBottle } from "@/app/_components";

export function WinesSuggestions(){
    return (
      <section className="flex flex-col gap-40 pt-16 pb-40">
        <WineBottle
          nb={1}
          title="La clé des Rosées"
          description="Succombez à la passion en bouteille - Ouvrez les portes de l'élégance grâce à la clé du soir"
        />
        <WineBottle
          nb={2}
          title="Perle Rosée"
          description="Succombez à la passion en bouteille - Ouvrez les portes de l'élégance grâce à la clé du soir"
        />
      </section>
    );
}