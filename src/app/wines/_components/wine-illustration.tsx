import { cinzel } from "@/fonts";

interface Props {
  illustration: JSX.Element;
  title: string;
}

export function WineIllustration({ illustration, title }: Props) {
  return (
    <div className="relative flex flex-col gap-16 h-[calc(100vh-70px)]">
      <div className="absolute w-full h-full z-0">{illustration}</div>
      <div className="relative flex-1 flex  items-end tex pt-32 pl-16  bg-gradient-to-t from-black via-transparent">
        <h3
          className={`${cinzel.className} font-normal relative text-3xl text-center mt-10 mb-14 text-white`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
