import { MainPrez } from "./_components/main-presentation";
import { BottlePrez, BottlesType } from "@/layouts/BottlePrez";
import { BottleIllustration } from "@/layouts/BottleIllustration";

export default function Wines() {
  return (
    <main className="flex flex-col gap-48 mb-40">
      <MainPrez />
      <BottleSection>
        <BottleIllustration bottleType={BottlesType.PINK} />
        <BottlePrez bottleType={BottlesType.PINK} />
      </BottleSection>
      <BottleSection>
        <BottleIllustration bottleType={BottlesType.WHITE} />
        <BottlePrez bottleType={BottlesType.WHITE} />
      </BottleSection>
      <BottleSection>
        <BottleIllustration bottleType={BottlesType.RED} />
        <BottlePrez bottleType={BottlesType.RED} isImgAtRight={true} />
      </BottleSection>
    </main>
  );
}

const BottleSection = ({ children }: React.PropsWithChildren) => (
  <section className="flex flex-col gap-20 lg:gap-16 justify-center items-center">
    {children}
  </section>
);
