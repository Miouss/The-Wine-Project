import { useState, AnimationEvent } from "react";
import styled from "styled-components";
import { CloserButton, SwitchLangButton } from ".";
import { MainLogo } from "@/assets/commons";

interface MenuProps {
  closeMenu: () => void;
}

enum Slide {
  In = "slideIn",
  Out = "slideOut",
}

export function Content({ closeMenu }: MenuProps) {
  const [slideAnim, setSlideAnim] = useState(Slide.In);

  const handleClick = () => {
    setSlideAnim(Slide.Out);
  };

  const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === Slide.Out) {
      closeMenu();
    }
  };

  return (
    <AnimatedDiv
      slideAnim={slideAnim}
      className={`absolute min-w-[100vw] p-4 top-0 left-0 min-h-screen flex flex-col bg-white sm:p-4`}
      onAnimationEnd={handleAnimationEnd}
    >
      <section className="flex flex-row-reverse gap-8">
        <CloserButton handleClick={handleClick} />
        <SwitchLangButton />
      </section>

      <section className="flex-1 flex flex-col items-center justify-center">
        <nav className="flex-1 mt-24 w-full">
          <menu className="flex flex-col gap-4 mt-4 justify-center text-right p-10 text-2xl">
            <NavBtn href={""}>Home</NavBtn>
            <NavBtn href={"wines"}>Wines</NavBtn>
            <NavBtn href={"activities"}>Activities</NavBtn>
            <NavBtn href={"about"}>About us</NavBtn>
            <NavBtn href={"contact"}>Contact</NavBtn>
          </menu>
        </nav>
        <MainLogo />
      </section>
    </AnimatedDiv>
  );
}

interface NavBtnProps extends React.PropsWithChildren {
  href: string;
}

function NavBtn({ href, children }: NavBtnProps) {
  return (
    <div className="border-r-2 border-black pr-4">
      <a href={`/${href}`}>{children}</a>
    </div>
  );
}

const slideAnim = (name: Slide, from: number, to: number) => `
  @keyframes ${name} {
    from {
      transform: translateX(${from}%);
    }
    to {
      transform: translateX(${to}%);
    }
  }
  `;

const slideInAnim = slideAnim(Slide.In, 100, 0);
const slideOutAnim = slideAnim(Slide.Out, 0, 100);

const AnimatedDiv = styled.div<{ slideAnim: string }>`
  animation: ${({ slideAnim }) => slideAnim} 0.2s forwards;

  ${slideInAnim}

  ${slideOutAnim}
`;
