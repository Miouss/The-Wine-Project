"use client";

import { useEffect, useState } from "react";
import { SwitchLangButton } from "./mobile/switch-lang-button";

export const Desktop = () => (
  <>
    <nav className="for-desktop flex-1 flex justify-center items-center">
      <menu className="flex gap-10 justify-center text-2xl">
        <div className="h-2 border-black"></div>
        <NavBtnDesktop href={""}>Home</NavBtnDesktop>
        <NavBtnDesktop href={"wines"}>Wines</NavBtnDesktop>
        <NavBtnDesktop href={"activities"}>Activities</NavBtnDesktop>
        <NavBtnDesktop href={"about"}>About us</NavBtnDesktop>
        <NavBtnDesktop href={"contact"}>Contact</NavBtnDesktop>
      </menu>
    </nav>
    <div className="for-desktop flex flex-col">
      <SwitchLangButton />
    </div>
  </>
);

interface NavBtnProps extends React.PropsWithChildren {
  href: string;
}

const NavBtnDesktop = ({ href, children }: NavBtnProps) => {
  const [borderClass, setBorderClass] = useState("");

  useEffect(() => {
    const isCurrentPage = window.location.pathname === `/${href}`;

    setBorderClass(
      isCurrentPage ? "font-bold scale-125 pointer-events-none" : ""
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`transition-all duration-150 ease-in-out hover:scale-110 ${borderClass}`}
    >
      <a href={`/${href}`}>{children}</a>
    </div>
  );
};
