import { ActivityStyleImage, ReachUsImage } from "@/assets/activities";

export function ReachUs() {
  return (
    <section className="relative h-screen w-full flex flex-col">
      <div className="absolute h-screen w-[100%] z-0 bg-black">
        <ReachUsImage />
      </div>
      <div className="relative text-2xl font-light h-screen flex flex-col gap-6 px-12 pt-24 text-white justify-end pb-20">
        <p>Contactez-nous pour vivre une expérience exceptionnelle.</p>
        <div className="self-end">
          <ActivityStyleImage nb={1} />
        </div>
      </div>
    </section>
  );
}
