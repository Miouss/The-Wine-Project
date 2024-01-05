import { DivGradient } from "@/components/DivGradient";
import { DomainImage, ProcessImage } from "./images";
import { STORIES } from "@/data/stories";
import { P } from "@/data/stories/structure";

export function ComplexStories() {
  const { vineyard, domain, process } = STORIES;
  return (
    <section className="flex flex-col lg:gap-64">
      <StoryIllustration
        title="LE DOMAINE"
        image={<DomainImage />}
        isReverse={true}
      >
        <P>{domain}</P>
        <P className="for-desktop">{process[0]}</P>
      </StoryIllustration>

      <StoryParagraph>{vineyard}</StoryParagraph>

      <StoryIllustration title="LE PROCESSUS" image={<ProcessImage />}>
        <P className="for-desktop">{process[0]}</P>
        <P className="for-desktop">{process[1]}</P>
        <P className="for-desktop">{process[2]}</P>
      </StoryIllustration>

      <StoryParagraph>{process[1]}</StoryParagraph>

      <StoryParagraph text={"left"}>{process[3]}</StoryParagraph>
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
