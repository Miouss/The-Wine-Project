import { useRef } from "react";

interface ChevronProps extends ChevronSideProps {
  sign: "<" | ">";
  position: "left" | "right";
}
const Chevron = ({ sign, position, handleClick }: ChevronProps) => {
  const chevronRef = useRef<HTMLDivElement>(null);

  const handleClickHere = () => {
    chevronRef.current!.style.pointerEvents = "none";
    setTimeout(() => {
      chevronRef.current!.style.pointerEvents = "all";
    }, 500);
    handleClick(position);
  };

  return (
    <div
      ref={chevronRef}
      className={`absolute h-[100%] w-10 flex justify-center items-center z-10 cursor-pointer text-white group select-none`}
      style={{ [position]: 0 }}
      onClick={handleClickHere}
    >
      <span className="group-hover:scale-150 transition-transform duration-50 lg:text-2xl lg:px-2">
        {sign}
      </span>
    </div>
  );
};

interface ChevronSideProps {
  handleClick: (swipeSide: "left" | "right") => void;
}

export const ChevronLeft = (props: ChevronSideProps) => (
  <Chevron sign="<" position="left" {...props} />
);
export const ChevronRight = (props: ChevronSideProps) => (
  <Chevron sign=">" position="right" {...props} />
);
