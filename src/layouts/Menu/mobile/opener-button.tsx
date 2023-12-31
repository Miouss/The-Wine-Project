import { Lines } from "./images";


interface Props {
  openMenu: () => void;
}

export function OpenerButton({ openMenu }: Props) {
  return (
    <button className="w-[34.75px] h-8" onClick={openMenu}>
      <Lines />
    </button>
  );
}

