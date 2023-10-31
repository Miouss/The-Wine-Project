import { WinePrezImage, WinePrezLogo } from "@/assets/wines";
import { cinzel } from "@/fonts";

export function MainPrez() {
  return (
    <section className="relative flex flex-col gap-16 h-[calc(100vh-70px)]">
      <div className="absolute w-full z-0 h-full">
        <WinePrezImage />
      </div>
      <div className="relative flex justify-center pt-32">
        <span className="absolute z-0">
          <WinePrezLogo />
        </span>

        <h1
          className={`${cinzel.className} font-bold relative text-5xl text-center mt-10 mb-14 text-white`}
        >
          LA CAVE
        </h1>
      </div>
    </section>
  );
}
