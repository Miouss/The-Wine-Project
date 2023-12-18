import { PropsWithChildrenAndClassName } from "@/app/types";

export const DivGradient = ({
  children,
  className,
}: PropsWithChildrenAndClassName) => (
  <div className={`bg-gradient-to-t from-black ${className}`}>{children}</div>
);
