import { CiImageOn } from "react-icons/ci";
import { BurgerMenu } from "./_components";

export function Header() {
  return (
    <header className="flex sticky p-4 justify-between">
      <CiImageOn className="rounded-full w-12 h-12" />
      <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold flex-1 self-end text-center">
        Vigneron
      </h2>
      <div className="flex flex-col items-center">
        <BurgerMenu />
        <h2 className="text-xs text-center">Menu</h2>
      </div>
    </header>
  );
}
