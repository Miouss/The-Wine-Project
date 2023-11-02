import { tertiary } from "@/colors";
import {
  Informations,
  WineSummary,
  Process,
  Distinctions,
  Plates,
  Tchin,
  WinesSuggestions
} from "./_components";

export default function Wine() {
  return (
    <main className="flex flex-col">
      <WineSummary />

      <div className={`border-t-2 border-[${tertiary}] mx-24 my-20`} />

      <Informations />

      <Process />
      <Distinctions />
      <Plates />
      <Tchin />
      <WinesSuggestions />
    </main>
  );
}
