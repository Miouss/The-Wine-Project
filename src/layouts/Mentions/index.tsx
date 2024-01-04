import { Distinctions } from "./images";

export function Mentions() {
  return (
    <div className="flex flex-col lg:flex-col gap-4 max-w-[336px] w-[100%]">
      <h4 className="text-2xl">Nos Distinctions</h4>
      <Distinctions w={20} h={20} />
    </div>
  );
}
