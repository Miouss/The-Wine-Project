import { DivGradient } from "@/components/DivGradient";
import { DomainImage, ProcessImage } from "./images";

const p1 = `Nos vignobles familiaux incarnent notre passion pour le vin et sont
          l'essence même de notre entreprise, où l'amour de la terre
          et la culture de la vigne donnent naissance à des vins qui réchauffent
          les cœurs, perpétuant l'héritage de notre région viticole avec
          chaque bouteille que nous créons`;

const p2 = `Chaque bouteille devient une invitation à explorer l&apos;âme de notre
        domaine, à découvrir les trésors cachés dans chaque gorgée, et à percer
        le mystère de notre passion inébranlable pour le vin. Rejoignez-nous
        dans cette aventure vinique, où chaque bouteille est une clé pour
        déverrouiller les plaisirs les plus exquis que le vin peut offrir.`;

const p3 = `La fermentation, orchestrée par notre vigneron passionné, transforme le
        sucre en alcool, créant une alchimie sensorielle. L&apos;élevage en fûts
        ou en cuves est une période de maturation mystique, donnant naissance à
        des saveurs et des arômes qui semblent surgir d&apos;un univers
        enchanté.`;

export function ComplexStories() {
  return (
    <section className="flex flex-col lg:gap-64">
      <StoryIllustration
        title="LE DOMAINE"
        image={<DomainImage />}
        isReverse={true}
      >
        <p className="font-light lg:text-xl">
          Niché au cœur du Sud de la France, notre domaine est un sanctuaire de
          la tradition viticole et de la beauté de la région. Nos vignes
          s&apos;épanouissent sous la douce lumière méditerranéenne, dans un sol
          argilo-calcaire, et bénéficient d&apos;un climat chaud et ensoleillé
          ainsi que de la brise marine, créant un terroir unique pour nos
          raisins et des vins d&apos;une élégance exceptionnelle.
        </p>
        <p className="for-desktop font-light text-xl">{p1}</p>
      </StoryIllustration>

      <StoryParagraph>{p1}</StoryParagraph>

      <StoryIllustration title="LE PROCESSUS" image={<ProcessImage />}>
        <p className="font-light lg:text-xl">
          Tout commence par une récolte méticuleuse, un rituel intime où chaque
          grappe de raisin est choisie à son apogée de maturité. Les raisins,
          gardiens de secrets, sont acheminés vers la cave, où ils révèlent
          leurs mystères au cours du processus de vinification.
        </p>
        <p className="for-desktop font-light  text-xl">{p2}</p>
        <p className="for-desktop font-light  text-xl">{p3}</p>
      </StoryIllustration>

      <StoryParagraph>{p2}</StoryParagraph>

      <StoryParagraph text={"left"}>{p3}</StoryParagraph>
    </section>
  );
}

interface StoryIllustationProps extends React.PropsWithChildren {
  title: string;
  image: React.ReactNode;
  isReverse?: boolean;
}

const StoryIllustration = ({
  title,
  image,
  isReverse,
  children: paragraphs,
}: StoryIllustationProps) => (
  <div
    className={`relative h-screen max-h-[800px] w-screen max-w-[1184px] flex flex-col 
    ${isReverse ? "lg:flex-row" : "lg:flex-row-reverse"} ${
      !isReverse && "lg:self-end"
    } 
    gap-4 lg:gap-20 lg:justify-between`}
  >
    <div className="absolute lg:relative z-0 h-full lg:h-[800px] w-full lg:w-[512px]">
      {image}
    </div>
    <DivGradient
      className={`justify-end lg:self-end relative z-1 flex-1 flex flex-col gap-4 text-white lg:text-black px-16 pb-20 lg:p-0  via-black via-20% via-transparant lg:bg-none `}
    >
      <h4 className={`font-cinzel text-4xl lg:text-6xl`}>
        {title.toLocaleUpperCase()}
      </h4>
      {paragraphs}
    </DivGradient>
  </div>
);

interface StoryParagraphProps extends React.PropsWithChildren {
  text?: "left" | "right";
}

const StoryParagraph = ({ text = "right", children }: StoryParagraphProps) => (
  <p
    className={`for-mobile px-16 py-20 text-${text} text-white font-light bg-black`}
  >
    {children}
  </p>
);
