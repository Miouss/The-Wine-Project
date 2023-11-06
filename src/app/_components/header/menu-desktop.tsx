import { SwitchLangButton } from "./menu-mobile";

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

const NavBtnDesktop = ({ href, children }: NavBtnProps) => (
  <div>
    <a href={`/${href}`}>{children}</a>
  </div>
);
