"use client";

import { useEffect, useState } from "react";
import { Content } from "./content";
import { OpenerButton } from "./opener-button";

export function Mobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const fctToCall = isMenuOpen ? "add" : "remove";

    document.body.classList[fctToCall]("menu-open");
  }, [isMenuOpen]);

  return (
    <div className="for-mobile flex flex-col justify-center text-xs">
      <OpenerButton openMenu={openMenu} />
      {isMenuOpen && <Content closeMenu={closeMenu} />}
      <h2 className="text-center">Menu</h2>
    </div>
  );
}
