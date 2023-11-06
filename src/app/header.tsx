import { Menu } from "./_components";
import { HeaderLogo } from "@/assets/header";

export function Header() {
  return (
    <header className="flex sticky z-10 px-4 py-2 lg:px-16 lg:py-6 justify-between content-center bg-white font-light border-b-[1px] border-[#727272]">
      <HeaderLogo />
      <Menu />
    </header>
  );
}
