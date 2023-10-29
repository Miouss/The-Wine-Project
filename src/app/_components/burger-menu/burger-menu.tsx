"use client";

import { useState } from "react";
import { Content, OpenerButton } from ".";

export function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  if (isMenuOpen) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }

  return (
    <>
      <OpenerButton openMenu={openMenu} />
      {isMenuOpen && <Content closeMenu={closeMenu} />}
    </>
  );
}