import { MainPrez } from "./_components/main-presentation";
import { WineRedImage, WineRoseImage, WineWhiteImage } from "@/assets/wines";
import { WineBottles, WinesType } from "../_components";
import { WineIllustration } from "./_components";


export default function Wines() {
  return (
    <main className="flex flex-col gap-48 mb-40">
      <MainPrez />
      <WineSection>
        <WineIllustration
          illustration={<WineRoseImage />}
          wineType="pink"
          title="Les Rosées"
        />

        <WineBottles winesType={WinesType.PINK} />
      </WineSection>
      <WineSection>
        <WineIllustration
          illustration={<WineWhiteImage />}
          wineType="white"
          title="Les Blancs"
        />
        <WineBottles winesType={WinesType.WHITE} />
      </WineSection>
      <WineSection>
        <WineIllustration
          illustration={<WineRedImage />}
          wineType="red"
          title="Les Rouges"
        />
        <WineBottles winesType={WinesType.RED} />
      </WineSection>
    </main>
  );
}

const WineSection = ({ children }: React.PropsWithChildren) => (
  <section className="flex flex-col gap-20 lg:gap-16 justify-center items-center">
    {children}
  </section>
);
