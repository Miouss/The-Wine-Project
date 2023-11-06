import { WineBottles, WinesType } from "@/app/_components";

export function WinesSuggestions(){
    return (
      <section className="flex flex-col gap-40 pt-16 pb-40 items-center">
        <WineBottles winesType={WinesType.PINK} max={2} />
      </section>
    );
}