import { DomainImage, ProcessImage } from "@/assets/about";
import { black } from "@/colors";
import { cinzel } from "@/fonts";

export function ComplexStories() {
  return (
    <section className="flex flex-col">
      <StoryIllustration title="LE DOMAINE" image={<DomainImage />}>
        Niché au cœur du Sud de la France, notre domaine est un sanctuaire de la
        tradition viticole et de la beauté de la région. Nos vignes
        s&apos;épanouissent sous la douce lumière méditerranéenne, dans un sol
        argilo-calcaire, et bénéficient d&apos;un climat chaud et ensoleillé
        ainsi que de la brise marine, créant un terroir unique pour nos raisins
        et des vins d&apos;une élégance exceptionnelle.
      </StoryIllustration>

      <StoryParagraph>
        Nos vignobles familiaux incarnent notre passion pour le vin et sont
        l&apos;essence même de notre entreprise, où l&apos;amour de la terre et
        la culture de la vigne donnent naissance à des vins qui réchauffent les
        cœurs, perpétuant l&apos;héritage de notre région viticole avec chaque
        bouteille que nous créons.
      </StoryParagraph>

      <StoryIllustration title="LE PROCESSUS" image={<ProcessImage />}>
        Tout commence par une récolte méticuleuse, un rituel intime où chaque
        grappe de raisin est choisie à son apogée de maturité. Les raisins,
        gardiens de secrets, sont acheminés vers la cave, où ils révèlent leurs
        mystères au cours du processus de vinification.
      </StoryIllustration>

      <StoryParagraph>
        Chaque bouteille devient une invitation à explorer l&apos;âme de notre
        domaine, à découvrir les trésors cachés dans chaque gorgée, et à percer
        le mystère de notre passion inébranlable pour le vin. Rejoignez-nous
        dans cette aventure vinique, où chaque bouteille est une clé pour
        déverrouiller les plaisirs les plus exquis que le vin peut offrir.
      </StoryParagraph>

      <StoryParagraph text={"left"}>
        La fermentation, orchestrée par notre vigneron passionné, transforme le
        sucre en alcool, créant une alchimie sensorielle. L&apos;élevage en fûts
        ou en cuves est une période de maturation mystique, donnant naissance à
        des saveurs et des arômes qui semblent surgir d&apos;un univers
        enchanté.
      </StoryParagraph>
    </section>
  );
}

interface StoryIllustationProps extends React.PropsWithChildren {
  title: string;
  image: React.ReactNode;
}

const StoryIllustration = ({
  title,
  image,
  children: paragraph,
}: StoryIllustationProps) => (
  <div className="relative h-screen w-screen gap-4 flex flex-col justify-end">
    <div className="absolute z-0 h-full w-full">{image}</div>
    <div
      className={`relative z-1 flex flex-col gap-4 text-white px-16 pb-20 bg-gradient-to-t from-[${black}] via-[${black}]`}
    >
      <h4 className={`${cinzel.className} text-2xl`}>
        {title.toLocaleUpperCase()}
      </h4>
      <p className="font-light">{paragraph}</p>
    </div>
  </div>
);

interface StoryParagraphProps extends React.PropsWithChildren {
  text?: "left" | "right";
}

const StoryParagraph = ({ text = "right", children }: StoryParagraphProps) => (
  <p className={`px-16 py-20 text-${text} text-white font-light bg-[${black}]`}>
    {" "}
    {children}{" "}
  </p>
);
