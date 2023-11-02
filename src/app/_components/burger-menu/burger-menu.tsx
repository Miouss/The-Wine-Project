"use client";

import { useEffect, useState } from "react";
import { Content, OpenerButton } from ".";

export function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  return (
    <>
      <OpenerButton openMenu={openMenu} />
      {isMenuOpen && <Content closeMenu={closeMenu} />}
    </>
  );
}
