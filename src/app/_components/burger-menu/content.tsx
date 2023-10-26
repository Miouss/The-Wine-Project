import { useState, AnimationEvent } from "react";
import styled from "styled-components";
import { CloserButton, SwitchLangButton } from ".";

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

      <section className="mt-32 flex-1 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center">MARQUE</h2>

        <nav className="flex-1 mt-24">
          <ul className="flex flex-col gap-4 mt-4 justify-center">
            <a href={"/"}>Home</a>
            <a href={"/contact"}>Contact</a>
            <a href={"/wines"}>Accueil</a>
            <a href={"/activities"}>Activities</a>
            <a href={"/about"}>About us</a>
          </ul>
        </nav>
      </section>
    </AnimatedDiv>
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
