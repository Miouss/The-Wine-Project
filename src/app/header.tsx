import { BurgerMenu } from "./_components";
import { HeaderLogo } from "@/assets/header";

export function Header() {
  return (
    <header className="flex sticky z-10 px-4 justify-between content-center h-[70px] bg-white font-light border-b-[1px] border-[#727272]">
      <HeaderLogo />

      <div className="flex flex-col justify-center text-xs">
        <BurgerMenu />
        <h2 className="text-center">Menu</h2>
      </div>
    </header>
  );
}
