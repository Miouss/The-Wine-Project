import { LogoImages } from "@/components/LogoImages";
import { Menu } from "@/layouts/Menu";

export function Header() {
  return (
    <header className="flex sticky z-10 px-4 py-2 lg:px-16 lg:py-6 justify-between content-center bg-white font-light border-b-[1px] border-[#727272]">
      {LogoImages().black}
      <Menu />
    </header>
  );
}
