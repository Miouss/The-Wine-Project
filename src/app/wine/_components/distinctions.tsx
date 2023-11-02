import { DistinctionImage } from "@/assets/wine";
import { cinzel } from "@/fonts";

export function Distinctions() {
  return (
    <section className="flex flex-col px-16 py-48 gap-8">
      <h5 className={`${cinzel.className} text-3xl font-bold`}>DISTINCTIONS</h5>
      <div className="flex flex-col gap-6">
        <p className="font-light">
          Notre vin rosé a été honoré par plusieurs distinctions prestigieuses,
          saluant son équilibre, sa fraîcheur et son caractère raffiné. Ces prix
          témoignent de notre engagement envers la qualité et l&apos;art de la
          vinification. Chaque distinction reflète notre dévouement à créer un
          vin rosé exceptionnel, à partager avec passion et fierté.
        </p>
        <div className="flex justify-around">
          <DistinctionItem />
          <DistinctionItem nb={1} />
          <DistinctionItem nb={2} />
        </div>
      </div>
    </section>
  );
}

const DistinctionItem = ({ nb = 0 }) => (
  <div>
    <DistinctionImage nb={nb} />
  </div>
);
