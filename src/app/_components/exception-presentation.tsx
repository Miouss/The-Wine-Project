import { HistoryStyle } from "@/assets/home";
import { cinzel } from "@/fonts";

export function ExceptionPrez() {
  return (
    <section className="h-screen lg:h-[914px] flex flex-col gap-8 justify-center items-center px-16 lg:px-0 self-center max-w-[400px]">
      <h4 className={`${cinzel.className} text-3xl lg:text-6xl`}>
        L&apos;exception
      </h4>
      <p className="font-light lg:text-xl">
        Découvrez la clé de l&apos;exception viticole.<br /> Votre aventure ne fait
        que commencer !
      </p>
      <div className="self-end w-[132px] h-[24px]">
        <HistoryStyle />
      </div>
    </section>
  );
}
