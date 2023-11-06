import { cinzel } from "@/fonts";

interface Props {
  illustration: JSX.Element;
  title: string;
  wineType: "red" | "white" | "pink";
}

export function WineIllustration({ illustration, title, wineType }: Props) {
  const wineBg = {
    red: "lg:bg-wine-red",
    white: "lg:bg-wine-white",
    pink: "lg:bg-wine-pink",
  };

  return (
    <div className={`relative flex flex-col gap-16 h-[calc(100vh-70px)] lg:flex-row w-full max-w-[1184px] ${wineBg[wineType]}`}>
      <div className={`absolute lg:relative w-full lg:w-[600px] z-0 h-full`}>
        {illustration}
      </div>
      <div
        className={`relative flex-1 flex items-end bg-gradient-to-t lg:bg-none from-black lg:from-transparent via-black lg:via-transparent via-10%`}
      >
        <h3
          className={`${cinzel.className} font-normal relative lg:w-full text-3xl lg:text-6xl text-center pl-16 lg:p-0 mb-14 lg:mb-32 text-white lg:text-black lg:self-end`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
