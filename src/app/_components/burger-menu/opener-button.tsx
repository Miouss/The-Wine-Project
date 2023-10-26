import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  openMenu: () => void;
}

export function OpenerButton({ openMenu }: Props) {
  return (
    <button className="w-8 h-8" onClick={openMenu}>
      <RxHamburgerMenu className="w-full h-full" />
    </button>
  );
}
