import { Partners } from "@/layouts/Partners";
import { Legals } from "@/layouts/Legals";
import { FindUs } from "@/layouts/FindUs";
import { Mentions } from "@/layouts/Mentions";
import { LogoImages } from "@/components/LogoImages";
import "./footer.css";

export function Footer() {
  return (
    <footer className="relative px-16 lg:px-40 pt-8 lg:pt-16 py-2 lg:py-4 gap-10 lg:gap-16 flex flex-col items-center bg-footer bg-cover text-white font-light">
      <div className="for-mobile flex justify-center">{LogoImages().small}</div>

      <div className="for-desktop absolute top-0 left-0 flex w-full justify-center mt-[85px]">
        <div>{LogoImages().small}</div>
      </div>

      <div className="lg:w-full flex flex-col lg:flex-row lg:justify-between gap-10">
        <Partners />
        <Mentions />
      </div>

      <div className="flex flex-col gap-10 lg:gap-8">
        <FindUs />
        <Legals />
      </div>
    </footer>
  );
}
