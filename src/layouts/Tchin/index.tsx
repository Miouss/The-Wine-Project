import { TchinImage } from "./images";

export function Tchin() {
  return (
    <>
      <div className="absolute z-0 h-full w-full">
        <TchinImage />
      </div>
      <h5
        className={`font-cinzel self-end relative z-1 text-3xl lg:text-6xl pl-16 pb-20 lg:pb-32 text-white bg-gradient-to-t lg:bg-none from-black via-transparent`}
      >
        À LA VOTRE
      </h5>
    </>
  );
}
