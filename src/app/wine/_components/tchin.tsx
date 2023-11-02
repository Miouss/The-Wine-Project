import { TchinImage } from "@/assets/wine";
import { cinzel } from "@/fonts";

export function Tchin() {
  return (
    <section className="relative h-screen w-screen flex">
      <div className="absolute z-0 h-full w-full">
        <TchinImage />
      </div>
      <h5
        className={`${cinzel.className} self-end relative z-1 text-3xl pl-16 pb-20 text-white bg-gradient-to-t from-black via-transparent`}
      >
        À LA VOTRE
      </h5>
    </section>
  );
}
