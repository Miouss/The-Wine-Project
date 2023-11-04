"use client"

import { useState, AnimationEvent } from "react";
import styled from "styled-components";
import { CloserButton, SwitchLangButton } from ".";
import { Navbar } from "..";

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

      <Navbar />
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
