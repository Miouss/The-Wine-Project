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

  return (
    <>
      <OpenerButton openMenu={openMenu} />
      {isMenuOpen && <Content closeMenu={closeMenu} />}
    </>
  );
}