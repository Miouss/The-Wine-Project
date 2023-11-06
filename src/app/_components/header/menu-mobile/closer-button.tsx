import { RxCross1 } from "react-icons/rx";

interface Props {
  handleClick: () => void;
}

export function CloserButton({ handleClick }: Props) {
  return (
    <div className="flex flex-col self-end items-center">
      <button
        className="w-8 h-8  bg-white self-center text-center"
        onClick={handleClick}
      >
        <RxCross1 className="w-full h-full" />
      </button>
      Close
    </div>
  );
}
