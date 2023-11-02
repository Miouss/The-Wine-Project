export const DivAbsoluteFullParent = ({
  children,
}: React.PropsWithChildren) => (
  <section className="absolute w-full z-0 h-full">{children}</section>
);
