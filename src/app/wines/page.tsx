import { MainPrez } from './_components/main-presentation';
import { WineRedImage, WineRoseImage, WineWhiteImage } from "@/assets/wines";
import { WineBottle } from '../_components';
import { WineIllustration } from './_components';

export default function Wines() {
  return (
    <main className="flex flex-col gap-48 mb-40">
      <MainPrez />
      <WineSection>
        <WineIllustration illustration={<WineRoseImage />} title="Les Rosées" />
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
        <WineBottle
          nb={3}
          title="Lueur Rosée"
          description="Succombez à la passion en bouteille - Ouvrez les portes de l'élégance grâce à la clé du soir"
        />
      </WineSection>
      <WineSection>
        <WineIllustration
          illustration={<WineWhiteImage />}
          title="Les Blancs"
        />
        <WineBottle
          nb={1}
          title="La clé de l'aube"
          description="Succombez à la passion en bouteille - Ouvrez les portes de l'élégance grâce à la clé du soir"
        />
      </WineSection>
      <WineSection>
        <WineIllustration illustration={<WineRedImage />} title="Les Rouges" />
        <WineBottle
          nb={1}
          title="La clé du Soir"
          description="Succombez à la passion en bouteille - Ouvrez les portes de l'élégance grâce à la clé du soir"
        />

        <WineBottle
          nb={2}
          title="Le Pourpre"
          description="Succombez à la passion en bouteille - Ouvrez les portes de l'élégance grâce à la clé du soir"
        />
      </WineSection>
    </main>
  );
}

const WineSection = ({ children }: React.PropsWithChildren) => <section className="flex flex-col gap-40">{children}</section>
