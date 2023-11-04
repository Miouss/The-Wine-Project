"use client";

import { useEffect, useState } from "react";
import { Content, OpenerButton } from ".";

export function MenuMobile() {
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
          <div className="for-mobile flex flex-col justify-center text-xs">
         <OpenerButton openMenu={openMenu} />
      {isMenuOpen && <Content closeMenu={closeMenu} />}
        <h2 className="text-center">Menu</h2>
    </div>
  )
}
