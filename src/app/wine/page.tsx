import { tertiary } from "@/colors";
import {
  Informations,
  WineSummary,
  Process,
  Distinctions,
  Plates,
  Tchin,
  WinesSuggestions,
} from "./_components";

export default function Wine() {
  return (
    <main className="relative z-0 flex flex-col">
      <WineSummary />

      <div className={`h-[2px] bg-[${tertiary}] mx-24`} />

      <Informations />

      <Process />
      <Distinctions />
      <Plates />
      <Tchin />
      <WinesSuggestions />
    </main>
  );
}
