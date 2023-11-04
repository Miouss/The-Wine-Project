import { MainLogo } from "@/assets/commons";

export function Navbar() {
  return (
    <section className="for-mobile flex-1 flex flex-col items-center justify-center">
      <NavListMobile />
      <MainLogo />
    </section>
  );
}

const NavListMobile = () => (
  <nav className="flex-1 mt-24 w-full">
    <menu className="flex flex-col gap-4 mt-4 justify-center text-right p-10 text-2xl">
      <NavBtnMobile href={""}>Home</NavBtnMobile>
      <NavBtnMobile href={"wines"}>Wines</NavBtnMobile>
      <NavBtnMobile href={"activities"}>Activities</NavBtnMobile>
      <NavBtnMobile href={"about"}>About us</NavBtnMobile>
      <NavBtnMobile href={"contact"}>Contact</NavBtnMobile>
    </menu>
  </nav>
);



interface NavBtnProps extends React.PropsWithChildren {
  href: string;
}

const NavBtnMobile = ({ href, children }: NavBtnProps) => (
  <div className="border-r-2 border-black pr-4">
    <a href={`/${href}`}>{children}</a>
  </div>
);
