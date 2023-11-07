"use client";

import { SwitchLangButton } from "./menu-mobile";
import "./menu-desktop.css";
import { useEffect, useState } from "react";

export const MenuDesktop = () => (
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
    setBorderClass(
      window.location.pathname === `/${href}` ? "border-underline" : ""
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`nav-btn-desktop ${borderClass}`}>
      <a href={`/${href}`}>{children}</a>
    </div>
  );
};
