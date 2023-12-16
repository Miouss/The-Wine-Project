import { Pages } from "@/types";
import { Illustrations } from "./illustrations";
import { Logo } from "./logo";

interface Props {
  page: Pages.WINES | Pages.ABOUT | Pages.ACTIVITIES;
}

export const PageIllustration = ({ page }: Props) => {
  const { img, title } = Illustrations()[page];

  return (
    <div className="relative flex flex-col gap-16 h-[calc(100vh-68.1167px)] lg:h-[calc(100vh-105px)]">
      <DivAbsoluteFullParent>{img}</DivAbsoluteFullParent>
      <div className="relative flex justify-center pt-32 lg:pt-44">
        <span className="absolute z-0">
          <Logo />
        </span>

        <h1
          className={`font-cinzel relative text-5xl lg:text-8xl text-center mt-10 lg:mt-[calc(205px-176px)] mb-14 text-white`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

interface Props2 extends React.PropsWithChildren {
  className?: React.HTMLAttributes<HTMLElement>;
}

const DivAbsoluteFullParent = ({ children, className }: Props2) => (
  <div className={`absolute w-full z-0 h-full ${className}`}>{children}</div>
);
