import { RxGlobe } from "react-icons/rx";

export function SwitchLangButton() {
  return (
    <div className="flex flex-col self-end items-center">
      <button className="w-8 h-8  bg-white self-center text-center">
        <RxGlobe className="w-full h-full" />
      </button>
      Lang
    </div>
  );
}
