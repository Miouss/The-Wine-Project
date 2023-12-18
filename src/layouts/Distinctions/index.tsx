import { DistinctionImage } from "@/components/DistinctionsImages";

export const Distinctions = () => (
  <section className="flex flex-col px-16 lg:px-0 py-48 lg:py-64 gap-8 self-center max-w-[800px]">
    <h5
      className={`font-cinzel text-center text-3xl lg:leading-normal lg:text-[86px]`}
    >
      DISTINCTIONS
    </h5>
    <div className="flex flex-col gap-6 lg:gap-16 ">
      <p className="font-light lg:text-2xl  text-left">
        Notre vin rosé a été honoré par plusieurs distinctions prestigieuses,
        saluant son équilibre, sa fraîcheur et son caractère raffiné. Ces prix
        témoignent de notre engagement envers la qualité et l&apos;art de la
        vinification. <br />
        Chaque distinction reflète notre dévouement à créer un vin rosé
        exceptionnel, à partager avec passion et fierté.
      </p>
      <div className="flex justify-around lg:justify-evenly">
        <DistinctionItem />
        <DistinctionItem nb={1} />
        <DistinctionItem nb={2} />
      </div>
    </div>
  </section>
);

const DistinctionItem = ({ nb = 0 }) => (
  <div className="relative h-20 lg:h-32 w-20 lg:w-32">
    <DistinctionImage nb={nb} />
  </div>
);
